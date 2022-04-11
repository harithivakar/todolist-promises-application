const express = require('express');

const Groups = require('../controllers/Group.js');

const router = express.Router();

router.get("/",Groups.getAllGroups);
router.get("/:id",Groups.getGroupsByID);
router.post("/",Groups.createGroups);
router.put("/:id",Groups.updateGroups);
router.delete("/:id",Groups.removeGroups);


module.exports = router;