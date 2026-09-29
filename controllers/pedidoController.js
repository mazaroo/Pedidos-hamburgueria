const pedidoModel = require("../models/pedidoModel");
const paoModel = require("../models/paoModel");
const queijoModel = require("../models/queijoModel");
const hamburguerModel = require("../models/hamburguerModel");
const acompanhamentoModel = require("../models/acompanhamentoModel");

class PedidoController {

    async listagemView(req, res){
        let pedidos = await new pedidoModel().listar();
        res.render("Pedido/listagem", {pedidos: pedidos});
    }

    async cadastrarView(req, res){
        let paes = await new paoModel().listar();
        let queijos = await new queijoModel().listar();
        let hamburgueres = await new hamburguerModel().listar();
        let acompanhamentos = await new acompanhamentoModel().listar(); 

        res.render("Pedido/cadastrar",{
            paes: paes,
            queijos: queijos,
            hamburgueres: hamburgueres,
            acompanhamentos: acompanhamentos,
            layout: false

        });
    }

    async cadastrar(req, res){
        console.log(req.body);
        if(req.body.nome != "" && req.body.endereco != "" &&
            req.body.pao != "" && req.body.queijo != "" && 
            req.body.hamburguer != "" && req.body.acompanhamento != 0) { 

                let pedido = new pedidoModel(0, req.body.nome, req.body.endereco, req.body.pao, req.body.queijo,
                                                req.body.hamburguer, req.body.acompanhamento);
                let okRetornoBanco = await pedido.cadastrar();
                res.send({ok: okRetornoBanco});
            }
            else {
                res.send({ok: false});
            }
    }

    async excluir(req, res){
        let idExclusao = req.body.id;
        if(idExclusao && idExclusao > 0){
            let pedido = new pedidoModel();
            let result = await pedido.excluir(idExclusao);
            res.send({ok: result});
        }
        else{
            res.send({ok: false});
        }
    }
}

module.exports = PedidoController;