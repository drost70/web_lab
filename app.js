const express = require('express');
const cameraRouter = require('./routes/cameraRoute');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(cors());  
app.use('/api', cameraRouter);

app.listen(PORT, () => {
    console.log(`Сервер працює на порті http://localhost:%s`, PORT);
});
