const router = require('express').Router();
const { Item } = require('../db').models;

// GET /api/items
router.get('/', async (req, res, next) => {
  try {
    res.send(await Item.findAll());
  } catch (error) {
    next(error);
  }
});

// GET /api/items/:id
router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Item.findByPk(req.params.id));
  } catch (error) {
    next(error);
  }
});

// POST /api/items
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Item.create(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/items/:id
router.put('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.send(await item.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/items/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    await item.destroy();
    res.send(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
