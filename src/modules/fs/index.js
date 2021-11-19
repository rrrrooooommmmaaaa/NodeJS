const path = require('path')
const fs = require('fs')

// => возврат информации о файле
console.log(
    fs.stat(path.resolve(__dirname, 'temp'), (error) => {
        if (!error) {
            // => delete
            fs.rmdirSync(path.resolve(__dirname, 'temp'))
        }
    })
)

// => создание новой директории
fs.mkdirSync(path.resolve(__dirname, 'folder'))

// => переименовал созданную папку
setTimeout(() => fs.renameSync(path.resolve(__dirname, 'folder'), path.resolve(__dirname, 'folder_rename')), 3000)