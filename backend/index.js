const express = require('express');
const app = express();
const mongoose = require('mongoose');
const statRouter = require('./routes/stat-routes');
const testRouter = require('./routes/test-routes');

const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(express.json());
app.use("/stat", statRouter);
app.use("/test", testRouter);

mongoose.connect('mongodb+srv://shreyanigam1062:JR6DqJeB50osi2fh@cluster0.j9agpqm.mongodb.net/DBHW?retryWrites=true&w=majority',
{
  useNewurlParser: true,
  useUnifiedTopology: true
}
).then(()=>{
  console.warn('Database connected')
})

app.listen(5000); 