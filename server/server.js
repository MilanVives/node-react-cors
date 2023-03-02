const express = require('express');
const app = express();

// Block added for Cors
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}))
// end of cors


app.get("/data", (req, res) => {
    res.json({
        name: 'Milan',
        school:'Vives'
    })
})

app.listen(5500);