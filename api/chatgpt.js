const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON do corpo da requisição
app.use(express.json());

// Rota de teste (GET)
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.post('/dados', (req, res) => {
    debugger
    const dadosRecebidos = req.body; 
    // Supondo que o front esteja enviando um objeto JSON com:
    // {
    //   "nome": "valor",
    //   "especie": "valor",
    //   ...
    // }
  
    console.log('Dados recebidos do front-end:', dadosRecebidos);
  
    // Aqui você pode processar, validar ou armazenar esses dados.
    // Ex: Salvar em um banco de dados, enviar para outra API, etc.
  
    // Retornar uma resposta ao front-end
    res.json({status: 'sucesso', mensagem: 'Dados recebidos com sucesso!', dados: dadosRecebidos});
  });