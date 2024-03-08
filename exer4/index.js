//Ben Nadzmier Bensali
//CMSC 100 UV3L
import { v4 as uuidv4 } from 'uuid'; //import uuidv4
import isEmail from 'validator/lib/isEmail.js'; //import email validator
import fs from 'fs'; //import fs functions

const generateUniqueID = (name, lName) =>{ //function to create unique user ID
    name = name.toLowerCase();//lowercase both entries
    lName = lName.toLowerCase();
    const uid = uuidv4().slice(0,8); //get first 8 characters of uuid
    let first = name.charAt(0); //get first character of first name

    return first+lName+uid;
}

const addAccount = ([fName, lName, email, age]) =>{
    if (fName != null && lName != null && isEmail(email) && age>= 18){ //validate all conditions such as null, valid email, and age
        let data = fName+","+lName+","+email+","+age+","+generateUniqueID(fName, lName)+"\n"; //create a string of the user entry
        fs.appendFile('users.txt', data, (err) => { //add to file
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
          });
        return true;
    } else return false;
}

export default {generateUniqueID, addAccount}; //export the functions to test