import express, { Application } from "express";
import cors from "cors";
import dbConnection from "./db/index"


const app : Application = express();

dbConnection()

app.use(express.static("public"));

app.use(cors({
  /*   origin: "https://tmdb-web-app.vercel.app", */
    origin: "*",
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"],
    credentials: true,
  }));

app.use(express.json());

/* app.use("/api", index); */

const port = 3001;

app.listen(port, () => {
    console.log("The Eccomerce is on Baby ", port);
});

