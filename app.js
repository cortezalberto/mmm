// requerimos express y path
const express = require('express');
const path = require('path');

// guardamos en un constante app la funcionalidad de express()
const app = express();

// definimos el puerto 
const port = 3030;

// definimos las rutas para los archivos estáticos(públicos) y otra para las vistas
const viewsPath = path.resolve(__dirname, 'views');
const publicPath = path.resolve(__dirname, 'public');

// Agregamos el middleware para configurar la carpeta de archivos estáticos
app.use(express.static(publicPath));

// Definimos las rutas que responda a GET
app.get('/', (req, res) => res.sendFile(path.resolve(viewsPath, 'home.html')));

app.get('/register', (req, res) => res.sendFile(path.resolve(viewsPath, 'register.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(viewsPath, 'login.html')));

// Levantamos el servidor
app.listen(process.env.PORT || port, () => console.log(`Server running`));