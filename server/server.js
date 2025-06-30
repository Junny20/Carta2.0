import express from "express";
import cors from "cors";

const app = express();
const port = 3000 

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(port, () => {console.log("Server is running on port: ", port)})