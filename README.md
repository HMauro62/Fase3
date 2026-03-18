Utilizar para esse projeto:

npm create vite@latest my-project -- --template react
cd my-project

Versão 3.x
npm install -D tailwindcss@3 postcss autoprefixer 

npx tailwindcss init -p

npm install react-router-dom

npm install cors 

npm install lucide-react   ---> para icones

npm install react-paginate  --> paginação

npm install react-toastify -- msg

Debug React no navegar. Visite: https://react.dev/learn/react-developer-tools


Obs:
1) Para rodar em dev no react: npm run dev.

Também precisa alterar o tsconfig.json para redefinir   "verbatimModuleSyntax": true.
Assim consegue importar os types definidos.

2) Para evitar erros na politica do CORS, inclua o trecho abaixo no server.js da Api:

app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Substitua * pelo seu domínio em produção
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Request-Method", '*');
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Credentials", true)
  next();
});

Para "buildar", use: npm run build
O Vite, por padrão, criará uma pasta chamada 'dist' na raiz do projeto contendo:
index.html
Arquivos CSS e JS (na pasta assets)




Atalhos úteis no VSCode, para quem não tem prática:

Comentar/Descomentar em bloco  
shift + alt + A

Limpar o cache do typescript
Ctrl+Shf+P
digita: Typescript: Restart TS Server

Refresh VSCode
Ctrl+Shf+P
digita: Developer: Reload Window 

O Projeto da api precisa incorporar as instruções abaixo, devido ao CORS. Se não dá erro:
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Substitua * pelo seu domínio em produção
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



