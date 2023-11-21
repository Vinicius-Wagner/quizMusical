import express from 'express';
import session from 'express-session';
import { renderFile } from 'ejs';

global.__dirname = new URL('.', import.meta.url).pathname;

const port = 3000;
import * as path from 'path';
const app = express();

app.use(session({secret:'aaaa'}));

app.use('/views', express.static(__dirname + '/styles'));

app.engine('html', renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('hmtl', path.join(__dirname, '/html'));

app.use(express.static('views'));


app.get('/',(req, reply)=>{
    reply.render('home');
})


app.listen(port, ()=>{
    console.log('servidor no ar!');
})

