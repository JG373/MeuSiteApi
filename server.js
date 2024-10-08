const express = require('express');
const server = express();
const path = require('path');
 
 
server.use(express.static(path.join(__dirname, 'public')));
 
server.use(express.static(path.join(__dirname, 'views')));
 
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
 
 
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
 
server.get('/informações', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/informações.html'));
});
 
 
server.get('/projeto', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/projeto.html'));
});

server.get('/livro1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/livro1.html'));
});
server.get('/livro2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/livro2.html'));
});
server.get('/livro3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/livro3.html'));
});
server.get('/livro4', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/livro4.html'));
});
server.get('/livro5', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/livro5.html'));
});


server.use(function (req, res, next) {
    console.log('aqui');
    return res.sendFile(path.join(__dirname, 'views/404.html'))
})
 
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});