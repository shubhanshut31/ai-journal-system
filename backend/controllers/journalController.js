const Journal = require("../models/Journal");

// Create Journal
exports.createJournal = async (req, res) => {

    try {

        const journal = new Journal(req.body);

        const savedJournal = await journal.save();

        res.json(savedJournal);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};


// Get Journals
exports.getJournals = async (req, res) => {

    try {

        const journals = await Journal.find({
            userId: req.params.userId
        });

        res.json(journals);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};


// Analyze Journal
exports.analyzeJournal = async (req, res) => {

    try {

        const { text } = req.body;

        res.json({
            emotion: "calm",
            keywords: ["nature", "rain"],
            summary: "User felt relaxed"
        });

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};


// Insights
exports.getInsights = async (req, res) => {

    try {

        const journals = await Journal.find({
            userId: req.params.userId
        });

        res.json({
            totalEntries: journals.length,
            topEmotion: "calm",
            mostUsedAmbience: "forest",
            recentKeywords: ["rain", "peace"]
        });

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

};