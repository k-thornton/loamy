require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');
const path = require('path');
const { spawn } = require('child_process');

const app = express();
const PORT = process.env.PORT || 5001;

// Function to start a Python microservice
function startPythonMicroservice(command, args, cwd) {
  const microservice = spawn(command, args, { cwd, shell: true });

  microservice.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  microservice.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  microservice.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

// Body parser middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
const apiRouter = express.Router();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Routes
apiRouter.use('/auth', require('./routes/authRoutes'));
apiRouter.use('/survey', require('./routes/surveyRoutes'));
apiRouter.use('/chat', require('./routes/chatRoutes'));

apiRouter.get('/', (req, res) => {
  res.send('Welcome to the api.');
});

app.use('/api', apiRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const buildDirectory = path.join(__dirname, '../frontend/build');

// Making a monolith by starting all services from the same file.
// This is for ease of deployment, though this could be broken up for more scalability later.
startPythonMicroservice('gunicorn', ['-w', '4', '-b', '0.0.0.0:6000', 'app:app'], path.join(__dirname, '../microservices/calc_service'));
startPythonMicroservice('uvicorn', ['app:app', '--reload', '--port', '7000'], path.join(__dirname, '../microservices/chat_service'));

// Serve the React frontend app
app.use(express.static(buildDirectory));

// The "catchall" handler: if a request is not matched by any other route,
// send back the React app's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(buildDirectory, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
