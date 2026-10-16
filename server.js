import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT) || 3001;
const currentDir = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.post("/api/contact", (request, response) => {
  const { name, phone, message = "" } = request.body ?? {};
  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof phone !== "string" ||
    !phone.trim() ||
    typeof message !== "string"
  ) {
    return response.status(400).json({ error: "Please provide your name and phone number." });
  }

  const text = [
    `Hello Satair Wafi, my name is ${name.trim()}.`,
    `My phone number is ${phone.trim()}.`,
    message.trim() ? `I'm interested in: ${message.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  response.json({
    whatsappUrl: `https://wa.me/966545914297?text=${encodeURIComponent(text)}`,
  });
});

if (process.env.NODE_ENV === "production") {
  const clientPath = path.join(currentDir, "dist");
  app.use(express.static(clientPath));
  app.get("*", (_request, response) => {
    response.sendFile(path.join(clientPath, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Satair Wafi server listening on port ${port}`);
});
