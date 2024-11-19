const express = require("express")
const app = express();
const cors = require("cors")

const {createTodo} = require("../backend/types")
const {updateTodo} = require("../backend/types");
const { todo } = require("./db");

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    //put in db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed : false
    })

    res.json({
        msg:"Todo created"
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find();
    
    res.json({
        todos,
    })
})

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!updatePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id: req.body._id
    },{
        completed: true
    });
    
    res.json({
        msg:"Todo marked as completed"
    });
})

app.listen(3000);
