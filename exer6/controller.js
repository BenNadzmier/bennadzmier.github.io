import mongoose from 'mongoose';

await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase",{
    useNewUrlParser: true, useUnifiedTopology: true
});

const Student = mongoose.model('Student',{
    stdnum : String,
    fname: String,
    lname: String,
    age: Number
});

const homepage = (req,res) => {
    res.send('Welcome to the Homepage');
}

const saveStudent = async (req, res) => {
    let newStudent = new Student ({
        stdnum: req.body.stdnum,
        fname: req.body.fname,
        lname: req.body.lname,
        age: req.body.age
    });

    res.send(await newStudent.save());
}

const updateStudent = async (req, res) => {
    res.send(await toEdit.updateOne(
        {fname: req.query.fname},
        {$set: {fname: req.body.newName}}
    ));
}

const removeStudent = async (req, res) => {
    let toDelete = await Student.find({stdnum: req.query.stdnum});

    res.send(await toDelete.deleteOne());
}

const removeAllStudents = async (re, res) => {
    res.send(await Student.deleteMany({}));
}
    
const findStudent = async (req, res) => {
    res.send(await Student.find({stdnum: req.query.stdnum}));
}

const findAll = async (req, req) => {
    res.send(await Student.find({}));
}

export {homepage, saveStudent, updateStudent, removeStudent, removeAllStudents, findStudent, findAll};