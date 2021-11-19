const path = require('path')

console.log(__filename);

console.log(path.basename(__filename)); // название файла
console.log(path.dirname(__filename)); // расширение файла
console.log(path.extname(__filename)); // название директории

console.log(path.parse(__filename)); // объект => элементы пути к файлу
 
console.log(path.join(__dirname, 'test', 'second.html')); // обьеденение всех всех заданных путей с помощью разделителя
console.log(path.resolve(__dirname, './test', 'second.html')); // преобразование в абсолютный путь