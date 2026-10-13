
import { chatModel, db } from "./firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

const css = document.createElement("style");
css.textContent = `
#nexora-ai-button {
  position:fixed; right:24px; bottom:24px; z-index:9998;
  width:64px; height:64px; border:0; border-radius:50%;
  background:linear-gradient(135deg,#f97316,#ea580c);
  color:white; font-size:27px; cursor:pointer;
  box-shadow:0 10px 30px #7c2d123d;
  transition:transform .2s, box-shadow .2s;
}
#nexora-ai-button:hover {
  transform:translateY(-3px);
  box-shadow:0 14px 34px #7c2d1255;
}
#nexora-ai-panel {
  position:fixed; right:24px; bottom:100px; z-index:9999;
  width:min(390px,calc(100vw - 28px)); height:min(570px,70vh);
  display:none; flex-direction:column; overflow:hidden;
  border:1px solid #e5e7eb; border-radius:22px;
  background:#fff; color:#172033;
  box-shadow:0 20px 70px #17203330;
  font-family:Inter,Arial,sans-serif;
}
#nexora-ai-panel.open { display:flex; }
#nexora-ai-header {
  padding:18px; display:flex; align-items:center; gap:12px;
  color:white; background:linear-gradient(120deg,#172033,#263650);
}
#nexora-ai-avatar {
  width:43px;height:43px;border-radius:15px;background:#f97316;
  display:grid;place-items:center;font-size:22px;
}
#nexora-ai-heading { flex:1; }
#nexora-ai-heading strong { display:block;font-size:16px; }
#nexora-ai-heading small { display:block;margin-top:4px;color:#d1d5db; }
#nexora-ai-close {
  border:0;background:transparent;color:white;font-size:25px;cursor:pointer;
}
#nexora-ai-messages {
  flex:1; overflow-y:auto;padding:18px;background:#f8fafc;
  display:flex;flex-direction:column;gap:12px;
}
.nexora-ai-message {
  max-width:88%;padding:12px 14px;border-radius:16px;
  font-size:14px;line-height:1.55;white-space:pre-wrap;overflow-wrap:anywhere;
}
.nexora-ai-bot { align-self:flex-start;background:white;border:1px solid #e5e7eb;border-bottom-left-radius:5px; }
.nexora-ai-user { align-self:flex-end;background:#f97316;color:white;border-bottom-right-radius:5px; }
#nexora-ai-quick {
  display:flex;gap:7px;flex-wrap:wrap;padding:0 14px 12px;background:#f8fafc;
}
.nexora-ai-quick-button {
  padding:8px 10px;border:1px solid #fed7aa;border-radius:18px;
  background:white;color:#9a3412;font-size:12px;cursor:pointer;
}
#nexora-ai-form { display:flex;gap:8px;padding:13px;border-top:1px solid #e5e7eb;background:white; }
#nexora-ai-input {
  flex:1;min-width:0;border:1px solid #d1d5db;border-radius:22px;
  padding:12px 14px;font-size:14px;outline:none;
}
#nexora-ai-input:focus { border-color:#f97316;box-shadow:0 0 0 3px #fed7aa80; }
#nexora-ai-send {
  width:44px;height:44px;border:0;border-radius:50%;background:#f97316;color:white;
  font-size:20px;cursor:pointer;
}
#nexora-ai-send:disabled { opacity:.5;cursor:wait; }
#nexora-ai-note { padding:0 14px 10px;text-align:center;color:#6b7280;background:white;font-size:10px; }
@media(max-width:480px) {
  #nexora-ai-button { right:16px;bottom:16px;width:58px;height:58px; }
  #nexora-ai-panel { right:10px;bottom:84px;height:min(570px,76vh); }
}
`;
document.head.appendChild(css);

const button = document.createElement("button");
button.id = "nexora-ai-button";
button.type = "button";
button.setAttribute("aria-label", "Open Nexora AI Assistant");
button.textContent = "✦";
button.title = "Chat with Nexora AI";

const panel = document.createElement("section");
panel.id = "nexora-ai-panel";
panel.setAttribute("aria-label", "Nexora AI Assistant");
panel.innerHTML = `
  <header id="nexora-ai-header">
    <div id="nexora-ai-avatar">✦</div>
    <div id="nexora-ai-heading">
      <strong>Nexora AI</strong>
      <small>Shopping assistant · Ready to help</small>
    </div>
    <button id="nexora-ai-close" type="button" aria-label="Close chat">×</button>
  </header>
  <div id="nexora-ai-messages" aria-live="polite"></div>
  <div id="nexora-ai-quick">
    <button class="nexora-ai-quick-button" type="button">Find a product</button>
    <button class="nexora-ai-quick-button" type="button">Help with checkout</button>
    <button class="nexora-ai-quick-button" type="button">Suggest a gift</button>
  </div>
  <form id="nexora-ai-form">
    <input id="nexora-ai-input" maxlength="1000" autocomplete="off"
      placeholder="Ask me anything..." aria-label="Your message" required>
    <button id="nexora-ai-send" type="submit" aria-label="Send message">↑</button>
  </form>
  <div id="nexora-ai-note">AI can make mistakes. Check product details before ordering.</div>
`;

document.body.append(button, panel);

const messages = panel.querySelector("#nexora-ai-messages");
const form = panel.querySelector("#nexora-ai-form");
const input = panel.querySelector("#nexora-ai-input");
const sendButton = panel.querySelector("#nexora-ai-send");
let chat;
let catalog = [];
let catalogLoaded = false;

function addMessage(text, type) {
  const bubble = document.createElement("div");
  bubble.className = `nexora-ai-message nexora-ai-${type}`;
  bubble.textContent = text;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
  return bubble;
}

function openChat() {
  panel.classList.add("open");
  button.textContent = "×";
  button.setAttribute("aria-label", "Close Nexora AI Assistant");
  input.focus();
}

function closeChat() {
  panel.classList.remove("open");
  button.textContent = "✦";
  button.setAttribute("aria-label", "Open Nexora AI Assistant");
}

button.addEventListener("click", () => {
  panel.classList.contains("open") ? closeChat() : openChat();
});
panel.querySelector("#nexora-ai-close").addEventListener("click", closeChat);

addMessage(
  "Hi! 👋 Welcome to Nexora. I'm your AI shopping assistant. I can help you discover products, compare options, and navigate your shopping journey. What can I help you find today?",
  "bot"
);

async function loadCatalog() {
  if (catalogLoaded) return catalog;
  catalogLoaded = true;

  try {
    const snapshot = await getDocs(collection(db, "products"));
    catalog = snapshot.docs.map(document => ({
      id: document.id,
      ...document.data()
    }));
  } catch (error) {
    console.warn("Nexora AI could not load the product catalogue.", error);
    catalog = Array.isArray(window.NEXORA_PRODUCTS)
      ? window.NEXORA_PRODUCTS
      : [];
  }

  return catalog;
}

function relevantProducts(question) {
  const words = question.toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(word => word.length > 2);

  return catalog
    .map(product => {
      const searchable = [
        product.name, product.category, product.description,
        ...(Array.isArray(product.highlights) ? product.highlights : [])
      ].join(" ").toLowerCase();

      const score = words.reduce(
        (total, word) => total + (searchable.includes(word) ? 1 : 0), 0
      );
      return { product, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ product }) => ({
      name: product.name || "Unnamed product",
      category: product.category || "Uncategorised",
      price: product.price ?? "Not listed",
      oldPrice: product.oldPrice ?? null,
      rating: product.rating ?? "Not listed",
      stock: product.stock ?? "Not listed",
      description: product.description || ""
    }));
}


async function sendMessage(text) {
  const question = text.trim();
  if (!question || sendButton.disabled) return;

  addMessage(question, "user");
  input.value = "";
  sendButton.disabled = true;
  input.disabled = true;

  const thinking = addMessage("Thinking…", "bot");
  let timeoutId;

  try {
    const request = (async () => {
      await loadCatalog();

      if (!chat) chat = chatModel.startChat();

      const productContext = relevantProducts(question);

      const prompt = `
Customer question:
${question}

Nexora product catalogue count: ${catalog.length}
Relevant product information:
${JSON.stringify(productContext)}

Answer naturally and helpfully. Recommend only products listed in the supplied catalogue.
Never invent product prices, ratings, stock, discounts, or order statuses.
If product information is missing, say so honestly.
For order-specific questions, direct the customer to the order history or tracking page.
Never ask for passwords, OTPs, card numbers, or payment secrets.
`;

      const result = await chat.sendMessage(prompt);
      return result.response.text();
    })();

    const timeout = new Promise((_, reject) => {
      timeoutId = setTimeout(() => {
        reject(new Error("Nexora AI request timed out"));
      }, 30000);
    });

    const answer = await Promise.race([request, timeout]);

    thinking.textContent = answer ||
      "Sorry, I couldn't create a response. Please try again.";
  } catch (error) {
    console.error("Nexora AI request failed:", error);

    thinking.textContent =
      error.message === "Nexora AI request timed out"
        ? "The response is taking too long. Please try again."
        : "I'm having trouble connecting right now. Please check your connection and try again.";
  } finally {
    clearTimeout(timeoutId);
    sendButton.disabled = false;
    input.disabled = false;
    messages.scrollTop = messages.scrollHeight;
    input.focus();
  }
}

form.addEventListener("submit", event => {
  event.preventDefault();
  sendMessage(input.value);
});

panel.querySelectorAll(".nexora-ai-quick-button").forEach(quickButton => {
  quickButton.addEventListener("click", () => {
    openChat();
    sendMessage(quickButton.textContent);
  });
});