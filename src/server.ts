import express from 'express';
import { sendSMS } from './controllers/send-sms'

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Server On' })
})

app.get('/send-sms/:cel', async (req, res) => {
    sendSMS(req.params.cel).then(() => {
        return res.status(200).send({ results: 'SMS enviado'})
    }).catch( (error) => {
        console.log(error);
        return res.status(500).send({ results: 'Erro ao enviar o SMS'})
    })
})

app.listen(3333);