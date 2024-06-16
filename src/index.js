import express from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import development from "./config/development";
import swaggerDocument from "./swagger.json";
import pool from "./db/pool";
import routes from './routes/index';
//API documentation
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// db connection test
pool.connect((err) => {
  if (err) {
    console.error("Error connecting: ", err);
    return;
  }
  console.log("db connection successful");
});
/*
pool.query("INSERT INTO users(first_name,last_name,email,master_password) VALUES(?,?,?,?)",["pedro","gomez","123@mail"],(error,result)=>{
  if (error) throw error;
  console.log(result);
})
*/
//middleware
app.use(express.json());
app.use(cors());

app.use(routes.unprotectedRoutes)

app.listen(development.PORT, (req, res) => {
  console.log("LOCALHOST, PORT: " + development.PORT);
});
