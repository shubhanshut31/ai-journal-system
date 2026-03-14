"use strict";

var Journal = require("../models/Journal"); // Create Journal


exports.createJournal = function _callee(req, res) {
  var journal, savedJournal;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          journal = new Journal(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(journal.save());

        case 4:
          savedJournal = _context.sent;
          res.json(savedJournal);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: _context.t0.message
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}; // Get Journals


exports.getJournals = function _callee2(req, res) {
  var journals;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Journal.find({
            userId: req.params.userId
          }));

        case 3:
          journals = _context2.sent;
          res.json(journals);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: _context2.t0.message
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Analyze Journal


exports.analyzeJournal = function _callee3(req, res) {
  var text;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          try {
            text = req.body.text;
            res.json({
              emotion: "calm",
              keywords: ["nature", "rain"],
              summary: "User felt relaxed"
            });
          } catch (error) {
            res.status(500).json({
              error: error.message
            });
          }

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // Insights


exports.getInsights = function _callee4(req, res) {
  var journals;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Journal.find({
            userId: req.params.userId
          }));

        case 3:
          journals = _context4.sent;
          res.json({
            totalEntries: journals.length,
            topEmotion: "calm",
            mostUsedAmbience: "forest",
            recentKeywords: ["rain", "peace"]
          });
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            error: _context4.t0.message
          });

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
};