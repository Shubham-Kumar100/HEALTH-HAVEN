require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const DataModel = require('./models/data');

// Database connection
connection();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: '*',  // Allow any origin, you can replace '*' with your specific frontend URL
    credentials: true,
  }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Save data to MongoDB
app.post('/save', async (req, res) => {
    try {
      // Access the data sent from the front end
      const dataFromFrontend = req.body;
  
      // Log the data to the console
      console.log('Data from front end:', dataFromFrontend);
  
      // Save the data to MongoDB
      const newData = new DataModel(dataFromFrontend);
      await newData.save();
  
      // Send a response if needed
      res.status(200).json({ message: 'Data received and saved successfully' });
    } catch (error) {
      console.error('Error processing data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Listening on port ${port}...`));