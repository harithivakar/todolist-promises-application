const group = require('../model/groups.js');

module.exports = class Group{

    static getAllGroups(req,res){
        group.find()
        .then((result) => {
            res.json(result);
            
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static getGroupsByID(req,res){
        const {id} = req.params;
        group.findById(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static createGroups(req,res){
        const {groupName} = req.body;
        const newgroup = new group({groupName});

        newgroup.save()
        .then((result) => {
            res.status(200).location(`/groups/${result._id}`);
            res.json({status:"Success"});
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static updateGroups(req,res){
                const {id} = req.params;
                const {groupName} = req.body;
                const updatedgroup = {};

                if(groupName){
                    updatedgroup.groupName = groupName;

                }

                group.findByIdAndUpdate(id, {$set:updatedgroup})
                .then((result) => {
                    res.json({status: "Success"})
                })
                .catch((err) => {
                    console.log(err);
                });
    }

    static removeGroups(req,res){
        const {id} = req.params;
        group.findByIdAndDelete(id)
        .then((result) => {
            res.json({status: "Success"})
        })
        .catch((err) => {
            console.log(err);
        });
    }
}