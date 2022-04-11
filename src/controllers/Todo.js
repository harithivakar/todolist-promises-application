const todo = require("../model/todos.js");

module.exports = class Todo{

    static getAllTodo(req,res){
        todo.find()
        .then((result) => {
            res.json(result);
            
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static getTodoByID(req,res){
        const {id} = req.params;
        todo.findById(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static createTodo(req,res){
        const {name} = req.body;
        const newTodo = new todo({
            todo: name,
            status: "Pending"
        });

        newTodo.save()
        .then((result) => {
            res.status(200).location(`/todos/${result._id}`);
            res.json({status:"Success"});
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static updateTodo(req,res){
        const {id} = req.params;
        const {name,status} = req.body;
        todo.findById(id)
        .then((result) => {
            result.todo = name ? name : result.todo;
            result.status = status ? status : result.status;

            result.save()
            .then((result) => {
                res.json({status: "Success"});
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static removeTodo(req,res){
        const {id} = req.params;
        todo.findByIdAndDelete(id)
        .then((result) => {
            res.json({status: "Success"})
        })
        .catch((err) => {
            console.log(err);
        });
    }
}