import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 3000





mongoose.connect('mongodb://127.0.0.1:27017/BlogAppReact')
.then(() => {
  console.log('server connected to database');
  app.listen(PORT, () => {
    console.log(`Server running at Port:${PORT}`);
  })
})
.catch((error) => {
  console.log(error);
})