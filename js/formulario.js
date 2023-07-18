document.getElementById('send').addEventListener('click', recibir);
function recibir(ev)
{
    ev.preventDefault();
    let eliminatorio = document.getElementById('error');
    if (!eliminatorio)
		console.log("El elemento selecionado no existe");
    else 
        document.getElementById('error').remove();

    let respuesta = document.getElementById('respuesta');
    if (!respuesta) 
        console.log("El elemento selecionado no existe");
    else 
        document.getElementById('respuesta').remove();

    let arr = [];
    let nombre = document.querySelectorAll('input')[0].value;
    let apellido = document.querySelectorAll('input')[1].value;
    let radio = '';
    let cita = document.querySelectorAll('input')[4].value;
    if (document.querySelectorAll('input')[2].checked) 
        radio = 'fisica';
    else if(document.querySelectorAll('input')[3].checked)
        radio = 'telematica';

    if (nombre == '' || apellido == '' || radio == '' || cita == '') 
    {
        let errores = [];
        let error = document.createElement('h6');
        error.id = 'error';
        let a = '';
        if (nombre == '')
            errores.push('nombre');

        if(apellido == '')
            errores.push('apellido');

        if (radio == '') 
            errores.push('tipo de cita');
        
        if (cita == '')
            errores.push('dia de la cita');

        let errorTN = document.createTextNode('Errores detectados: ' + errors(errores) + '.');
        error.appendChild(errorTN);
        document.getElementById('form').appendChild(error);
    }
    else
    {
        for (let i = 0; i < nombre.length; i++) 
        {
            arr.push(nombre);
            arr.push(apellido);
            arr.push(radio);
            arr.push(cita);
        }
        console.log(arr);
        let titulo = document.createElement('h5');
        titulo.id = 'respuesta';
        let tituloTN = document.createTextNode(arr[0] + " " + arr[1] + " ha reservado cita " + arr[2] + ' para el ' + arr[3]);
        titulo.appendChild(tituloTN);
        document.getElementById('form').appendChild(titulo);
    }
}
function errors(errores)
{
    for (let i = 0; i < errores.length; i++) 
        return(errores);
}

document.getElementById('eliminar').addEventListener('click', eliminar);
function eliminar()
{
    for (let i = 0; i <= 4; i++) 
    {
        if (i == 2 || i == 3) 
            document.querySelectorAll('input')[i].checked = "";

        document.querySelectorAll('input')[i].value = ""
    }

    let eliminatorio = document.getElementById('error');
    if (!eliminatorio)
		console.log("El elemento selecionado no existe");
    else 
        document.getElementById('error').remove();

    let respuesta = document.getElementById('respuesta');
    if (!respuesta) 
        console.log("El elemento selecionado no existe");
    else 
        document.getElementById('respuesta').remove();

}
