const Database = require("../utils/database");

class paoModel {

    #pao_id;
    #pao_descricao;

    get pao_id(){
        return this.#pao_id;
    }
    set pao_id(value){
        this.#pao_id = value;
    }

    get pao_descricao(){
        return this.#pao_descricao;
    }
    set pao_descricao(value){
        this.#pao_descricao = value;
    }

    constructor(pao_id, pao_descricao){
        this.#pao_id = pao_id;
        this.#pao_descricao = pao_descricao;
    }

    async listar() {
        let sql = "select * from tb_pao";
        let banco = new Database();
        let linhas = await banco.ExecutaComando(sql);
        let lista = [];
        for(let i=0; i<linhas.length; i++) {
            let linha = linhas[i];
            let pao = new paoModel(linha["pao_id"], linha["pao_descricao"]);

            lista.push(pao);
        }
        return lista;
    }
}

module.exports = paoModel;