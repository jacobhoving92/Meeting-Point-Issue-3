const express = require("express");
const multer = require('multer');
const uuid = require('uuid').v4;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, originalname);
    }
});

const upload = multer({ storage })

const app = express();
app.use(express.static('public'));

app.post('/upload', upload.single('avatar'), (req, res) => {
        const file = `${__dirname}/public/pecha.m4a`;
        res.download(file); // Set disposition and send it.
    // return res.json({status: 'ok'})
});

app.listen(3000, () => console.log("app running at port 3000")); 

