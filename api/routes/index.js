const util = require('../utils/utils');
const express = require('express');
const router = express.Router();
const entriesController = require('./controllers/entriesController');

router.get('/entries', (req, res, next) => { entriesController.getAllEntries(req, res, next)});
router.get('/entries/:entry_id', (req, res, next) => { entriesController.getEntryById(req, res, next)});
router.get('/healthcheck', (req, res, next) => { res.status(200).send('Healthy!')});
router.get('/migrationshealthcheck', (req, res, next) => {
    util.areMigrationsFinished()
    .then((result) => {
        if(result){
            res.status(200).send('Healthy!')
        }else {
            res.status(500).send('Unhealthy!');
        }
    });
});
router.get('*', (req, res, next) => { res.status(404).send()});
module.exports = router;
