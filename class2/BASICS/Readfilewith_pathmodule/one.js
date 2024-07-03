
import path from 'path'
//console.log(path.join(__dirname))   not working in es-6 way
//console.log(path.join(__filename))  not working in es-6 way
console.log(path.join(process.cwd(),"india","banglore"))