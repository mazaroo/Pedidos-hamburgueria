document.addEventListener("DOMContentLoaded", function() {

    //faz a leitura do botão gravas
    let btn = document.querySelector("#btnGravar");

    btn.addEventListener("click", gravar);

    function gravar() {
        
        let nome = document.querySelector("#inputNome");
        let endereco = document.querySelector("#inputEndereco");
        let pao = document.querySelector("#selPao");
        let hamburguer = document.querySelector("#selHam");
        let queijo = document.querySelector("#selQueijo");
        let acompanhamento = document.querySelector("#selAcom");

        if(nome.value != "" && endereco.value != "" && pao.value != "" && hamburguer.value != "" &&
            queijo.value != "" && acompanhamento.value != "") {

                //monta o objeto que deve ser enviado ao backend
                let obj = {
                    nome: nome.value,
                    endereco: endereco.value,
                    pao: pao.value,
                    hamburguer: hamburguer.value,
                    queijo: queijo.value,
                    acompanhamento: acompanhamento.value
                };

                //escrita do FetchAPI
                fetch("/Pedido/cadastrar", {
                    method: "POST",
                    body: JSON.stringify(obj),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function(resposta) {
                    console.log(resposta);
                    return resposta.json();
                }).then(function(CorpoResposta) {
                    console.log(CorpoResposta);
                    if(CorpoResposta.ok) {
                        alert("Pedido realizado com sucesso!")
                        window.location.href= "/Pedido";
                    }
                    else{
                        alert("Erro ao realziar pedido!");
                    }
                })
            }
            else {
                alert("Preencha corretamente!!");
            }
    }


})