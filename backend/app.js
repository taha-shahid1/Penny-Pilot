require('dotenv').config();
const cors = require('cors');  // Import the cors package
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',  // Allow only this origin // Allow these HTTP methods
  allowedHeaders: 'Content-Type,Authorization',  // Allow these headers
};

app.use(cors(corsOptions));  // Apply the CORS middleware to the app

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
