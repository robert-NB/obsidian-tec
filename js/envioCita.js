//Formulario de envío de correo
document.getElementById('cita').addEventListener('change', function(){
    let inputs = document.getElementsByTagName('input');
    let mensaje = document.getElementById('motivoCita');
    console.log(document.getElementById('tipoCita').textContent);
    if(document.getElementById('tipoCita').textContent == 'Humana')
    {
        for (let i = 0; i < inputs.length; i++) 
        {
            if(inputs[i].id != 'button')
            {
                inputs[i].addEventListener('click', function()
                {
                    inputs[i].style.backgroundColor = "#FFFFFF";
                    switch (inputs[i].id) 
                    {
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
                        case "dni":
                            inputs[i].placeholder = "DNI";
                            break;
                        case "address":
                            inputs[i].placeholder = "Dirección";
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
            mensaje.placeholder = "Motivo de cita";

        });
        const btn = document.getElementById('button');
        document.getElementById('form').addEventListener('submit', function(event){
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
            console.log(arr_G);
            if(arr_G.length >= 7 && mensaje.value != '')
            {
                btn.value = 'Enviando...';
                const serviceID = 'default_service';
                const templateID = 'template_4l4f49y';
                console.log(this);
                emailjs.sendForm(serviceID, templateID, this, 'GAhLgMa8tyLhptAhk')
                .then(() => {
                btn.value = 'Enviar';
                let confirmacion = document.createElement('h2');
                confirmacion.id = "enviado";
                let confirmacionTN = document.createTextNode('Eviado con éxito!');
                confirmacion.appendChild(confirmacionTN);
                document.getElementById('contenedor').appendChild(confirmacion);
                document.getElementById('contenedor').removeChild(document.getElementById('formulario'));
                for (let i = 0; i < inputs.length; i++) 
                {
                    inputs[i].value = '';
                    document.getElementById('message').value = '';
                }
                }, (err) => {
                btn.value = 'Enviar';
                alert('Ha ocurrido un error inesperado, por favor vuelva a intentarlo');
                });
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
    }
    else if(document.getElementById('tipoCita').textContent == 'Canina' || document.getElementById('tipoCita').textContent == 'Equina')
    {
        for (let i = 0; i < inputs.length; i++) 
        {
            if(inputs[i].id != 'button')
            {
                inputs[i].addEventListener('click', function()
                {
                    inputs[i].style.backgroundColor = "#FFFFFF";
                    switch (inputs[i].id) 
                    {
                        case "ownername":
                            inputs[i].placeholder = "Nombre del dueño";
                            break;
                        case "ownerlastname":
                            inputs[i].placeholder = "Apellidos del dueño";
                            break;
                        case "phone":
                            inputs[i].placeholder = "Teléfono";
                            break;
                        case "email":
                            inputs[i].placeholder = "Correo electrónico";
                            break;
                        case "dni":
                            inputs[i].placeholder = "DNI";
                            break;
                        case "animalName":
                            inputs[i].placeholder = "Nombre del animal";
                            break;
                        case "address":
                            inputs[i].placeholder = "Dirección";
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
        mensaje.placeholder = "Motivo de cita";

    });
    const btn = document.getElementById('button');
    document.getElementById('form').addEventListener('submit', function(event){
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
        console.log(arr_G);
        if(arr_G.length >= 7 && mensaje.value != '')
        {
            btn.value = 'Enviando...';
            const serviceID = 'default_service';
            const templateID = 'template_c3ltbr7';
            console.log(this);
            emailjs.sendForm(serviceID, templateID, this, 'GAhLgMa8tyLhptAhk')
            .then(() => {
            btn.value = 'Enviar';
            let confirmacion = document.createElement('h2');
            confirmacion.id = "enviado";
            let confirmacionTN = document.createTextNode('Eviado con éxito!');
            confirmacion.appendChild(confirmacionTN);
            document.getElementById('contenedor').appendChild(confirmacion);
            document.getElementById('contenedor').removeChild(document.getElementById('formulario'));
            for (let i = 0; i < inputs.length; i++) 
            {
                inputs[i].value = '';
                document.getElementById('message').value = '';
            }
            }, (err) => {
            btn.value = 'Enviar';
            alert('Ha ocurrido un error inesperado, por favor vuelva a intentarlo');
            });
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
    }
    
});