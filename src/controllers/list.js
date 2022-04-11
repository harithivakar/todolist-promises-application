const list = require('../model/list.js');

exports.getAllList = (req,res) => {
    list.find()
        .then((result) => {
            res.json(result);
            
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getListByID = (req,res) => {
    const {id} = req.params;
        list.findById(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.createList = (req,res) => {
    const {listName,listType} = req.body;
        const newList = new list({listName, listType});

        newList.save()
        .then((result) => {
            res.status(200).location(`/lists/${result._id}`);
            res.json({status:"Success"});
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.updateList = (req, res) => {
    const {id} = req.params;
    const {listName,listType} = req.body;
    const updatedList = {};

    if(listName){
        updatedList.listName = listName;

    }

    if(listType){
        updatedList.listType = listType;
        
    }

    list.findByIdAndUpdate(id, {$set:updatedList})
    .then((result) => {
        res.json({status: "Success"})
    })
    .catch((err) => {
        console.log(err);
    });
}

exports.removeList = (req, res) => {
    const {id} = req.params;
        list.findByIdAndDelete(id)
        .then((result) => {
            res.json({status: "Success"})
        })
        .catch((err) => {
            console.log(err);
        });
}
