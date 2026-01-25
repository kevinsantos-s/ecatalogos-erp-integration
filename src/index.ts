import express from "express";
import { routes } from "./routes/routes";

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.json({ message: "Integração ERP (Bling) rodando!" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
