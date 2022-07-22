<!DOCTYPE html>
<html>
<body>
<meta charset="UTF-8">
<script>
function pulaLinha(){
    document.write("</br></br>");
    document.write("</hr>");
}
function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var vitorias = parseInt(prompt("Quantas vitórias seu time teve?"));
var empates = parseInt(prompt("Quantos empates seu time teve?"));
var pontos = (vitorias * 2) + empates;


mostra("A pontuação do seu time foi: " + pontos + ". Seu time está " );
if (pontos > 28)
document.write("bom");
if (pontos < 28)
document.write("ruim");
if (pontos == 28)
document.write("regular");




</script>
    
</body>
</html>
