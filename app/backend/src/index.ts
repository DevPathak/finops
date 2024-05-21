import express from "express";
import { Routes } from "./routes/login";

const app = express();

console.log("hehee");
app.use("/login", Routes);
const Port = 3000;

app.listen(Port, () => {
	console.log(`Server is running on port ${Port}`);
});
