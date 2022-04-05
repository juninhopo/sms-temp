import axios from "axios";

//Formando o url certo
const urlKey = 'https://api.hgbrasil.com/weather?key=84db58cc';
const separador = '&';
const cidade = 'CampoGrande,MS';

//concatenando o url para o get
const url = urlKey + separador + cidade;

function getTemperaturaLocal() {
    axios.get(url)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}

