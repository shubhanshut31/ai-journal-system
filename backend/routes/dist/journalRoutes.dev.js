"use strict";

var express = require("express");

var router = express.Router();

var journalController = require("../controllers/journalController"); // Create Journal


router.post("/", journalController.createJournal); // Get Journals

router.get("/:userId", journalController.getJournals); // Analyze Journal

router.post("/analyze", journalController.analyzeJournal); // Insights

router.get("/insights/:userId", journalController.getInsights);
module.exports = router;