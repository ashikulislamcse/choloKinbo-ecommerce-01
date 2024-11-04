import express from "express";
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello from cholokinbo server')
  })

app.listen(port, () => {
    console.log(`server in running on port ${port}`)
  })