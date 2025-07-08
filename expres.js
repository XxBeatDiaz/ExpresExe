import express from "expres";
const server = express();
const users = [{
    username: "yitzhak"
}];

server.get('/', (req, res) => {
    res.send("Welcome")
});

server.get('/users', (req, res) => {
    res.json(users)
})

server.get('/game', (req, res) => {
    res.send("game started")
});

server.listen(3000, () => {
    console.log("server started");
});