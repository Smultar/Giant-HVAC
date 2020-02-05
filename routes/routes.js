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

router.get('/residential/heat-pumps', (req, res) => {
    res.render('heat-pumps', { pageTitle: 'GIANT HVAC | Residential | Heat Pumps'},);
});

router.get('/residential/furnaces', (req, res) => {
    res.render('furnaces', { pageTitle: 'GIANT HVAC | Residential | Furnaces'},);
});

router.get('/residential/water-heater', (req, res) => {
    res.render('water-heater', { pageTitle: 'GIANT HVAC | Residential | Water Heaters'},);
});

router.get('/residential/plumbing', (req, res) => {
    res.render('plumbing', { pageTitle: 'GIANT HVAC | Residential | Plumbing'},);
});

router.get('/residential/generators', (req, res) => {
    res.render('generators', { pageTitle: 'GIANT HVAC | Residential | Generators'},);
});

router.get('/residential/panel-replacement', (req, res) => {
    res.render('panel-replacement', { pageTitle: 'GIANT HVAC | Residential | Panel-replacement'},);
});

router.get('/residential/thermostats', (req, res) => {
    res.render('thermostats', { pageTitle: 'GIANT HVAC | Residential | Thermostats'},);
});

router.get('/residential/coupons', (req, res) => {
    res.render('coupons', { pageTitle: 'GIANT HVAC | Residential | Coupons'},);
});

router.get('/residential/special-finances', (req, res) => {
    res.render('special-finances', { pageTitle: 'GIANT HVAC | Residential | Coupons'},);
});

router.get('*', (req, res) => {
    res.render('404', { pageTitle: 'GIANT HVAC | Residential | Coupons'},);
});

module.exports = router;