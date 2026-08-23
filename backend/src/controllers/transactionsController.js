import { sql } from "../config/db.js";

export const getTransactionsByUserId = async (req,res)=>{
  
    const {userId}=req.params
    try {
      const transactions =await sql `
      SELECT * FROM transactions WHERE user_id=${userId} ORDER BY created_at DESC
      `;
  
      console.log(transactions)
  
      res.status(200).json(transactions)
  
    } catch (error) {
      console.log("Error ocurred while getting transacrions", error)
      res.status(500).json({message: "Internal Server Error"})
    }
  

}

export const postTransaction = async (req,res)=>{
  try {
    const {title, amount, category, user_id}= req.body;
    if(!title || !amount || !category || !user_id){
      return res.status(400).json({message: "All fields are required"});
    }

    const transaction=await sql`INSERT INTO transactions(user_id,category,amount,title)
    VALUES(${user_id},${category},${amount},${title})
    RETURNING *
    `;
    console.log(transaction)
    res.status(201).json(transaction[0])

  } catch (error) {
    console.log('Error creating a transaction')
    res.status(500).json({message: "Internal Server Error"})
  }
}

export const deleteTransactionByUserId = async (req,res)=>{
  const {userId} = req.params;
  try {
    const result=await sql ` DELETE FROM transactions WHERE user_id=${userId} RETURNING *`
    if(result.length === 0){
      return res.status(400).json({message: "Transactions NOt Found"})
    }
    res.status(200).json({message: "Deleted Succesfully"})
  } catch (error) {
    console.log("Error Deleting Trabsactions",error)
    res.status(404).json({message: "Internal Server Error"})
  }
}

export const getSummaryByUserId = async (req,res)=>{
  const {userId}=req.params

  try {
    const balanceResult=await sql `SELECT COALESCE(SUM(amount),0) as balance FROM transactions WHERE user_id=${userId}`

    const incomeResult=await sql `SELECT COALESCE(SUM(amount),0) as income FROM transactions WHERE user_id=${userId} and amount>0`

    const expensesResult=await sql`SELECT COALESCE(SUM(amount),0) as expenses FROM transactions WHERE user_id=${userId} and amount<0`

    res.status(200).json({
      totalBalance:balanceResult[0].balance,
      totalIncome: incomeResult[0].income,
      totalExpenses: expensesResult[0].expenses
    })


  } catch (error) {
    console.log("Error Getting Summary",error);
    res.status(500).json({message: "Internal Server Error"})
  }
}
