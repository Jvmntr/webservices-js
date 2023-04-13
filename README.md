<h1 align="center">
  Webservices - CRUD com MongoDB e Javascript
 </h1>
  <h2 align="center">
  Pequeno projeto com o intuito de criar um CRUD utilizando 
  <br>
  NodeJS, Express, Mongoose, Javascript e MongoDB.
</h2>

<h2 >
  💻 Tecnologias utilizadas
</h2>
<h3>
  👨🏻‍💻 Back-end
</h3>

<ul>
   <li><strong> Node.js </strong></li> 
   <li><strong> MongoDB </strong></li> 
   <li><strong> Javascript </strong></li> 
</ul>

<h3>
  ⛓️ Dependências
</h3>

<ul>
   <li><strong> Express </strong></li> 
   <li><strong> Mongoose </strong></li>
</ul>

<h3>
  🧰 Ferramentas
</h3>

<ul>
   <li><strong> Visual Studio Code </strong></li> 
   <li><strong> Insomnia </strong></li>
</ul>

<h2 >
  🎬 Pré-Requisitos
</h2>

<h3>
 🌒 Insomnia
</h3>

Feito isso, também será necessário que você instale o <strong>Insomnia</strong> que será nosso ambiente de testes nesse projeto.
Para instalar o <strong>Insomnia</strong> é muito simples também, basta ir até o site oficial e realizar o download: <strong> https://insomnia.rest/download </strong>

<strong> OBS: </strong> Você também pode utilizar o <Strong> Postman </strong> para os testes de ambiente, segue o link: <strong> https://www.postman.com/ </strong>

<h2 >
  🪛 Cenário de testes (Heroku)
</h2>

<h2 align="center"> ⚠️ IMPORTANTE ⚠️ </h2> 
<h3 align="center"> <strong> COMO EXEMPLO NÓS IREMOS USAR A ROTA DE USUÁRIOS, PORÉM AS OUTRAS ROTAS DE FORNCEDEDOR E PRODUTO USAM DO MESMO PADRÃO </strong> </h3>

<h3>✅ Criação de usuários </h3>

Para criar um novo usuário, faça uma requisição do tipo POST para a URL <strong>https://webservices-fiap-js.herokuapp.com/usuario</strong> com o seguinte corpo da requisição:

<pre>
    <code>
        {
          "nome": "Nome do Usuário",
          "email": "email.do.usuario@exemplo.com",
          "senha": "senha123"
        }
    </code>
</pre>

A resposta será uma mensagem indicando sucesso na operação.

<pre>
    <code>
       {
	       "message": "Usuário inserido com sucesso"
       }
    </code>
</pre>

<h3>📖 Consulta de todos os usuários </h3>

Para buscar um usuário específico, faça uma requisição do tipo GET para a URL <strong>https://webservices-fiap-js.herokuapp.com/usuario/:id</strong>, substituindo :id pelo ID do usuário desejado. Por exemplo, para buscar o usuário com ID "1234567890", a URL seria <strong>https://webservices-fiap-js.herokuapp.com/usuario/1234567890</strong>.

A resposta será um array de objetos de todos os usuários, contendo o seu ID, nome, e-mail e data de criação:

<pre>
    <code>
      [
          {
            "_id": "64382f55be7268b7dad7a2e8",
            "nome": "Usuario de Teste 2",
            "email": "emailteste2@gmail.com",
            "dtCriacao": "2023-04-13T16:35:33.417Z",
            "__v": 0
          },
          {
            "_id": "64384318d290489428f81bad",
            "nome": "Usuario de Teste Heroku 2",
            "email": "emailtesteheroku2@gmail.com",
            "dtCriacao": "2023-04-13T17:59:52.732Z",
            "__v": 0
          }
       ]
    </code>
</pre>

<h3>📖 Consulta de usuários por ID</h3>

Para buscar um usuário específico, faça uma requisição do tipo GET para a URL <strong>https://webservices-fiap-js.herokuapp.com/usuario/:id</strong>, substituindo :id pelo ID do usuário desejado. Por exemplo, para buscar o usuário com ID "1234567890", a URL seria <strong>https://webservices-fiap-js.herokuapp.com/usuario/1234567890</strong>.

A resposta será o objeto do usuário buscado, contendo o seu ID, nome, e-mail e data de criação:

<pre>
    <code>
       {
          "_id": "64384318d290489428f81bad",
          "nome": "Usuario de Teste Heroku 2",
          "email": "emailtesteheroku2@gmail.com",
          "dtCriacao": "2023-04-13T17:59:52.732Z",
          "__v": 0
       }
    </code>
</pre>

<h3>🔄 Atualizar dados do usuário </h3>

Para atualizar um usuário existente, faça uma requisição do tipo PUT para a URL <strong>https://webservices-fiap-js.herokuapp.com/usuario/:id</strong>, substituindo :id pelo ID do usuário a ser atualizado. Por exemplo, para atualizar o usuário com ID "1234567890", a URL seria <strong>https://webservices-fiap-js.herokuapp.com/usuario/1234567890</strong>, com o seguinte corpo da requisição:

<pre>
    <code>
       {
          "nome": "Novo Nome do Usuário",
          "email": "novo.email.do.usuario@exemplo.com",
          "senha": "novaSenha123"
       }
    </code>
</pre>

A resposta será o objeto do usuário atualizado, contendo o seu ID, nome, e-mail e data de criação atualizada:

<pre>
    <code>
       {
          "_id": "1234567890",
          "nome": "Novo Nome do Usuário",
          "email": "novo.email.do.usuario@exemplo.com",
          "dtCriacao": "2023-04-12T01:23:45.678Z"
       }
    </code>
</pre>

<h3>❌ Exclusão de usuário </h3>

Para excluir um usuário existente, faça uma requisição do tipo DELETE para a URL <strong>https://webservices-fiap-js.herokuapp.com/usuario/:id</strong>, substituindo :id pelo ID do usuário a ser excluído. Por exemplo, para excluir o usuário com ID "1234567890", a URL seria <strong>https://webservices-fiap-js.herokuapp.com/usuario/1234567890</strong>.

A resposta será uma mensagem indicando que a operação foi realizada com sucesso:

<pre>
    <code>
       {
	        "message": "Usuário removido com sucesso"
       }
    </code>
</pre>
<h1 align="center"> 🚧 SEÇÃO EM ANDAMENTO 🚧 <h1>
<h2>🚦 Rotas de teste (Heroku)</h2>

<h3> 👤 Rotas do Usuario </h3>

<strong> 🟢 POST - Criar Usuário </strong>

<pre>
    <code>
       http://localhost:3000/usuario
    </code>
</pre>

<strong> 🟣 GET - Consultar Usuário </strong>

<pre>
    <code>
       http://localhost:3000/usuario/:id
    </code>
</pre>

<strong> 🟠 PUT - Atualizar Usuário </strong>

<pre>
    <code>
       http://localhost:3000/usuario/:id
    </code>
</pre>

<strong> 🔴 DEL - Deletar Usuário </strong>

<pre>
    <code>
       http://localhost:3000/usuario/:id
    </code>
</pre>

<h3>🛍️ Rotas do Produto </h3>

<strong> 🟢 POST - Criar Produto </strong>

<pre>
    <code>
       http://localhost:3000/produtos
    </code>
</pre>

<strong> 🟣 GET - Consultar Produto </strong>

<pre>
    <code>
       http://localhost:3000/produtos/:id
    </code>
</pre>

<strong> 🟠 PUT - Atualizar Produto </strong>

<pre>
    <code>
       http://localhost:3000/produtos/:id
    </code>
</pre>

<strong> 🔴 DEL - Deletar Produto </strong>

<pre>
    <code>
       http://localhost:3000/produtos/:id
    </code>
</pre>

<h3>🚚 Rotas do Fornecedor </h3>

<strong> 🟢 POST - Criar Fornecedor </strong>

<pre>
    <code>
       http://localhost:3000/fornecedores
    </code>
</pre>

<strong> 🟣 GET - Consultar Fornecedor </strong>

<pre>
    <code>
       http://localhost:3000/fornecedores/:id
    </code>
</pre>

<strong> 🟠 PUT - Atualizar Fornecedor </strong>

<pre>
    <code>
       http://localhost:3000/fornecedores/:id
    </code>
</pre>

<strong> 🔴 DEL - Deletar Fornecedor </strong>

<pre>
    <code>
       http://localhost:3000/fornecedores/:id
    </code>
</pre>

<h2>🚦 Evidências de funcionamento (Local) </h2>

<h3> 👤 Rotas do Usuario </h3>

<strong> 🟢 POST - Criar Usuário </strong>

![image](https://user-images.githubusercontent.com/61757615/231555923-3421b299-b589-42b1-bcae-612f940e5a03.png)

<strong> 🟣 GET - Consultar Usuário </strong>

![image](https://user-images.githubusercontent.com/61757615/231556025-da7457ca-5ab6-446d-837d-a60e5562143c.png)

<strong> 🟠 PUT - Atualizar Usuário </strong>

![image](https://user-images.githubusercontent.com/61757615/231556085-e51d4f32-aeb2-456b-b47e-30135d9bfb64.png)

<strong> 🔴 DEL - Deletar Usuário </strong>

![image](https://user-images.githubusercontent.com/61757615/231556120-36018e0c-fd45-4661-abc7-c52b298da022.png)
<br>
<br>

<h3>🛍️ Rotas do Produto </h3>

<strong> 🟢 POST - Criar Produto </strong>

![image](https://user-images.githubusercontent.com/61757615/231556786-8b1fae5a-0ab5-440d-92df-d9855fe0722d.png)

<strong> 🟣 GET - Consultar Produto </strong>

![image](https://user-images.githubusercontent.com/61757615/231556764-959308dc-5cfc-4244-8d9f-f81cc5a86945.png)

<strong> 🟠 PUT - Atualizar Produto </strong>

![image](https://user-images.githubusercontent.com/61757615/231556729-44208307-0fc8-4a4a-8b32-fb15bfbe731d.png)

<strong> 🔴 DEL - Deletar Produto </strong>

![image](https://user-images.githubusercontent.com/61757615/231556698-786f4100-3dae-483a-a1fc-225f5de679b3.png)
<br>
<br>

<h3>🚚 Rotas do Fornecedor </h3>

<strong> 🟢 POST - Criar Fornecedor </strong>

![image](https://user-images.githubusercontent.com/61757615/231556302-cdba8baf-9795-4cb3-8972-3f51e6b6ad78.png)

<strong> 🟣 GET - Consultar Fornecedor </strong>

![image](https://user-images.githubusercontent.com/61757615/231556335-8be0e629-33a8-49d2-acb6-ce111b49144f.png)

<strong> 🟠 PUT - Atualizar Fornecedor </strong>

![image](https://user-images.githubusercontent.com/61757615/231556377-0212a7be-671a-445f-b2b3-df14f92af4a4.png)

<strong> 🔴 DEL - Deletar Fornecedor </strong>

![image](https://user-images.githubusercontent.com/61757615/231556425-e0567483-4457-4589-ac86-0b1b69add85b.png)
<br>
<br>

<h2>✒️ Feito por João Victor <strong> 'Jvmntr' </strong> Monteiro </h2>

<img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/61757615/231557737-2903cb13-fb65-4824-ad09-431821364d2c.png" width="100px" alt="Jvmntr's perfil photo"/>

Feito com ❤️ por João Victor <strong> 'Jvmntr' </strong> Monteiro 🤘🏻 Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@Jvmntr_-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/Jvmntr_)](https://twitter.com/Jvmntr_) 
[![Linkedin Badge](https://img.shields.io/badge/-Jvmntr-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jvmntr_/)](https://www.linkedin.com/in/jvmntr/) 
[![Gmail Badge](https://img.shields.io/badge/-jvmntr.email.com@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jvmntr.email.com@gmail.com)](mailto:jvmntr.email.com@gmail.com)

