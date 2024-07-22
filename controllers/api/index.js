const router = require('express').Router();
const Task = require('../../models/task');

router.post('/', async (req, res) => {
  const newTask = Task.create({
    name: 'Do a thing',
    description: 'Just do it',
    status: 'todo'
  });

  res.json(newTask);
})

module.exports = router;