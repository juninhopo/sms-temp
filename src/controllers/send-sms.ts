const twilio = require('twilio');


const accountSid = '???';
const authToken = '???';
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'SMS Temperatura informa -> Local: Campo Grande, MS, Data: 05/04/2022, Hora: 05:29, Temperatura: 22°, --Informações adicionais: Amanhã teremos máxima de 30° e mínima de 20°',
    to: '+5567991713259',
    from: '+12183964844',
  })
  .then((message) => console.log(message.sid));

