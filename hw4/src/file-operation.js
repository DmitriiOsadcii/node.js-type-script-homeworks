import * as fs from "fs/promises"
import 'dotenv/config'
import path from "path"

const file = process.env.FILENAME

const pathFile = path.join(file)

const text = 'Привет Андрей...'

fs.appendFile(file, text, 'utf-8')

const textInFile = await fs.readFile(file, "utf8")

console.log(textInFile)