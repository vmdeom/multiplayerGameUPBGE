const app = require("express")();
const bodyParser = require("body-parser");
const net = require("net");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

function Player(socket, id, name, index, position, rotation){
    this.socket = socket;
    this.id = id;
    this.name = name;
    this.index = index;
    this.position = position;
    this.rotation = rotation;
}

function Player(socket, id){
    this.socket = socket;
    this.id = id;
}

let player1 = new Player("None", "1A", "Vitor", "1", [0, 0, 0], [0, 0, 0]);
let playerList = [player1];

app.get("/", function(req, res){res.render("interface", {listItem: playerList})})

app.listen(3000, function() {
    console.log("Server interface running on port 3000");
  });