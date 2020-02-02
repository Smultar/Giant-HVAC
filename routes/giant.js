const router = require('express').Router();
const { clientId, clientSecret, scopes, redirectUri } = require('../config.json');

router.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Dashboard'},);
});

router.get('/residential', (req, res) => {
    res.render('res', { pageTitle: 'Dashboard'},);
});

router.get('/residential/about', (req, res) => {
    res.render('about', { pageTitle: 'Dashboard'},);
});
router.get('/residential/air-conditioners', (req, res) => {
    res.render('air-conditioners', { pageTitle: 'Dashboard'},);
});


module.exports = router;