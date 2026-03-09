require('dotenv').config();
const express = require('express');
const connectDB = require('./SRC/config/db');
const orderRoutes = require('./SRC/routes/orderRoutes'); 

const app = express();
app.use(express.json());

connectDB();

app.use('/order', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));