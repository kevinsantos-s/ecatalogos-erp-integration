"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blingToCore = blingToCore;
function blingToCore(bling) {
    return {
        company: {
            erpId: bling.id,
            name: bling.nome,
            // ...
        },
        business: {
            cnpj: bling.cnpj,
            // ...
        }
    };
}
