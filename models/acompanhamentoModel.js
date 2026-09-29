const Database = require("../utils/database");

class acompanhamentoModel {

    #aco_id;
    #aco_descricao;

    get aco_id(){
        return this.#aco_id;
    }
    set aco_id(value){
        this.#aco_id = value;
    }

    get aco_descricao(){
        return this.#aco_descricao;
    }
    set aco_descricao(value){
        this.#aco_descricao = value;
    }

    constructor(aco_id, aco_descricao){
        this.#aco_id = aco_id;
        this.#aco_descricao = aco_descricao;
    }

    async listar() {
        let sql = "select * from tb_acompanhamento";
        let banco = new Database();
        let linhas = await banco.ExecutaComando(sql);
        let lista = [];
        for(let i=0; i<linhas.length; i++){
            let linha = linhas [i];
            let acompanhamento = new acompanhamentoModel(linha["aco_id"], linha["aco_descricao"]);

            lista.push(acompanhamento);
        }
        return lista;
    }
}

module.exports = acompanhamentoModel;