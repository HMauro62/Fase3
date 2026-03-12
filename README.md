Utilizar para esse projeto:

npm create vite@latest my-project -- --template react
cd my-project

Versão 3.x
npm install -D tailwindcss@3 postcss autoprefixer 
npx tailwindcss init -p

npm install react-router-dom
npm install lucide-react   ---> para icones

Obs:
1) Para rodar o react: npm run dev.

Também precisa alterar o tsconfig.json para redefinir   "verbatimModuleSyntax": true.
Assim consegue importar os types definidos.

2) Para evitar erros na politica do CORS, inclua o trecho abaixo no server.js da Api:

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Substitua * pelo seu domínio em produção
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



Atalhos úteis no VSCode:

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

Debug React no navegar. Visite https://react.dev/learn/react-developer-tools