const axios = require ("axios");

//Formando o url certo
const urlKey = 'https://api.hgbrasil.com/weather?key='; 
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
        console.log('Temperatura: ' + response.data.results.temp + '°\n');
        console.log('--Informações adicionais--\n')
        console.log('Amanhã teremos máxima de ' + response.data.results.forecast[1].max + '°' + ' e mínima de ' + response.data.results.forecast[1].min + '°');
    })  
    .catch(error => console.log(error))
}

getTemperaturaLocal()