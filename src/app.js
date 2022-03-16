// const express = require("express"); //1
// const app = express(); //2
// const path = require("path");
// const port = 3050


// app.use(express.static("public"))


// app.listen (port, () => console.log(`Puerto ${port} corriendo`)) //4 y ya nos olvidamos)

// app.get("/", (req, res) =>{
//     res.sendfile(path.resolve(__dirname, "views/home.html"));
// })

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.static(path.join(__dirname,"../","public")));


app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views","home.html")) );

app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "views","login.html")) );

app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "views","register.html")) );



app.listen(PORT, () => console.log("estoy funcionando en el puerto " + PORT));
