const axios = require ("axios");

//Formando o url certo
const urlKey = 'https://api.hgbrasil.com/weather?key=' + '???'; 
const separador = '&';
const cidade = 'city_name=' + 'Campo Grande,MS';

//concatenando o url para o get
const url = urlKey + separador + cidade;

async function getTemperaturaLocal() {
    await axios.get(url)
    .then(response => {
        console.log('SMS Temperatura informa -> ' + 'Local: ' + response.data.results.city + ', ' + 'Data: ' + response.data.results.date + ', ' + 'Hora: ' + response.data.results.time + ', ' + 'Temperatura: ' + response.data.results.temp + '°' + ', ' + '--Informações adicionais: ' + 'Amanhã teremos máxima de ' + response.data.results.forecast[1].max + '°' + ' e mínima de ' + response.data.results.forecast[1].min + '°');
    })  
    .catch(error => console.log(error))
}

getTemperaturaLocal();