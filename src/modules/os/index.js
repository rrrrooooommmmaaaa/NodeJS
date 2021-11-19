const os = require('os')

console.log('type : ' + os.type()); // тип ОС
console.log('platform : ' + os.platform()); // платформа
console.log('cpus : ' + os.cpus()); // Возвращает массив объектов, содержащий информацию о каждом логическом ядре ЦП.
console.log('arch : ' + os.arch()); // архитектура процессора
console.log('homedir : ' + os.homedir()); // домашняя директория