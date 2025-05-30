import * as fs from 'node:fs/promises'
import path from 'node:path'

const pathLog = path.resolve('src', 'log.txt')

const logMessage = async (message) => {
    await fs.appendFile(pathLog, `\n ${message}`)

}

logMessage('Hello world ! It`s my first HomeWork on Node.js')

export default logMessage;