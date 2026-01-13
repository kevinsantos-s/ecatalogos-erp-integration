import { Request, Response } from "express";
import { CompaniesService } from "./companies.service";

export class CompaniesController {
  private service = new CompaniesService();

  async sendCompany(req: Request, res: Response) {
    try {
      const blingCompanyId = Number(req.params.blingCompanyId);

      if (isNaN(blingCompanyId)) {
        return res.status(400).json({ message: "blingCompanyId inválido" });
      }

      const result = await this.service.sendCompany(blingCompanyId);

      return res.status(201).json(result);
    } catch (error: any) {
      console.error(error);

      return res.status(500).json({
        message: "Erro ao enviar empresa",
        error: error?.response?.data || error?.message,
      });
    }
  }
}
