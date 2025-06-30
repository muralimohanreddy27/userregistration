import express from "express";
//import todoRoutes from "./routes/todoRoutes.js"

const app = express();


app.use(express.json());
app.use(express.urlencoded());

//app.use('/api/v1/todos', todoRoutes);


export default app;
