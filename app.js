const express=require("express");
const app= express();
const port=3030;
const path=require('path');

app.get("/",function (req, res) {
    res.sendFile(path.join(__dirname, "/views/template.html"))
})

app.use(express.static("public"))

app.listen(port, () => 
console.log("Levantando un servidor con Express en el puerto"+port)
)
