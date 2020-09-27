"use strict";

const os = require("os");

const log = (name, value) =>
  process.stdout.write(`::set-output name=${name}::${value}${os.EOL}`);

const { length } = os.cpus();
log("count", length);
log("plus_one", length + 1);
log("plus_two", length + 2);
