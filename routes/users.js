const router = require('express').Router();

const UserController = require('../controllers/UserController');

// GET all users
router.get('/', UserController.getAllUsers);

// GET user
router.get('/:id', UserController.getUser);

// PUT user
router.put('/:id', UserController.putUser);

// POST user
router.post('/', UserController.postUser);

// DELETE user
router.delete('/:id', UserController.deleteUser);

module.exports = router;
