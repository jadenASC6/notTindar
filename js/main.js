let personindex = Math.floor(Math.random() * 21) + 10;
let person = data.results[personindex];

document.getElementById('title').innerText = `${person.name.first} ${person.name.last}`;
document.getElementById('pic').src = `${person.picture.large}`;
document.getElementById('email').innerText = `Email: ${person.email}`;
document.getElementById('age').innerText = `Age: ${person.dob.age}`;
document.getElementById('phone').innerText = `Phone: ${person.phone}`;

for (let i = 0; i < 10; i++) {
    let recUsers = document.getElementsByClassName('rec_user');
    recUsers[i].src = `${data.results[i].picture.large}`;
}

for (let i = 0; i < 10; i++) {
    let username = document.getElementsByClassName('username');
    username[i].innerHTML = `${data.results[i].name.first} ${data.results[i].name.last}`;
}

