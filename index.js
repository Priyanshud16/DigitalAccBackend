const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');   
const cors =require('cors');
// import scanRoutes from './routes/scanRoutes.js';
const scanRoutes = require('./routes/scanRoutes.js'); // Adjust the path as necessary

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/scan', scanRoutes);

// Database + Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running at 5000 and connected to DB')))
  .catch((err) => console.error(err));
