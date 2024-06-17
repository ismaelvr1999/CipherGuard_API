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

//middleware
app.use(express.json());
app.use(cors());
//routes
app.use(routes.unprotectedRoutes)

//run server
app.listen(development.PORT, async(req, res) => {
  try{
    console.log("LOCALHOST, PORT: " + development.PORT);
    // db connection test
    const connection = await pool.getConnection();
    console.log("db connection successful");
    connection.release();
  } catch (err) {
    console.log(err);
  }
});
