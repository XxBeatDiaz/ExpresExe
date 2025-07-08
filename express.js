//1
// import express from "express";

// const server = express();

// server.get('/greet', (req, res) => {
//     const time = new Date();
//     res.json({ "msg": `hi from get endpoint ${time.toLocaleString()}` })
// })

// server.listen(3000, () => {
//     console.log(`server started: http://localhost:3000`);
// });

//2
// import express from "express";

// const server = express();

// server.get('/greet/:name', (req, res) => {
//     console.log(`i got name: ${req.params.name}`);
//     res.send({msg: req.params.name});
// });

// server.listen(3000, () => {
//     console.log(`server started: http://localhost:3000`);
// });

//3
import express from "express";

const server = express();
server.get('/test', (req, res) => {
    server.get('/greet/:name', (req, res) => {
        
    })
})

server.listen(3000, () => {
    console.log(`server started: http://localhost:3000`);
});
