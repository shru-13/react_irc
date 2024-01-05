const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;
const dbFilePath = path.join(__dirname, 'db.json');

app.use(bodyParser.json());

// Read data from the JSON file
const readData = async () => {
  try {
    const fileContent = await fs.readFile(dbFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    // If the file doesn't exist or is empty, return an empty array
    return [];
  }
};

// Write data to the JSON file
const writeData = async (data) => {
  try {
    await fs.writeFile(dbFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing to JSON file:', error);
    throw error;
  }
};

// Registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { fullname, dob, username, email, gender, password } = req.body;

    // Read existing data from the JSON file
    const dbData = await readData();

    // Check if the user already exists
    const existingUser = dbData.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Add a new user to the data
    dbData.push({ fullname, dob, username, email, gender, password });

    // Write the updated data back to the JSON file
    await writeData(dbData);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Read existing data from the JSON file
    const dbData = await readData();

    // Find the user in the data
    const user = dbData.find((u) => u.email === email && u.password === password);

    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3500`);
});
