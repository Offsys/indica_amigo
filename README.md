# Ewallet - Indicação de amigos
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=DONE&color=GREEN&style=for-the-badge)

### Desenvolvido por Osvaldo Wolski 


#### Índice
- Descrição do Projeto
- Rotas do Projeto
- Explanação das Rotas
- Processo de Instalação

### Descrição do projeto
Você deve implementar um sistema que permita que uma pessoa obtenha sugestões de novos
amigos se baseando nas amizades já existentes. Você deve criar uma aplicação Node.js que
escute a porta 3000. Armazene dados em memória durante a execução do programa (não utilize
nenhum banco de dados externo, utilize variáveis globais, não serão aceitos testes que
dependam da instalação de softwares externos para armazenar os dados durante a execução)

### Rotas do projeto

- `Get All Persons`: [GET] http://localhost:3000/
- `Create Person`: [POST] http://localhost:3000/person
- `Get Person`: [GET] http://localhost:3000/person/CPF
- `Clear All`: [DEL] http://localhost:3000/clean
- `Create Relationship`: [POST] http://localhost:3000/relationship/
- `Recommendations`: [GET] http://localhost:3000/recommendations/

### Explanação das rotas:
1 - `General List Persons`: Esta rota listará todas as pessoas cadastradas no sistema, caso não encontre have uma mensagem de erro.

2 - `Create Person`: Esta rota receberá um nome e um CPF, caso esteje dentro dos critérios o registro será salvo.

3 - `Get Person`: Esta rota deve receber um CPF, se o usuário existir serão exibidos os dados, caso contrário deverá exibir mensagem de erro.

4 - `Clear All`: Esta rota todos os dados em memória.

5 - `Create Relationship`: Esta rota recebe dois CPF's e caso os dois usuários existam cria um relacionamento entre eles.

6 - `Recommendations`: Exibe lista de recomendações de pessoas amigas dos amigos que não são seus amigos para o CPF informado.

### Processo de Instalação

Após baixar o git deste projeto:
    
- docker build -t osvaldo .

- docker run --name osvaldo -p 3000:3000 -d osvaldo