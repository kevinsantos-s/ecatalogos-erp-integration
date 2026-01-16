export class CompanyAlreadyExistsError extends Error {
  constructor(message: string = "Empresa já existe no B2B") {
    super(message);
    this.name = "CompanyAlreadyExistsError";
  }
}