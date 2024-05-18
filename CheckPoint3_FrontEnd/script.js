const guestForm = document.getElementById('guestForm');
const guestList = document.getElementById('guestList');

function carregarListaDeConvidados() {
    const listaSalva = localStorage.getItem('listaDeConvidados');
    if (listaSalva) {
        guestList.innerHTML = listaSalva;
    }
}

function salvarListaDeConvidados() {
    localStorage.setItem('listaDeConvidados', guestList.innerHTML);
}

guestForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const newGuest = document.createElement('li');
    newGuest.innerHTML = `<strong>${name}</strong> - ${date} - ${time}`;

    guestList.appendChild(newGuest);

    salvarListaDeConvidados();

    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
});

carregarListaDeConvidados();






