const express = require('express');
const router = express.Router();
const contaControladores = require('./contaControladores');
const autenticacao = require('./autenticacao');

router.get('/contas', contaControladores.listarContas);
router.post('/contas', contaControladores.criarConta);
router.put('/contas/:numero', contaControladores.atualizarConta);
router.delete('/contas/:numero', contaControladores.excluirConta);

router.post('/transacoes/depositar', autenticacao.verificar, contaControladores.realizarDeposito);
router.post('/transacoes/sacar', autenticacao.verificar, contaControladores.realizarSaque);
router.post('/transacoes/transferir', autenticacao.verificar, contaControladores.realizarTransferencia);

router.get('/contas/saldo', contaControladores.consultarSaldo);
router.get('/contas/extrato', contaControladores.emitirExtrato);

module.exports = router;
