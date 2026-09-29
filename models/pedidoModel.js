const Database = require("../utils/database");

class pedidoModel {

    #ped_id;
    #ped_nome;
    #ped_endereco;
    #pao_id;
    #que_id;
    #ham_id;
    #aco_id;

    get ped_id(){
        return this.#ped_id;
    }
    set ped_id(value){
        this.#ped_id = value;
    }

    get ped_nome(){
        return this.#ped_nome;
    }
    set ped_nome(value){
        this.#ped_nome = value;
    }

    get ped_endereco(){
        return this.#ped_endereco
    }
    set ped_endereco(value){
        this.#ped_endereco = value;
    }

    get pao_id(){
        return this.#pao_id;
    }
    set pao_id(value){
        this.#pao_id = value;
    }

    get que_id(){
        return this.#que_id;
    }
    set que_id(value){
        this.#que_id = value;
    }

    get ham_id(){
        return this.#ham_id;
    }
    set ham_id(value){
        this.#ham_id = value;
    }

    get aco_id(){
        return this.#aco_id;
    }
    set aco_id(value){
        this.#aco_id = value;
    }

    constructor(ped_id, ped_nome, ped_endereco, pao_id, que_id, ham_id, aco_id){
        this.#ped_id = ped_id;
        this.#ped_nome = ped_nome;
        this.#ped_endereco = ped_endereco;
        this.#pao_id = pao_id;
        this.#que_id = que_id;
        this.#ham_id = ham_id;
        this.#aco_id = aco_id;
    }

    async cadastrar(){
        let sql = "insert into tb_pedido (ped_nome, ped_endereco, pao_id, que_id, ham_id, aco_id) values (?,?,?,?,?,?)";
        let valores = [this.#ped_nome, this.#ped_endereco, this.#pao_id, this.#que_id, this.#ham_id, this.#aco_id];
        let banco = new Database();
        let result = await banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async listar(){
        let sql = `select p.ped_id, p.ped_nome, p.ped_endereco,
                pa.pao_descricao, ha.ham_descricao, q.que_descricao,
                ac.aco_descricao from tb_pedido p
                inner join tb_pao pa on p.pao_id = pa.pao_id
                inner join tb_hamburguer ha on p.ham_id = ha.ham_id
                inner join tb_queijo q on p.que_id = q.que_id
                inner join tb_acompanhamento ac on p.aco_id = ac.aco_id`;
        let banco = new Database();
        let linhas = await banco.ExecutaComando(sql);
        return linhas;
    }

    async excluir(id){
        let sql = `delete from tb_pedido where ped_id = ?`
        let valores = [id];
        let banco = new Database(); 
        let result = await banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }
}

module.exports = pedidoModel; 