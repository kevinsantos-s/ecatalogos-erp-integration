import { Request, Response } from "express";
import { AxiosError } from "axios";
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
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;

        if (message?.includes("ERP_ID existente")) {
          return res.status(409).json({
            message: "Empresa já existe no B2B",
          });
        }
      }

      return res.status(500).json({
        message: "Erro interno ao enviar empresa",
      });
    }
  }
}
