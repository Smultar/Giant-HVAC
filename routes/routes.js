const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', { pageTitle: 'GIANT HVAC'},);
});

router.get('/residential', (req, res) => {
    res.render('res', { pageTitle: 'GIANT HVAC | Residential'},);
});

router.get('/residential/about', (req, res) => {
    res.render('about', { pageTitle: 'GIANT HVAC | Residential | About'},);
});

router.get('/residential/air-conditioners', (req, res) => {
    res.render('air-conditioners', { pageTitle: 'GIANT HVAC | Residential | Air Conditioners'},);
});

router.get('/residential/ductless-systems', (req, res) => {
    res.render('ductless-systems', { pageTitle: 'GIANT HVAC | Residential | Ductless Systems'},);
});
router.get('/residential/head-pumps', (req, res) => {
    res.render('head-pumps', { pageTitle: 'GIANT HVAC | Residential | Heat Pumps'},);
});

module.exports = router;