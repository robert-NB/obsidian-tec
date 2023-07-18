let divPrincipal = document.getElementById('citaForm');
let select = document.getElementById('cita');
select.addEventListener('change',  function(ev){
    ev.preventDefault();
    document.getElementById('whatsapp').hidden=true;
    var selectedOption = this.options[select.selectedIndex];
    if(selectedOption.value == 'Humana')
        Humanos(selectedOption.value);
    else if(selectedOption.value == 'Canina' || selectedOption.value == 'Equina')
        Animales(selectedOption.value);
    else
    {
        document.getElementById('citaForm').innerHTML = '';
        document.getElementById('whatsapp').hidden=false;
    }
});
function insertAfter(e,i){ 
    if(e.nextSibling){ 
        e.parentNode.insertBefore(i,e.nextSibling); 
    } else { 
        e.parentNode.appendChild(i); 
    }
}
function Humanos(opcion)
{
    document.getElementById('citaForm').innerHTML = '';
    let formulario = document.createElement('form');
        formulario.id = 'form';
    //Tipo de cita
    let tipoDeCita = document.createElement('h3');
        tipoDeCita.id = 'tipoCita';
        tipoDeCita.name='cita';
        tipoDeCita.className='form-label margenSup';
    let tipoDeCitaTN = document.createTextNode(opcion);
    tipoDeCita.appendChild(tipoDeCitaTN);
    formulario.appendChild(tipoDeCita);
    //DNI
    let div1 = document.createElement('div');
        div1.className='mb-3';
        div1.id='dni';
        formulario.appendChild(div1);
    let label1 = document.createElement('label');
        label1.id='exampleInputEmail1';
        label1.className='form-label';
    let label1TN = document.createTextNode('DNI*');
    label1.appendChild(label1TN);
    formulario.appendChild(label1);
    let input1 = document.createElement('input');
        input1.type='text'; 
        input1.className='form-control'; 
        input1.placeholder='DNI'; 
        input1.name = 'dni'; 
        input1.id='dni';
    formulario.appendChild(input1);
    //Nombre
    let div2 = document.createElement('div');
        div2.className='mb-3';
        div2.id='nombre';
        formulario.appendChild(div2);
    let label2 = document.createElement('label');
    label2.id='exampleInputEmail1';
    label2.className='form-label';
    let label2TN = document.createTextNode('Nombre*');
        label2.appendChild(label2TN);
        formulario.appendChild(label2);
    let input2 = document.createElement('input');
        input2.type='text'; 
        input2.className='form-control'; 
        input2.placeholder='Nombre'; 
        input2.name = 'name'; 
        input2.id='name';
    formulario.appendChild(input2);
    //Apellidos
    let div3 = document.createElement('div');
        div3.className='mb-3';
        div3.id = 'apellidos';
    formulario.appendChild(div3);
    let label3 = document.createElement('label');
        label3.id='exampleInputEmail1';
        label3.className='form-label';
    let label3TN = document.createTextNode('Apellidos*');
        label3.appendChild(label3TN);
    formulario.appendChild(label3);
    let input3 = document.createElement('input');
        input3.type='text'; 
        input3.className='form-control'; 
        input3.placeholder='Apellidos'; 
        input3.name = 'lastname'; 
        input3.id='lastname';
    formulario.appendChild(input3);
    //Teléfono
    let div4 = document.createElement('div');
        div4.className='mb-4';
        div4.id='telefono';
    formulario.appendChild(div4);
    let label4 = document.createElement('label');
        label4.id='exampleInputEmail1';
        label4.className='form-label ';
    let label4TN = document.createTextNode('Teléfono*');
    label4.appendChild(label4TN);
    formulario.appendChild(label4);
    let input4 = document.createElement('input');
        input4.type='number'; 
        input4.className='form-control'; 
        input4.placeholder='Teléfono'; 
        input4.name = 'phone'; 
        input4.id='phone';
    formulario.appendChild(input4);
    //Correo electrónico
    let div5 = document.createElement('div');
        div5.className='mb-5';
        div5.id= 'correo';
        formulario.appendChild(div5);
    let label5 = document.createElement('label');
        label5.id='exampleInputEmail1';
        label5.className='form-label ';
    let label5TN = document.createTextNode('Correo electrónico*');
    label5.appendChild(label5TN);
    formulario.appendChild(label5);
    let input5 = document.createElement('input');
        input5.type='email'; 
        input5.className='form-control'; 
        input5.placeholder='Correo electrónico'; 
        input5.name = 'email'; 
        input5.id='email';
    formulario.appendChild(input5);
    //Dirección
    let div6 = document.createElement('div');
        div6.className='mb-6';
        div6.id='direccion';
    formulario.appendChild(div6);
    let label6 = document.createElement('label');
        label6.id='exampleInputEmail1';
        label6.className='form-label margenSup';
    let label6TN = document.createTextNode('Dirección*');
    label6.appendChild(label6TN);
    formulario.appendChild(label6);
    let input6 = document.createElement('input');
        input6.type='text'; 
        input6.className='form-control'; 
        input6.placeholder='Dirección'; 
        input6.name = 'address'; 
        input6.id='address';
    formulario.appendChild(input6);
    //Motivo de visita
    let div7 = document.createElement('div');
        div7.className='mb-7';
        div7.id='motivoVisita';
    formulario.appendChild(div7);
    let label7 = document.createElement('label');
        label7.id='exampleInputEmail1';
        label7.className='form-label margenSup';
    let label7TN = document.createTextNode('Motivo de cita*');
    label7.appendChild(label7TN);
    formulario.appendChild(label7);
    let motivoCita = document.createElement('textarea');
        motivoCita.type='text'; 
        motivoCita.className='form-control';
        motivoCita.placeholder='Motivo de cita'; 
        motivoCita.name = 'motivoCita'; 
        motivoCita.id='motivoCita';
    formulario.appendChild(motivoCita);
    //Envío de datos
    let send = document.createElement('input');
        send.type='submit';
        send.id='button';
        send.className='btn-link activo margenSup';
        send.value = 'Enviar';
    formulario.appendChild(send);
    divPrincipal.appendChild(formulario);
    EnvioEmail(opcion);
}
function Animales(opcion)
{
    document.getElementById('citaForm').innerHTML = '';
    Humanos(opcion);
    let formulario = document.getElementById('form');

    let nombreDuenyo = document.getElementById('name');
        nombreDuenyo.placeholder = 'Nombre del dueño';
        nombreDuenyo.id = 'ownername';
    console.log(nombreDuenyo);
    let apellidosDuenyo = document.getElementById('lastname');
        apellidosDuenyo.placeholder='Apellidos del dueño';
        apellidosDuenyo.id = 'ownerlastname';
    let divAnimal = document.createElement('div');
        divAnimal.className='mb-3 margenSup';
    let nombreAnimal = document.createElement('label');
        nombreAnimal.id='exampleInputEmail1';
        nombreAnimal.className='form-label';
    let nombreAnimalTN = document.createTextNode('Nombre del animal*');
    nombreAnimal.appendChild(nombreAnimalTN);
    let input = document.createElement('input');
        input.type='text'; 
        input.className='form-control'; 
        input.placeholder='Nombre del animal'; 
        input.name = 'animalName'; 
        input.id='animalName';
    divAnimal.appendChild(nombreAnimal);
    divAnimal.appendChild(input);
    formulario.insertBefore(divAnimal, document.getElementById('telefono'));
}
function EnvioEmail(opcion)
{
    console.log(opcion);
    if(opcion == 'Humana')
    {
    let form = document.getElementById('citaForm');
    let script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    form.appendChild(script1);
    let script2 = document.createElement('script');
    script2.type='text/javascript';
    let script2TN = document.createTextNode("emailjs.init('GAhLgMa8tyLhptAhk')");
    script2.appendChild(script2TN);
    form.appendChild(script2);
    }
    else if(opcion == 'Canina' || opcion == 'Equina')
    {
        let form = document.getElementById('citaForm');
    let script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    form.appendChild(script1);
    let script2 = document.createElement('script');
    script2.type='text/javascript';
    let script2TN = document.createTextNode("emailjs.init('GAhLgMa8tyLhptAhk')");
    script2.appendChild(script2TN);
    form.appendChild(script2);
    }
}