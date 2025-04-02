import "dotenv/config";
import express from "express"
import UserRoutes from "./domains/users/route.js"


const app = express()
const { PORT, } = process.env;
app.use("/users", UserRoutes);


app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)

});
