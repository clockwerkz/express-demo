const dataset = require('../dataset');
const Computer = require('../models/Computer');
const getAllComputers = (req, res)=> {
    Computer.find({})
    .then(computers => {
        return res.send(computers);
    })
    .catch(err => {
        return res.status(403).send(err);
    })
    
}

const findComputerById = (req, res) => {
    Computer.findById(req.params.id)
        .then(computer => {
            res.send(computer);
        })
        .catch(err => {
            return res.status(403).send(err);
        })
};

const addComputer = (req, res) => {
    const computer = new Computer({
        id: "234513",
        type: req.body.type,
        checkedOut : false,
        studentName : "",
        studentId: "",
        date: null
    });
    console.log(computer);
    computer.save(err => {
        if (err) {
            return res.status(403);
        }
        return res.send(computer);
    });
}

const checkOutComputer = (req, res) => {
    const id = req.params.id;
    const {studentName, studentId} = req.body;
    Computer.findById(id).then((computer)=>{
        computer.studentName = studentName;
        computer.studentId = studentId;
        computer.checkedOut = true;
        computer.date = new Date();
        computer.save()
            .then(computer => {
                res.send(computer);
            })
    })
    .catch(err => {
        return res.status(403).send(err);
    })
}

module.exports = {
    getAllComputers,
    addComputer,
    checkOutComputer,
    findComputerById
}