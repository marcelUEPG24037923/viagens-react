import express from "express";
import cors from "cors";
import viagemRoutes from "./routes/viagemRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/viagens", viagemRoutes);

export default app;