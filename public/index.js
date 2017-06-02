const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      session = require('express-session'),
      secret = require('./.config.js')
      userCtrl = require('./userCtrl')
const app = express();
      app.use(bodyParser.json());
      app.use(session({
            secret: secret.sessionSecret,
            resave: false,
            saveUninitialized: false,
      }));

const corsOptions = {
      origin: 'http://localhost:8999'
};
app.use(cors(corsOptions));

app.post('/api/login', userCtrl.login)
app.listen(8999, function(){
      console.log('good job')
})

