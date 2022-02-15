#!/usr/bin/env node

"use strict";

const path = require("path");
const fs = require("fs");
const zlib = require("zlib");
const Transform = require("stream").Transform;

const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in", "out", "uncompress", "compress"],
  string: ["file"],
});

const BASEPATH = path.resolve(process.env.BASEPATH || __dirname);

let OUTPATH = path.join(BASEPATH, "out.txt");

if (args.help || process.argv.length <= 2) {
  error(null, /*showHelp=*/ true);
} else if (args._.includes("-") || args.in) {
  processFile(process.stdin);
} else if (args.file) {
  const filePath = path.join(BASEPATH, args.file);
  const stream = fs.createReadStream(filePath);

  processFile(stream);
} else {
  error("Usage incorrect.", /*showHelp=*/ true);
}

// ************************************************************************************************************

function printHelp() {
  console.log("ex2 usage:");
  console.log("");
  console.log("--help                      print this help");
  console.log("-, --in                     read file from stdin");
  console.log("--file={FILENAME}           read file from {FILENAME}");
  console.log("--uncompress                uncompress input file with gzip");
  console.log("--compress                  compress output with gzip");
  console.log("--out                       print output");
  console.log("");
  console.log("");
}

function error(err, showHelp = false) {
  process.exitCode = 1;
  console.error(err);
  if (showHelp) {
    console.log("");
    printHelp();
  }
}

function processFile(inputStream) {
  let stream = inputStream;
  let outStream;

  // uncompress a file
  if (args.uncompress) {
    const gunzip = zlib.createGunzip();
    stream = stream.pipe(gunzip);
  }

  // Transform stream
  const upperCaseTransformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase());
      // setTimeout(callback, 10000);
      callback();
    },
  });

  stream = stream.pipe(upperCaseTransformStream);

  // compressing a file with zlib
  if (args.compress) {
    OUTPATH = `${OUTPATH}.gz`;
    let gzip = zlib.createGzip();
    stream = stream.pipe(gzip);
  }

  if (args.out) {
    outStream = process.stdout;
  } else {
    // Outputting to a file
    outStream = fs.createWriteStream(OUTPATH);
  }

  stream.pipe(outStream);
}
