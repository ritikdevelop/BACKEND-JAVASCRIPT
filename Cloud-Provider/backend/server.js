require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');


// Connect to the database
connectDB();


app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

app.get('/', (req, res) => {
    res.send('Hello from Cloud Provider!');
});