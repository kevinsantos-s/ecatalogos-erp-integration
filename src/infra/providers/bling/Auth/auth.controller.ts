import { Request, Response } from "express";
import { authorizeBlingCompany } from "./auth.service";

export class BlingAuthController {
  async callback(req: Request, res: Response) {
    try {
      const { code } = req.query;

      if (!code || typeof code !== "string") {
        return res.status(400).json({ message: "Code não informado" });
      }

      const redirectUri = `${req.protocol}://${req.get("host")}/auth/callback`;

      const company = await authorizeBlingCompany(code, redirectUri);

      return res.status(200).json({
        message: "Autenticado com sucesso",
        company,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao autenticar no Bling" });
    }
  }
}