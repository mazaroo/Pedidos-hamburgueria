const Database = require("../utils/database");

class queijoModel {

    #que_id;
    #que_descricao;

    get que_id(){
        return this.#que_id;
    }
    set que_id(value){
        this.#que_id = value;
    }

    get que_descricao(){
        return this.#que_descricao;
    }
    set que_descricao(value){
        this.#que_descricao = value;
    }

    constructor(que_id, que_descricao) {
        this.#que_id = que_id;
        this.#que_descricao = que_descricao;
    }

    async listar() {
        let sql = "select * from tb_queijo"
        let banco = new Database();
        let linhas = await banco.ExecutaComando(sql);
        let lista = [];
        for(let i=0; i<linhas.length; i++){
            let linha = linhas[i];
            let queijo = new queijoModel(linha["que_id"], linha["que_descricao"]);

            lista.push(queijo);
        }
        return lista;
    }
}

module.exports = queijoModel;
