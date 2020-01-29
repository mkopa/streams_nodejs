const fs = require("fs");
const through = require("through2");


fs.createReadStream("./data.txt")
    .pipe(through(toUpper))
    .pipe(process.stdout);

function toUpper(buffer, encoding, next) {
    // next(null, buffer.toString().toUpperCase());
    this.push(null, buffer.toString().toUpperCase()); // to the right
    next(); // from the left
}
