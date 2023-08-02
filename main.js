const contactForm = document.getElementById('contact-form');
const contactTable = document.getElementById('contact-table');
addIcone()
console.log(contactForm);
console.log(contactTable);

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const phoneCell = document.createElement('td');

    nameCell.textContent = name;
    phoneCell.textContent = phone;

    row.appendChild(nameCell);
    row.appendChild(phoneCell);
    contactTable.appendChild(row);
    console.log(row);

    contactForm.reset();
});

document.get


function addIcone() {
    let nameText = document.getElementById("person-icone");
    let phoneText = document.getElementById("phone-icone");

    let nameIcone = document.createElement('img');
    let phoneIcone = document.createElement('img');

    nameIcone.src = './imagens/person.png';
    phoneIcone.src = './imagens/phone.png';

    nameIcone.classList.add('icon');
    phoneIcone.classList.add('icon');

    nameText.insertBefore(nameIcone, nameText.firstChild);
    phoneText.insertBefore(phoneIcone, phoneText.firstChild);
}



