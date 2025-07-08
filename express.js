//part 1
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

//part2
//1
// import express from "express";

// const server = express();

// server.get('/greet/:name', (req, res) => {
//     console.log(`i got name: ${req.params.name}`);
//     res.send({msg: req.params.name});
// });

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

// server.get('/test', async (req, res) => {
//     const name = "bob";
//     const response = await fetch(`http://localhost:3000/greet/${name}`);
//     const data = await response.json();

//     if (data.msg && data.msg.includes(name)) {
//         res.json({ result: "ok" });
//     } else {
//         res.json({ result: "fail" });
//     }
// })

// server.listen(3000, () => {
//     console.log(`server started: http://localhost:3000`);
// });


//part3
//1
import express from "express";

const app = express();
app.use(express.json());

app.post('/action', async (req, res) => {
    const { action } = req.body || {};

    const validAction = ["joke", "cat fact"];

    if (!action || !validAction.includes(action)) {
        return res.status(400).json({ msg: "body malformed" });
    }

    if (action === "joke") {
        const response = await fetch(`https://official-joke-api.appspot.com/random_joke`);
        const joke = await response.json();
        res.json({ msg: joke });
    }
    else if (action === "cat fact"){
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=70&breed_ids=beng&api_key=live_cGnyy7p9OMb0DGb7L2hQvLKmh4eNpRZjrRCVPsjMIBdTaUafMHzSPhhJsMnWvnh5`);
        const fact = await response.json();
        res.json({msg: fact.length})
    }
});

app.listen(3000, () => {
    console.log(`server started: http://localhost:3000`);
});