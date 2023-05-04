## Como configurar essa aplicação
<p>Após clonar o repositório, executar o comando a seguir para instalar os pacotes:</p>
<pre>
yarn install
</pre>

## Versão
<p>Foi utilizada a versão do Node: 19.7.0</p>

## Dados
<p>Para criar as tabelas no banco de dados rodar as <b>migrations</b> pelo comando: <b>npx sequelize-cli db:migrate</b>, ou importar o dump da base na raíz do projeto, chamado: <b>dump-bd</b>

## Endpoints - API
<p>O arquivo contendo o ambiente / end-points da API está na pasta raíz do projeto, chamado: <b>Insomnia.json</b>.</p>

## Testes
<p>Para rodar os testes rodar o comando:</p>
<pre>yarn test</pre>

## Executar aplicação
<p>Para iniciar o servidor em ambiente de desenvolvimento rodar o comando:</p>
<pre>yarn dev</pre>
