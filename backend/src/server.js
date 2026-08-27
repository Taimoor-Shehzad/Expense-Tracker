import express from "express"
import dotenv from "dotenv"
import { sql } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionRoute from "./routes/transactionRoute.js";

dotenv.config();
const app=express();
const PORT = process.env.PORT || 5001;

app.use(rateLimiter)
app.use(express.json())
app.use("/api/transactions",transactionRoute)

async function initDB() {
  try {
    await sql `CREATE TABLE IF NOT EXISTS transactions(
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE
    )`;
    console.log('Database initialized succesfully')
  } catch (error) {
    console.log("Error initializing db",error);
    process.exit(1);
  }
}

app.get("/", (req,res)=>{
res.send("Its Workingg");
})


initDB();

app.get("/", (req, res) => {
  res.send("Its Workingg");
});

// Run local server listener only during development
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
}

// Required for Vercel serverless functions
export default app;