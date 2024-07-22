const router = require('express').Router();
const api = require('./api');

router.use('/api', api);

router.get('/pikachu', (req, res) => {
  res.json('HELLOOOO pikachu');
})

module.exports = router;