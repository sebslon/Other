#!/usr/bin/env node

"use strict";

/* 
  ENDING STREAM with CANCELLABLE ASYNC FLOW
*/
const util = require("util");
const path = require("path");
const fs = require("fs");
const zlib = require("zlib");
const Transform = require("stream").Transform;

const CAF = require("caf");

// async initializations
const fsStatAsync = util.promisify(fs.stat);
const fsMkdirAsync = util.promisify(fs.mkdir);
processFile = CAF(processFile);
// ************

const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in", "out", "uncompress", "compress"],
  string: ["file"],
});

const BASEPATH = path.resolve(process.env.BASEPATH || __dirname);

const BASEOUTPATH = path.resolve(
  process.env.BASEOUTPATH || path.join(__dirname, "outfiles")
);

let OUTPATH = path.join(BASEOUTPATH, "out.txt");

main().catch(error);

// ************************************************************************************************************************************************

async function main() {
  try {
    await fsStatAsync(BASEOUTPATH);
  } catch (err) {
    await fsMkdirAsync(BASEOUTPATH);
  }

  const timeout = CAF.timeout(1000, "Took too long."); // CAF - Cancelable Async Flow

  if (args.help || process.argv.length <= 2) {
    error(null, /*showHelp=*/ true);
  } else if (args._.includes("-") || args.in) {
    await processFile(timeout, process.stdin);

    // temporary debug output
    console.error("Complete.");
  } else if (args.file) {
    const filePath = path.join(BASEPATH, args.file);

    await processFile(timeout, fs.createReadStream(filePath));

    // temporary debug output
    console.error("Complete.");
  } else {
    error("Usage incorrect.", /*showHelp=*/ true);
  }
}

function streamComplete(stream) {
  return new Promise(function c(res) {
    stream.on("end", res);
  });
}

function printHelp() {
  console.log("ex3 usage:");
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

function* processFile(signal, inputStream) {
  let stream = inputStream;
  let outStream;

  if (args.uncompress) {
    let gunzip = zlib.createGunzip();
    stream = stream.pipe(gunzip);
  }

  const uppercase = new Transform({
    transform(chunk, encoding, done) {
      this.push(chunk.toString().toUpperCase());
      done();
    },
  });

  stream = stream.pipe(uppercase);

  if (args.compress) {
    OUTPATH = `${OUTPATH}.gz`;
    const gzip = zlib.createGzip();
    stream = stream.pipe(gzip);
  }

  if (args.out) {
    outStream = process.stdout;
  } else {
    outStream = fs.createWriteStream(OUTPATH);
  }

  stream.pipe(outStream);

  // listen for cancelation to abort output
  signal.pr.catch(function onCancelation() {
    stream.unpipe(outStream);
    stream.destroy();
  });

  yield streamComplete(stream);
}
