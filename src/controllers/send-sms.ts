const twilio = require('twilio');
const { getTemperaturaLocal } = require('./get-temperatura.ts');

const accountSid = 'AC96830b2a7a04c52deb752582c3797555';
const authToken = 'ff98538f00fde59b61ca20c05d215189';
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