//<html>
  //  <body>
    //    <canvas width="600" height="400">

      //  </canvas>
        <script>
             /*
            var tela = document.querySelector('canvas');
            var pincel = tela.getContext('2d');
                       

            pincel.fillStyle = 'gray';
            pincel.fillRect(0, 0, 600, 400);

            pincel.fillStyle = 'green';
            pincel.fillRect(0, 0, 200, 400);

            pincel.fillStyle = 'red';
            pincel.fillRect(400,0,200,400);

            pincel.fillStyle = 'yellow';
            pincel.beginPath();
            pincel.moveTo(300, 200);
            pincel.lineTo(200, 400);
            pincel.lineTo(400, 400);
            pincel.fill();

            pincel.fillStyle = 'blue';
            pincel.beginPath();
            pincel.arc(300,200,50,0, 2* 3.14);
            pincel.fill();
*/

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    // cabeça
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(200,50,350,300);

    // olhos
    pincel.fillStyle = 'black';
    pincel.fillRect(250, 110, 90, 90);
    pincel.fillRect(410, 110, 90, 90);

    // nariz
    pincel.fillRect(340, 200, 70, 100);

    // boca ou barba
    pincel.fillRect(300, 240, 40, 110);
    pincel.fillRect(410, 240, 40, 110);    




         

        </script>
  //  </body>
//</html>