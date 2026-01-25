import { Request, Response } from "express";
import { CategoriesService } from "./categories.service";

export class CategoriesController {
  private service = new CategoriesService();

  async sync(req: Request, res: Response) {
    try {
      const result = await this.service.syncCategories();
      return res.status(201).json(result);
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message: "Erro interno ao sincronizar categorias",
      });
    }
  }
}
