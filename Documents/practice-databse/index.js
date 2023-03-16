import express from 'express'
import {  PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }

})
  
app.listen(3000, function () {
    console.log("listening on port 3000")
}
)