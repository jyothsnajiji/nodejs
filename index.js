const {display,getDetails} =require("./student");
const http= require("http");
const dotenv=require("dotenv");
const express=require("express");
const mongoose = require("mongoose");
const taskController=require("./controller/taskController");


dotenv.config();

const app=express();
app.use(express.json());

app.post("/tasks",taskController.createTask);
app.get("/tasks",taskController.getTask);
app.get("/tasks/:id",taskController.getTaskById);
app.patch("/tasks/:id",taskController.updateTask);
app.delete("/tasks/:id",taskController.deleteTask);
app.get("/:id", (req,res)=>{
    res.status(200).json({
        message:"hello",
        id: req.params.id
    });
});

app.post("/", (req,res)=>{
    res.status(200).json(req.body);
});


mongoose.connect("mongodb+srv://jyothsnajiji04:NoDdIkA@cluster0.o6x1in4.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log(err);
});


app.listen(process.env.PORT,() => {
    console.log("Server running on ",process.env.PORT);
});

/*const server= http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello world");
});

server.listen(process.env.PORT, ()=>{
    console.log("Server is runnung on ",process.env.PORT);
});*/







/*display();
getDetails();
console.log("hello world");
console.log("client");
console.log("server");*/
