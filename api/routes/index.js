var express = require('express');
var router = express.Router();
var entriesController = require('./controllers/entriesController');

router.get('/entries', (req, res, next) => { entriesController.getAllEntries(req, res, next)});
router.get('/entries/:entry_id', (req, res, next) => { entriesController.getEntryById(req, res, next)});
router.get('*', (req, res, next) => { res.status(404).send()});
module.exports = router;
