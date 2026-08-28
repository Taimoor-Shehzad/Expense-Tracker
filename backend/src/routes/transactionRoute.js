import express from "express";
import { getTransactionsByUserId } from "../controllers/transactionsController.js";
import { postTransaction } from "../controllers/transactionsController.js";
import { deleteTransactionByUserId } from "../controllers/transactionsController.js";
import { getSummaryByUserId } from "../controllers/transactionsController.js";

const router=express.Router();

router.get("/summary/:userId",getSummaryByUserId)
router.get("/:userId",getTransactionsByUserId)

router.post("/", postTransaction)

router.delete("/:userId",deleteTransactionByUserId)

export default router