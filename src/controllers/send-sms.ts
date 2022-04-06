const twilio = require('twilio');
const { getTemperaturaLocal } = require('./get-temperatura.ts');

const accountSid = '???';
const authToken = '???';
const client = new twilio(accountSid, authToken);


const sendSMS = async (cel:string): Promise<void> => {
  try {
    const message = await getTemperaturaLocal();
    client.messages
    .create({
      body: message,
      to: `+55${cel}`,
      from: '+12183964844',
    })
  } catch (error) {
    console.log(error.message);
  }
}

export { sendSMS }