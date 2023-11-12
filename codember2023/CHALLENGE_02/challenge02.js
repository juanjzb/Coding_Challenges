import fs from 'node:fs'

const message = fs.readFileSync('./message_02.txt', 'utf8')

let value = 0
let final = ''

message.split('').forEach((element) => {
  if (element === '#') {
    value++
  } else if (element === '@') {
    value--
  } else if (element === '*') {
    value *= value
  } else if (element === '&') {
    final += value
  }
})

console.log(final)
