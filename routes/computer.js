const express = require("express");
const router = express.Router();
const computerController = require("../controllers/computerController");

/*
GET - /api/computer
GET - /api/computer/:id
POST /api/computer
PUT /api/computer/:id
DELETE /api/computer/:id
*/

router.get('/', computerController.getAllComputers);
router.get('/:id', computerController.findComputerById);
router.post('/', computerController.addComputer);
router.put('/:id', computerController.checkOutComputer);

module.exports = router;