/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const { onRequest } = require('firebase-functions/v2/https');
// const logger = require('firebase-functions/logger');
const functions = require("firebase-functions");

const express = require("express");
const PORT = 3000;
const app = express();

app.get("/hello", (req, res, next) => {
  console.info("/hello call success ");
  res.send("Welcome to Firebase Cloud Functions");
});

app.listen(PORT, () => {
  console.info("Server is running on PORT:", PORT);
});

exports.app = functions.https.onRequest(app);
