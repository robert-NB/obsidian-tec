let botonAtras = document.createElement('a');
let botonAtrasTN = document.createTextNode('Atras');
botonAtras.id = 'atras';
botonAtras.href='#';
botonAtras.className="btn-link";
botonAtras.style="text-decoration: none";
botonAtras.style.color="#5B4A9A";
botonAtras.appendChild(botonAtrasTN);
document.getElementById('botones').appendChild(botonAtras);
let back = document.getElementById('atras');

back.addEventListener('click', function()
{
	window.history.back();
});

let a = document.getElementsByTagName('a');
for (let i = 0; i < a.length; i++) 
{
	a[i].style = "text-decoration: none";
}
back.style.color='#5B4A9A';
back.addEventListener('mouseenter', function(){
	back.style.color='#F2F2F2';
});
back.addEventListener('mouseleave', function(){
	back.style.color='#5B4A9A';
});

