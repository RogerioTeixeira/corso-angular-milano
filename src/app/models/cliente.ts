export class Cliente {
    id: number;
    nome: string;
    cognome: string;
    eta: number;
    constructor(value?: Cliente) {
        if (value) {
            Object.assign(this, value);
        }

    }
}