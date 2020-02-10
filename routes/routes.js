const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', { pageTitle: 'GIANT HVAC'},);
});

router.get('/residential', (req, res) => {
    res.render('res', { pageTitle: 'GIANT HVAC | Residential'},);
});

router.get('/residential/about', (req, res) => {
    res.render('about', { pageTitle: 'GIANT HVAC | Residential About'},);
});

router.get('/residential/air-conditioners', (req, res) => {
    res.render('air-conditioners', { pageTitle: 'GIANT HVAC | Residential Air Conditioners'},);
});

router.get('/residential/ductless-systems', (req, res) => {
    res.render('ductless-systems', { pageTitle: 'GIANT HVAC | Residential Ductless Systems'},);
});

router.get('/residential/heat-pumps', (req, res) => {
    res.render('heat-pumps', { pageTitle: 'GIANT HVAC | Residential Heat Pumps'},);
});

router.get('/residential/furnaces', (req, res) => {
    res.render('furnaces', { pageTitle: 'GIANT HVAC | Residential Furnaces'},);
});

router.get('/residential/water-heater', (req, res) => {
    res.render('water-heater', { pageTitle: 'GIANT HVAC | Residential Water Heaters'},);
});

router.get('/residential/plumbing', (req, res) => {
    res.render('plumbing', { pageTitle: 'GIANT HVAC | Residential Plumbing'},);
});

router.get('/residential/generators', (req, res) => {
    res.render('generators', { pageTitle: 'GIANT HVAC | Residential Generators'},);
});

router.get('/residential/panel-replacement', (req, res) => {
    res.render('panel-replacement', { pageTitle: 'GIANT HVAC | Residential Panel-replacement'},);
});

router.get('/residential/thermostats', (req, res) => {
    res.render('thermostats', { pageTitle: 'GIANT HVAC | Residential Thermostats'},);
});

router.get('/residential/coupons', (req, res) => {
    res.render('coupons', { pageTitle: 'GIANT HVAC | Residential Coupons'},);
});

// Commercial
router.get('/commercial', (req, res) => {
    res.render('com', { pageTitle: 'GIANT HVAC | Commercial'},);
});

router.get('/commercial/about', (req, res) => {
    res.render('about-com', { pageTitle: 'GIANT HVAC | Commercial About'},);
});

router.get('/commercial/rooftop-unit', (req, res) => {
    res.render('rooftop-unit-com', { pageTitle: 'GIANT HVAC | Commercial Rooftop units'},);
});

router.get('/commercial/duct-work', (req, res) => {
    res.render('duct-work-com', { pageTitle: 'GIANT HVAC | Commercial Duct Work'},);
});

router.get('/commercial/refrigeration', (req, res) => {
    res.render('refrigeration-com', { pageTitle: 'GIANT HVAC | Commercial Refrigeration'},);
});

router.get('/commercial/maintenance', (req, res) => {
    res.render('maintenance-com', { pageTitle: 'GIANT HVAC | Commercial Maintenance'},);
});

router.get('*', (req, res) => {
    res.render('404', { pageTitle: 'GIANT HVAC | Error 404'},);
});


module.exports = router;