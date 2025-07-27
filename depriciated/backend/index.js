const express = require('express');
const { createTodo } = require("./types");
const app = express();

app.use(express.json());



app.post("/todos", function(req, res)  {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) { 
        res.status(411).json({
            msg: "galat input",
        })
        return;
    }
});

app.get('/todos', function(req, res)  {
    
});


app.get("/completed", function(req,res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) { 
        res.status(411).json({
            msg: "galat input",
        })
        return;
    }
});



