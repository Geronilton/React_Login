Tela de Login e Cadastro
Este repositório contém uma aplicação simples desenvolvida com React Native para testar o processo de cadastro e login de usuários. O projeto foi criado com o intuito de estudar e praticar a comunicação entre o frontend em React Native e o backend em Node.js com Express.

Estrutura do Projeto
/assets: Diretório para armazenar recursos estáticos como imagens, ícones, etc.
/services: Contém a URL da API que faz a comunicação com o backend.
/src/components: Diretório com os componentes React Native responsáveis pela tela de login e cadastro.
App.js: Arquivo principal que renderiza a aplicação.
babel.config.js: Configuração do Babel para transpilação do código.
package.json: Contém as dependências e scripts do projeto.
Funcionalidades
Cadastro de Usuário: Permite que novos usuários se registrem na aplicação.
Login de Usuário: Usuários já cadastrados podem fazer login para acessar a aplicação.
Backend
O backend foi desenvolvido em Node.js utilizando o framework Express. Ele é responsável por processar as requisições de login e cadastro, comunicando-se com o banco de dados para autenticar ou criar novos usuários.

Como Executar
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

bash
Copiar código
npm install
Inicie a aplicação:

bash
Copiar código
npm start
Configuração do Backend:

Certifique-se de que o backend esteja rodando e que a URL da API no arquivo services esteja corretamente configurada.

Considerações Finais
Este projeto é apenas um exemplo básico de como implementar telas de login e cadastro em uma aplicação mobile usando React Native e um backend em Node.js. Ele pode ser expandido com funcionalidades adicionais, como validação de dados, persistência de sessão, e muito mais.
