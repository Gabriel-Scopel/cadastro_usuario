let http = require("http");
let express = require("express");
var bodyParser = require("body-parser");

var login_usuario
var senha_usuario


var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/cadastra", function (req,resp){
    resp.render("cadastra");
})
app.get("/cadastrar_usuario", function (req,resp){
    resp.write("CADASTRADO COM SUCESSO!");
    resp.end()
})
app.get(["/","/login]"], function (req,resp){
    resp.render("logion")
})

app.post("/login_usuario",function (req,resp){
    let usuario = req.body.login;
    let senha = req.body.senha;
    if (usuario=== "fulano" && senha==123){
        let mensagem = "sucesso"
        resp.render("resposta", {mensagem, usuario, senha});
    }
    else{
        let mensagem = "falha"
        resp.render("resposta", {mensagem, usuario, senha});
    }
    resp.end()
})
app.use(express.static("./public"));

var servidor = http.createServer(app);
servidor.listen(80);

console.log("servidor rodando...")