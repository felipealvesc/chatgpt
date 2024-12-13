async function perguntarParaAPI(pergunta) {
  const apiKey = process.env.APIGPT; // Pega a variável de ambiente configurada no Vercel
  const apiUrl = "https://api.openai.com/v1/chat/completions"; // Endpoint da API para chat completions

  const mensagens = [{ role: "user", content: pergunta }]; // Formato da mensagem para a API da OpenAI (chat completions)

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Ou outro modelo disponível
        messages: mensagens,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json(); // Tenta obter detalhes do erro da API
      throw new Error(`Erro na requisição: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const resposta = data.choices[0].message.content;
    return resposta;
  } catch (error) {
    console.error("Erro ao comunicar com a API:", error);
    return "Erro ao processar a requisição."; // Ou lançar o erro novamente
  }
}

// Exemplo de uso:
async function exemploDeUso() {
  const minhaPergunta = "Qual a capital da França?";
  const respostaDoGPT = await perguntarParaAPI(minhaPergunta);
  console.log("Resposta do GPT:", respostaDoGPT);

  const perguntaComplexa = "Escreva um pequeno poema sobre o outono.";
  const respostaPoema = await perguntarParaAPI(perguntaComplexa);
  console.log("Poema do GPT:", respostaPoema);
}

exemploDeUso();
