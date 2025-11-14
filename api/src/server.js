import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
})
