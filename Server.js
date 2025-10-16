import app from "./App.js";

const Port = process.env.PORT

app.listen(Port, () =>{
    console.log(`Server Running on Port ${Port}`);
});