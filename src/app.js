/*Chat Comunitario - Curso Backend*/

import express from 'express';
import { engine } from 'express-handlebars';
import { Server } from 'socket.io';
const app = express();
const PORT = 8080;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./src/public'));

//Express-Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views')

//Rutas
app.get('/', (req, res) => {
    res.render('index');
})

//Listen
const httpServer = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})

//Array para el historial de los mensajes
let messages = [];


//Instancia Socket.io backend.
const io = new Server(httpServer)

io.on('connection', () => {
    console.log('Nuevo usuario conectado');

    socket.on('message' , (data) => {
        messages.push(data);
    })

    //Mensaje para el front

})