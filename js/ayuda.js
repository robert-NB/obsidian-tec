//Formulario de envío de correo
let mensaje = document.getElementById('message');
let inputs = document.getElementsByTagName('input');
for (let i = 0; i < inputs.length; i++) {
	if(inputs[i].id != 'button')
	{
		inputs[i].addEventListener('click', function()
		{
			inputs[i].style.backgroundColor = "#FFFFFF";
			switch (inputs[i].id) {
				case "name":
					inputs[i].placeholder = "Nombre";
					break;
				case "lastname":
					inputs[i].placeholder = "Apellidos";
					break;
				case "phone":
					inputs[i].placeholder = "Teléfono";
					break;
				case "email":
					inputs[i].placeholder = "Correo electrónico";
					break;
				default:
					break;
			}
		});
	}
}
mensaje.addEventListener('click', function()
{
	mensaje.style.backgroundColor = "#FFFFFF";
	mensaje.placeholder = "Mensaje";
});
const btn = document.getElementById('button');
document.getElementById('form')
 .addEventListener('submit', function(event) 
 {
	event.preventDefault();
	let arr_G = [];
	for (let i = 0; i < inputs.length; i++) 
	{
		if(inputs[i].value != '')
		{
			if(inputs[i].id != 'button')
			{
				arr_G.push(inputs[i].value);
			}
		}
	}
	arr_G.push(mensaje.value);
	if(arr_G.length >= 4 && mensaje.value != '')
	{
		btn.value = 'Enviando...';
		const serviceID = 'default_service';
		const templateID = 'template_xbi2skq';
		emailjs.sendForm(serviceID, templateID, this)
			.then(() => {
			btn.value = 'Enviar';
			let confirmacion = document.createElement('h2');
			confirmacion.id = "enviado";
			let confirmacionTN = document.createTextNode('Eviado con éxito!');
			confirmacion.appendChild(confirmacionTN);
			document.getElementById('contenedor').appendChild(confirmacion);
			document.getElementById('contenedor').removeChild(document.getElementById('formulario'));
			}, (err) => {
			btn.value = 'ERROR';
			alert(JSON.stringify(err));
			});
			for (let i = 0; i < inputs.length; i++) 
			{
				inputs[i].value = '';
				document.getElementById('message').value = '';
			}
	}
	else
	{
		for (let i = 0; i < inputs.length; i++) 
		{
			if(inputs[i].id != 'button')
			{
				if(inputs[i].value == '')
				{
					inputs[i].style.backgroundColor="#FE6F61";
					inputs[i].placeholder = "Rellene el campo";
				}
			}
		}
		if(mensaje.value == '')
		{
			mensaje.style.backgroundColor="#FE6F61";
			mensaje.placeholder = "Rellene el mensaje";
		}
	}

});
