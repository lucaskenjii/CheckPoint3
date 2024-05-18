const guestForm = document.getElementById('guestForm');
const guestList = document.getElementById('guestList');

guestForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const newGuest = document.createElement('li');
    newGuest.innerHTML = `
    <strong>${name}</strong> - ${date} - ${time}
`;

    guestList.appendChild(newGuest);


    //Limpar campos do formulário após adicionar o convidado
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';

});





