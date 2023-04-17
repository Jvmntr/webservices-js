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

Para buscar um usuário específico, faça uma requisição do tipo GET para a URL <strong>https://webservices-fiap-js.herokuapp.com/usuario</strong>, substituindo :id pelo ID do usuário desejado. Por exemplo, para buscar o usuário com ID "1234567890", a URL seria <strong>https://webservices-fiap-js.herokuapp.com/usuario/1234567890</strong>.

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
<br>
<br>

<h2 align="center"> ⚠️ IMPORTANTE ⚠️ </h2> 
<h3 align="center"> <strong> PARA CONFIRMAR OS DELETES VOCÊ PODE REALIZAR UM GET GERAL ANTES E APÓS CADA DELETE </strong> </h3>

<h2>🚦 Rotas de teste (Heroku)</h2>

<h3> 👤 Rotas do Usuario </h3>

<strong> 🟢 POST - Criar Usuário </strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/usuario
    </code>
</pre>

<strong> 🟣 GET - Consultar todos os usuários </strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/usuario
    </code>
</pre>

<strong> 🟣 GET - Consultar Usuário por ID</strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/usuario/:id
    </code>
</pre>

<strong> 🟠 PUT - Atualizar Usuário </strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/usuario/:id
    </code>
</pre>

<strong> 🔴 DEL - Deletar Usuário </strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/usuario/:id
    </code>
</pre>

<h3>🛍️ Rotas do Produto </h3>

<strong> 🟢 POST - Criar Produto </strong>

<pre>
    <code>
      https://webservices-fiap-js.herokuapp.com/produto
    </code>
</pre>
	
<strong> 🟣 GET - Consultar todos os produtos </strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/produto
    </code>
</pre>

<strong> 🟣 GET - Consultar Produto por ID</strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/produto/:id
    </code>
</pre>

<strong> 🟠 PUT - Atualizar Produto </strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/produto/:id
    </code>
</pre>

<strong> 🔴 DEL - Deletar Produto </strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/produto/:id
    </code>
</pre>

<h3>🚚 Rotas do Fornecedor </h3>

<strong> 🟢 POST - Criar Fornecedor </strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/fornecedor
    </code>
</pre>
	
<strong> 🟣 GET - Consultar todos os fornecedores </strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/fornecedor
    </code>
</pre>

<strong> 🟣 GET - Consultar Fornecedor por ID</strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/fornecedor/:id
    </code>
</pre>

<strong> 🟠 PUT - Atualizar Fornecedor </strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/fornecedor/:id
    </code>
</pre>

<strong> 🔴 DEL - Deletar Fornecedor </strong>

<pre>
    <code>
       https://webservices-fiap-js.herokuapp.com/fornecedor/:id
    </code>
</pre>

<h2> 📄 Exemplos de JSON <h2>
	
<h3> 👤 Rotas do Usuario </h3>

<pre>
	<code>
		{
			"nome":"Nome de exemplo",
			"email":"emaildeexemplo@gmail.com",
			"senha":"senhadeexemplo"
		}
	</code>
</pre>	
	
<h3>🛍️ Rotas do Produto </h3>

<pre>
	<code>
		{
			"nomeProduto":"Nome de exemplo",
			"quantidade":"100",
			"fabricante":"Fabricante de exemplo"
		}
	</code>
</pre>	
	
<h3>🚚 Rotas do Fornecedor </h3>
	
<pre>
	<code>
		{
			"nome":"Nome de exemplo",
			"email":"emaildeexemplo@gmail.com",
			"CNPJ":"111111111111",
			"localidade":"SP/São Paulo"
		}
	</code>
</pre>	

<h2>🚦 Evidências de funcionamento (Heroku) </h2>

<h3> 👤 Rotas do Usuario </h3>

<strong> 🟢 POST - Criar Usuário </strong>

![image](https://user-images.githubusercontent.com/61757615/232560982-e75fdae5-59b3-4573-a720-ea94c4e4b8d0.png)

<strong> 🟣 GET - Consultar todos os usuários </strong>

![image](https://user-images.githubusercontent.com/61757615/232561138-dcbad399-188e-4d9e-92e5-9de76a2c379d.png)

<strong> 🟣 GET - Consultar Usuário por ID</strong>

![image](https://user-images.githubusercontent.com/61757615/232563323-f8f22d2a-2332-4c23-80c6-58ad4e3800d0.png)

<strong> 🟠 PUT - Atualizar Usuário </strong>

![image](https://user-images.githubusercontent.com/61757615/232563739-e625a2f1-8fce-4a93-8bb7-17b8b99f62b0.png)

<strong> 🔴 DEL - Deletar Usuário </strong>

![image](https://user-images.githubusercontent.com/61757615/232563929-4b4cea8d-bc1e-47b2-a4ec-b550200b5cc7.png)

<br>
<br>

<h3>🛍️ Rotas do Produto </h3>

<strong> 🟢 POST - Criar Produto </strong>

![image](https://user-images.githubusercontent.com/61757615/232565581-ee74fd9a-7072-49d3-ad8d-1000278c1883.png)
	
<strong> 🟣 GET - Consultar todos os produtos </strong>	
	
![image](https://user-images.githubusercontent.com/61757615/232565742-0379eac7-81e9-4b8c-a606-91dcd4fb7712.png)

<strong> 🟣 GET - Consultar Produto por ID </strong>

![image](https://user-images.githubusercontent.com/61757615/232565879-75bf4ec2-4d4b-4373-a943-fd78647b35a4.png)

<strong> 🟠 PUT - Atualizar Produto </strong>

![image](https://user-images.githubusercontent.com/61757615/232566001-727780ca-5772-45db-8a0e-d03e330a0151.png)

<strong> 🔴 DEL - Deletar Produto </strong>

![image](https://user-images.githubusercontent.com/61757615/232566094-d1ab5644-ddf9-4b87-aa9c-92375126de82.png)

<br>
<br>

<h3>🚚 Rotas do Fornecedor </h3>

<strong> 🟢 POST - Criar Fornecedor </strong>

![image](https://user-images.githubusercontent.com/61757615/232566914-acfec4b9-70ea-4f9b-a6fd-198c539b2b53.png)	

<strong> 🟣 GET - Consultar todos os fornecedores </strong>
	
![image](https://user-images.githubusercontent.com/61757615/232566974-96cd415c-2435-4459-baee-b60ca1a48070.png)	

<strong> 🟣 GET - Consultar Fornecedor por ID </strong>

![image](https://user-images.githubusercontent.com/61757615/232567069-26df2a97-09b8-4ac1-b1f5-304d544ce0b1.png)

<strong> 🟠 PUT - Atualizar Fornecedor </strong>

![image](https://user-images.githubusercontent.com/61757615/232567185-5247e1c8-7ac3-4c5e-8439-83893422dd60.png)

<strong> 🔴 DEL - Deletar Fornecedor </strong>

![image](https://user-images.githubusercontent.com/61757615/232567259-ea804f89-d608-4e3b-af8b-6f041fcd6f8d.png)

<br>
<br>

<h2>✒️ Feito por João Victor <strong> 'Jvmntr' </strong> Monteiro </h2>

<img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/61757615/231557737-2903cb13-fb65-4824-ad09-431821364d2c.png" width="100px" alt="Jvmntr's perfil photo"/>

Feito com ❤️ por João Victor <strong> 'Jvmntr' </strong> Monteiro 🤘🏻 Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@Jvmntr_-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/Jvmntr_)](https://twitter.com/Jvmntr_) 
[![Linkedin Badge](https://img.shields.io/badge/-Jvmntr-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jvmntr_/)](https://www.linkedin.com/in/jvmntr/) 
[![Gmail Badge](https://img.shields.io/badge/-jvmntr.email.com@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jvmntr.email.com@gmail.com)](mailto:jvmntr.email.com@gmail.com)

