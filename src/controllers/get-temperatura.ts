const axios = require ("axios");

//Formando o url certo
const urlKey = 'https://api.hgbrasil.com/weather?key=' + '???'; 
const separador = '&';
const cidade = 'city_name=' + 'Campo Grande,MS';

//concatenando o url para o get
const url = urlKey + separador + cidade;

interface IResponse {
      city: string;
      date: string;
      time: string;
      temp: string;
      forecast: {
          max: number;
          min: number;
      }[]
}

async function getTemperaturaLocal(): Promise<string> {
    try {
        const response:IResponse = await axios.get(url).then(res => res.data.results)
        
        return `
        SMS Temperatura informa -> Local: ${response.city}, Data: ${response.date}, Hora: ${response.time}, Temperatura: ${response.temp}°, --Informações Adicionais: Amanhã teremos máxima de ${response.forecast[0].max}° e mínima de ${response.forecast[0].min}°
        `
    } catch (error) {
        console.log(error.message)
    }
}

exports.getTemperaturaLocal = getTemperaturaLocal