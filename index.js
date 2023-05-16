const express = require("express")
const app = express()
const fs = require("fs")
const PORT = 5707

// TODO for myself:
// /hash should serve a hash of the packages folder
// /index should serve a list of available packages
// /info/:name should serve info about package :name in json
// /download/:name/ will send a .zip of the package's contents, formatted like the system's root FS for ez file placement
// we'll need a package API on the jsys/jpm side but that's an issue for future me

app.listen(() => {
    console.log("Listening on " + PORT)
})