const express = require('express');

const {getAllList,getListByID,createList,updateList,removeList} = require('../controllers/list.js');



const router = express.Router();

router.get("/",getAllList);
router.get("/:id",getListByID);
router.post("/",createList);
router.put("/:id",updateList);
router.delete("/:id",removeList);



module.exports = router;