const Database = require("../utils/database");

class hamburguerModel {

    #ham_id;
    #ham_descricao;

    get ham_id(){
        return this.#ham_id;
    }
    set ham_id(value){
        this.#ham_id = value;
    }

    get ham_descricao(){
        return this.#ham_descricao;
    }
    set ham_descricao(value){
        this.#ham_descricao = value;
    }

    constructor(ham_id, ham_descricao){
        this.#ham_id = ham_id;
        this.#ham_descricao = ham_descricao;
    }

    async listar(){
        let sql = "select * from tb_hamburguer";
        let banco = new Database();
        let linhas = await banco.ExecutaComando(sql);
        let lista = [];
        for(let i=0; i<linhas.length; i++){
            let linha = linhas [i];
            let ham = new hamburguerModel(linha["ham_id"], linha["ham_descricao"]);

            lista.push(ham);
        }
        return lista;
    }
}

module.exports = hamburguerModel;