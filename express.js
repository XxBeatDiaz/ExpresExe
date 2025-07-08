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

server.get('/greet/:name', (req, res) => {
    console.log(`i got name: ${req.params.name}`);
    res.send({msg: req.params.name});
});

server.get('/test', async (req, res) => {
    const name = "bob";
    const response = await fetch(`http://localhost:3000/greet/${name}`);
    const data = await response.json();

    if (data.msg && data.msg.includes(name)) {
        res.json({ result: "ok" });
    } else {
        res.json({ result: "fail" });
    }
})

server.listen(3000, () => {
    console.log(`server started: http://localhost:3000`);
});
