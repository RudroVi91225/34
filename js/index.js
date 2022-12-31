const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data));
}

const displayBuddy = data => {

    const buddys = data.results;
    console.log(data.results);
    const buddyDiv = document.getElementById('buddy');
    for (const buddy of buddys) {
        const p = document.createElement('p');
        p.innerText = `${buddy.name.first} ${buddy.email}`;
        buddyDiv.appendChild(p);


    }
}