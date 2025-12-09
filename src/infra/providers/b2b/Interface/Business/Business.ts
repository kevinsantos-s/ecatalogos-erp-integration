export interface Business {
    id: number;
    cnpj: string;
    municipal_registration?: string;
    state_registration?: string;
    name: string;
    fantasy_name?: string;
    email?: string;
    phone?: string;
    cell_phone: string;
    created_at: Date;
    update_at?: Date;
    deleted_at?: Date;
}