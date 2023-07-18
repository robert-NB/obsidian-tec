/*$(window).load(function () {
    calendarOperations.init("foo", "https://framework-gb.cdn.gob.mx/data/dias.json");
  });*/
let meses = document.getElementById('meses');
let arrMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
meses.addEventListener('click', generarMeses);
function generarMeses()
{
  if (meses.childNodes.length <= 11) 
  {
    for (let i = 0; i < arrMeses.length; i++) 
    {
      let mes = document.createElement('option');
      mes.id = arrMeses[i];
      let mesTN = document.createTextNode(arrMeses[i]);
      mes.appendChild(mesTN);
      meses.appendChild(mes);
    }
  meses.style.height = 'auto';
  meses.style.width = 'auto';
  }
}
/*

document.getElementById('send').addEventListener('click', enviar);
function enviar()
{
  console.log(meses.value);
}

*/