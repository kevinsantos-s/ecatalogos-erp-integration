import { Router } from "express";
import { companiesRoutes } from "../modules/companies/companies.routes";
import { categoriesRoutes } from "../modules/categories/categories.routes";
import { branchesRoutes } from "../modules/branches/branches.routes";
import { blingAuthRoutes } from "../infra/providers/bling/Auth/auth.routes";

const routes = Router();

routes.use("/auth", blingAuthRoutes);
routes.use("/companies", companiesRoutes);
routes.use("/branches", branchesRoutes)
routes.use("/categories", categoriesRoutes);


export {routes};
