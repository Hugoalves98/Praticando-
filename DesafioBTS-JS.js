<!DOCTYPE html>
<html>
<body>
<meta charset="UTF-8">
    <input type="text">
    <button>
        BTS integrante
    </button>    
    <script>        
    var input = document.querySelector("input"); // pra eu chamar a tag do HTML eu uso o querySelector e chamo o nome como string
    input.focus();

    var bts = ["Jin", "SUGA", "J-Hope", "Jimin", "Jungkook","V"];

    function btsCS() {
        var achou = false;
        for (var i = 0; i < bts.length; i++) {
            if (input.value == bts[i]) {
                alert("OMG! VC É FÃ DO BTS TBM!!!");
                achou = true;
                break;
            }
        }
        if (achou == false) {
            alert("Af! vc não tem bom gosto!");
        }
        input.value = "";
        input.focus();
    }
    var button = document.querySelector("button");
    button.onclick = btsCS;    
    
</script>
</body>
</html>
