import { Request, Response } from "express";
import { BranchesService } from "./branches.service";

export class BranchesController {
  private service = new BranchesService();

  async sync(req: Request, res: Response) {
    try {
      const { companyErpId } = req.body;
      
      const result = await this.service.syncBranches(companyErpId);
      return res.status(201).json(result);
    } catch (error) {
      console.error(error);
      
      if (error instanceof Error && error.message === "companyErpId é obrigatório") {
        return res.status(400).json({ message: error.message });
      }

      return res.status(500).json({
        message: "Erro ao sincronizar filiais",
      });
    }
  }
}