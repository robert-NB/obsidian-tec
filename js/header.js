let divGen = document.getElementById('general');
let header = document.getElementsByTagName('header')[0];
let nav = document.createElement('nav');
nav.className="menu";
let osteo = document.createElement('a');
osteo.href = "../osteopatia.html";
let osteoTN = document.createTextNode('Osteopatía');
osteo.appendChild(osteoTN);
nav.appendChild(osteo);
let coach = document.createElement('a');
coach.href = "../coaching.html";
let coachTN = document.createTextNode('Coaching');
coach.appendChild(coachTN);
nav.appendChild(coach);
header.insertBefore(nav, document.getElementsByTagName('h6')[0]);