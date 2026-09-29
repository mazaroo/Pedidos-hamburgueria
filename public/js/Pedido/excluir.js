document.addEventListener("DOMContentLoaded", function() {

    let btn = document.querySelectorAll(".btnExclusao");
    for(let i=0; i<btn.length; i++){
        btn[i].addEventListener("click", excluir);
    }

    function excluir(){
        let idExclusao = this.dataset.idexclusao;

        if(confirm("Realmente deseja excluir?")){
            
            let obj = {
                id: idExclusao
            }

            fetch("/Pedido/excluir", {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function(resposta){
                return resposta.json();
            }).then(function(CorpoResposta){
                if(CorpoResposta.ok){
                    alert("Pedido excluido com sucesso!");
                    location.reload();
                }
                else{
                    alert("Erro ao excluir pedido!");
                }
                    
            })
        }
    }
})