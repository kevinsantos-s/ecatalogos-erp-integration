import { Request, Response } from "express";
import { BranchesService } from "./branches.service";

export class BranchesController {
  private service = new BranchesService();

  async sendBranch(req: Request, res: Response) {
    try {
      const blingBranchId = Number(req.params.blingBranchId);

      if (isNaN(blingBranchId)) {
        return res.status(400).json({ message: "blingBranchId inválido" });
      }

      const result = await this.service.sendBranch(blingBranchId);

      return res.status(201).json(result);
    } catch (error: unknown) {
      console.error(error);

      return res.status(500).json({
        message: "Erro interno ao enviar filial",
      });
    }
  }
}
