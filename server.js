//Took this part of the code from the other server (challenge 4)
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(express.json()); //investigated this line so that JSON messages can be read

//Hint used :) just changed messages
app.post('/api/register-patient', (req, res) => {
    const patientData = req.body;
    console.log("Recieved a new patient: ", patientData);
    res.status(200).send({ message: "Registration successful :D" });
});

//Used this from the challenge 4 server, just switched message to english :)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));