const express = require('express');
const cors =require('cors');
const port = 3000;

// use the express.static middleware to serve assets like images, CSS and JS files
// app.use(express.static('root_path'))

const app = express();
// app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello Daniel!");
});

app.get('/puppies', (req, res) => {
    res.send("There are no puppies here...")
}
)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});