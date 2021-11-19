const User = require('./models/UserModel.js')

const students = [{"photo":"https://robohash.org/Андрей","mark":3,"isDonePr":true,"_id":"6195578e99bd59276935f57b","name":"Андрей","group":"РПЗ 18 2/9","__v":0},{"photo":"https://robohash.org/fdgdf5345345","mark":0,"isDonePr":false,"_id":"61955e9799bd59276935f580","name":"hh","group":"RPZ 18 2/9","__v":0}];

module.exports = (app) => {
    app.get('/', (_, res) => {
        res.send('<h1>Ого, ничего се (Привет из ГЕТ)</h1>')
    })

    // студенты
    app.get('/stud', (_, res) => {
        res.json(students);
      })
      
      app.get('/stud', (_, res) => {
        res.send(students);
      })

    app.get('/users', (_, res) => {
        User.find((error, users) => {
            if(error) {
                res.send(error)
            }

            res.json(users)
        })
    })

    app.get('/login', (_, res) => {
        res.redirect('/')
    })

    app.get('/download', (_, res) => {
        res.download('./src/datasources/data.json')
    })
}