const loadCountrys = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data));
}

const displayCountry = countrys => {
    const divCountry = document.getElementById('country')
    countrys.forEach(country => {
        console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerText = `${country.name.official}`;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        divCountry.appendChild(div);
    })
}