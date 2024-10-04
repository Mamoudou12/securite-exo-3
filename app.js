import express from "express";

const app = express();

const API_KEY = "1234567";

const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["y-api-key"]; // Récupérer la clé API depuis les en-têtes
  if (apiKey && apiKey === API_KEY) {
    next(); // Si la clé est valide, on passe à la route suivante
  } else {
    res
      .status(401)
      .json({ message: "Accès refusé. Clé API invalide ou manquante." });
  }
};

const PORT = 3015;

app.get("/api/private-data", checkApiKey, (req, res) => {
  res.json({ message: "Accès aux données privées non sécurisé." });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
