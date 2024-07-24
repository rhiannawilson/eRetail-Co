const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', (req, res) => {
    // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      { model: Product }
  ]}).then((categoryData) => {
    res.json(categoryData);
  });
});


router.get('/:id', (req, res) => {
// find one category by its `id` value
// be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      { model: Product }
  ]}).then((categoryData) => {
    res.json(categoryData);
  });
});

router.post('/', (req, res) => {
      // create a new category
  Category.create(req.body)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ err: 'Failed to create category' });
    });
});

  // update a category by its `id` value
router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((category) => {
      res.status(200).json(category);
    }).catch((err) => {
      console.error(err);
      res.status(400).json({ err: `Failed to update category id: ${req.params.id}`});
    })
  });


router.delete('/:id', (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id
      }
    }).then((log) => {
      res.json(log)
    });
  });

module.exports = router;
