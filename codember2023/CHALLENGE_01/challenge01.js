import fs from 'node:fs'

const message = fs.readFileSync('./message_01.txt', 'utf8')

const result = {}

message.toLowerCase().split(' ').forEach(element => {
  result[element] ? result[element]++ : (result[element] = 1)
})

let final = ''
Object.entries(result).forEach(([element, count]) => {
  final += element + count
})

console.log(final)
