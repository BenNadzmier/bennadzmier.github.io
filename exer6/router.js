import {homepage, saveStudent, updateStudent, removeStudent, removeAllStudents, findStudent, findAll} from './controller.js'


const router = (app) =>{
    app.get('/',homepage);
    app.post('/save-student', saveStudent);
    app.post('/update', updateStudent);
    app.post('/remove-user', removeStudent);
    app.post('/remove-all-user', removeAllStudents);
    app.get('/user', findStudent);
    app.get('/members', findAll)
}

export default router;