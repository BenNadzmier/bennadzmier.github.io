//Ben Nadzmier Bensali
//CMSC 100 UV3L
import express from 'express';
import fs from 'fs';

// instantiate the server
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Book test');
});
  
app.post('/add-book', (req, res) => {
    const {name,isbn,author,year} = req.body;

    if (name !== '' && isbn !== '' && author !== '' && year !== '') { //to check if fields are not empty
        let data = name+","+isbn+","+author+","+year+"\n"; //turn entries into one string
        fs.appendFile('books.txt', data, (err) => { //add to file
        if (err) throw err;
        console.log('Book added');
        return res.json({succes: true});
      });
    } else return res.json({success: false});
});

app.get('/find-by-isbn-author', (req,res) => {
    const {isbn,author} = req.query;
    res.json(isbn,author);
});

app.listen(3000, () => { console.log('Server started at port 3000')} );