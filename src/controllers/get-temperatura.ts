const axios = require ("axios");

//Formando o url certo
const urlKey = 'https://api.hgbrasil.com/weather?key=84db58cc';
const separador = '&';
const cidade = 'city_name=' + 'Campo Grande,MS';

//concatenando o url para o get
const url = urlKey + separador + cidade;

async function getTemperaturaLocal() {
    await axios.get(url)
    .then(response => {
        console.log('Local: ' + response.data.results.city);
        console.log('Data: ' + response.data.results.date);
        console.log('Hora: ' + response.data.results.time);
        console.log('Temperatura: ' + response.data.results.temp + '°');
    })  
    .catch(error => console.log(error))
}

getTemperaturaLocal()