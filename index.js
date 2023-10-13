import express, { json } from 'express';
const app = express();
import router from './router';
const PORT = 3000;

app.use(json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

    