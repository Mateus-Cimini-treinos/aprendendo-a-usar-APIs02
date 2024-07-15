const endpoint = 'https://jsonplaceholder.typicode.com/users';

// IDs dos usuários específicos que você deseja buscar
const idUsuario1 = 1; // Substitua pelo ID do primeiro usuário desejado
const idUsuario2 = 5; // Substitua pelo ID do segundo usuário desejado

// Realiza uma requisição fetch para o endpoint da API
fetch(endpoint)
  .then(response => {
    // Verifica se a resposta da requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro na conexão com response: ' + response.statusText);
    }
    // Converte a resposta para JSON e a retorna como uma Promise
    return response.json();
  })
  .then(usuarios => {
    // Callback chamada após a conversão da resposta para JSON
    // Encontra o usuário com o ID específico idUsuario1
    const usuario = usuarios.find(user => user.id === idUsuario1);

    // Verifica se o usuário foi encontrado
    if (usuario) {
      console.log(""); // Linha em branco para separação no console
      console.log(`Informações do usuário ${usuario.name}:`);
      console.log(`Nome: ${usuario.name}`);
      console.log(`Email: ${usuario.email}`);
      console.log(`ID: ${usuario.id}`);
    } else {
      console.log(`Usuário com ID ${idUsuario1} não encontrado.`);
    }

    // Encontra o usuário com o ID específico idUsuario2
    const usuario2 = usuarios.find(user => user.id === idUsuario2);

    // Verifica se o usuário foi encontrado
    if (usuario2) {
      console.log(""); // Linha em branco para separação no console
      console.log(`Informações do usuário ${usuario2.name}:`);
      console.log(`Nome: ${usuario2.name}`);
      console.log(`Email: ${usuario2.email}`);
      console.log(`ID: ${usuario2.id}`);
    } else {
      console.log(`Usuário com ID ${idUsuario2} não encontrado.`);
    }
  })
  .catch(error => {
    // Captura e trata erros ocorridos durante a requisição fetch ou processamento dos dados
    console.error('Erro durante a requisição fetch:', error);
    // Você pode adicionar mais ações aqui, se necessário, para lidar com o erro
  });
