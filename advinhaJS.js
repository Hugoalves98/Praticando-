<!DOCTYPE html>
<html>
<body>
<meta charset="UTF-8">
    <input type="text">
    <button>
        Compare com o meu segredo
    </button>    
    <script>        
        var senha = [2,0,0,3,0,0];
        var input = document.querySelector("input"); // pra eu chamar a tag do HTML eu uso o querySelector e chamo o nome como string
        input.focus();
        //alert(input.value); // pra saber o número digitado na caixa(input) uso .value        
       
        function verifica () {

            var achou = false;

            for(var posicao = 0; posicao < senha.length; posicao++) {
                if (input.value == senha[posicao]) {
                    alert("Acertou um número da senha");
                    achou = true;
                    break;
                }
            }
            if (achou == false) {
                alert("Erraste");                
            }
            input.value = "";
            input.focus();
        }
        var button = document.querySelector("button");
        button.onclick = verifica;



</script>
</body>
</html>
