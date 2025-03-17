const express = require("express");
require('dotenv').config()

const setup = async () => {

    const app = express();
    const PORT = 3000;

    app.listen(3000, () => { 
        console.log(`Server started at ${PORT}`);
    });

}

setup();