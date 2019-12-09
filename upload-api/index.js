const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer({
    dest: './uploads/'
})

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file })
})

app.listen(3344, () => console.log("Running on localhost:3344"))