var path = require('path')
const express = require('express')
const app = express()
const models = require('./models')
const cors = require('cors')
app.use(express.json())
const db = require('./models')
app.use(cors())
const router=express.Router()
const bcrypt = require('bcrypt')

app.use(express.urlencoded())
const PORT = process.env.PORT || 5000
global.models = require('./models')

/*
const pgp = require('pg-promise')()
const connectionString = 'postgres://fxyqgzxg:i66ItBKFaiFO581GDTU_YGxpIDwbjsRQ@fanny.db.elephantsql.com/fxyqgzxg'
*/
var usersRouter = require('./server2/app.js');
const store = new SequelizeStore({ db: models.sequelize })
app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      store: store,
    })
   );
   store.sync();
   app.use(express.json());
   app.use(express.urlencoded({ extended: false }));
   /*app.use('/', indexRouter);*/

app.use('/api', usersRouter)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
module.exports = app;
