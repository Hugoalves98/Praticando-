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
/*
    var limite = parseInt(prompt("Entre com a data limite"));
    var anoCopa = 1930;

    while(anoCopa <= limite) {
        mostra("Teve copa em " + anoCopa);
        anoCopa = anoCopa + 4;
    }
    mostra("End");
    
    
    var contador = 30;

    while (contador <= 40) {        
        if (contador == 37 || contador == 33) {
            contador = contador +1;
        }
        mostra(contador);
        contador = contador +1;
    }
    mostra("End");
    
   var contador = 20;
   while (contador >= 0) {
       mostra(contador);
       contador = contador -1;
   }
   */
  /*
  var loginCad = "alura";
  var senhaCad = "alura321";
  var tentativas = 1;

  
  while (tentativas <= 3) {
    var loginInfor = prompt("Informe seu login");
    var senhaInfor = prompt("Informe sua senha");
    if (loginCad == loginInfor && senhaCad == senhaInfor) {
    alert("Bem-vindo ao sistema " + loginInformado);
    //tentativas = 3;
    } else {
        if (tentativas == 3) {
            alert("Vc tentou o máximo")        
        } else {
            alert("Login invalido. Tnt againly")       
        }
    }
    tentativas = tentativas +1;
  }


-----------------------------------------------------------------------------
  var loginCadastrado = "alura";
    var senhaCadastrada = "alura321";

    var maximoTentativas = 3;
    var tentativaAtual = 1;

    while(tentativaAtual <= maximoTentativas) {

        var loginInformado = prompt("Informe seu login");
        var senhaInformada = prompt("Informe sua senha");

        if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

            alert("Bem-vindo ao sistema, " + loginInformado);

            tentativaAtual = maximoTentativas; // acertou, então faço o gasto de todas as tentativas para sair do loop. Lá embaixo vai incrementar + 1! 

        } else {

            if (tentativaAtual == 3) {
                alert("Número permitido de tentativas ultrapassado!");
            } else {
                alert("Login inválido. Tente novamente");
            }
        }

       // vai para a próxima tentativa
        tentativaAtual = tentativaAtual +1  
    }

var i = 0;

while ( i <= 10) {
    document.write("O resultado é: " + (5 * i));
    pulaLinha();
    i++;
}


for( var i = 0; i < 10; i++ ) {
    alert( "O resultado é " + (5 * i) );
}

var idadePedro = 28;
var idadeMarta = 32;
var idadeJorge = 60;
var idadeBete = 22;

var totalIdades = (idadePedro + idadeMarta + idadeJorge + idadeBete);
var mediaIdades = totalIdades/4;

mostra(mediaIdades);

    var totalFamiliares = parseInt(prompt("Digite o seu total de familiares"));
    var n = 1;
    var totalIdades = 0;

    while ( n <= totalFamiliares ) {
    var idadeFamiliares = parseInt(prompt("Digite a idade de seus familiares"));
    totalIdades = totalIdades + idadeFamiliares;
    n++;

    }
    var media = totalIdades/totalFamiliares;
    mostra("A média da sua familia é :" + media);
  */  
   var numeroPensado = Math.round(Math.random() * 10);
   var tentativas = 1;

   while (tentativas <= 3) {
    var chute = parseInt(prompt("Digite seu chute!"));
    if (chute == numeroPensado) {
        mostra("Acertaste, número pensado era: " + numeroPensado);
        break;
   } else {
    mostra("Erraste!")
   } 
   tentativas++;
}
mostra("Numero pensado era :" + numeroPensado);

for (var i = 1; i < 4; i++) {
    mostra("Mandeta é belíssima!")
} 
for (var i = 1; i < 11; i++) {
    mostra("A tábuada de 5 é: " + 5 * i);
} 

for (var linha = 1; linha <= 10; linha++) {
    for (var coluna = 1; coluna < 11; coluna++) {
        document.write("*");
    } 
    pulaLinha();
} 


    


    </script>

</body>
</html>
