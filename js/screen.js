/*
var device = navigator.userAgent;
//creado por https://joason.com
if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i)|| device.match(/CriOS/i))
{ 
    console.log('modo dispositivo móvil');
    window.location = "/principal/mobile/movil.html";
}
if (!device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i)|| device.match(/CriOS/i))
{
    console.log('modo pc');
    window.location = "/principal/efecto_escritura/index.html";
}*/
/*
window.addEventListener("resize", function(){
    // tu código aquí
    console.log('La pantalla ha cambiado de tamaño');
});
*/
/*
window.addEventListener("load", carga);

function carga() 
{
    if (screen.width < 1024) 
    window.location = "/principal/mobile/movil.html";
    if (screen.width < 1280) 
    window.location = "/principal/efecto_escritura/index.html";
    if (screen.width <= 1920)  
    window.location = "/principal/efecto_escritura/index.html";
    return('a');
}
*/
/*
if (screen.width >= 1024)
{
console.log('PC')
//location='/principal/efecto_escritura/index.html';
}
else
{
console.log('TLF')
//location='/principal/efecto_escritura/index.html';
}*/
/*
$(document).ready(function () {
    $(window).resize(function () {
         cambio();
    });
    
    cambio();
    
    function cambio(){
      if ($(window).width() >= 992) {
            alert('Has cambiado el tamaño de la ventana');
            $(".sidenav-trigger").click(function () {
                alert("Handler for .click() called.");
                $("body").toggleClass("menuclose");
            });
        } else {
            alert("no entraste al if");
            $(".sidenav-trigger").off();
        }
    }
});*/
/*
window.onload = function(){
    if (screen.width<=1024)
    {
        location.href='../efecto_escritura/index.html';
    }
    //codigo resolución pequeña
    else 
    if (screen.width<1280)
    {
        location.href='../efecto_escritura/index.html';
    }
    //codigo resolución mediana
};

*/