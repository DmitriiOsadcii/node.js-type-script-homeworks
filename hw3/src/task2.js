import * as fs from 'node:fs/promises'
import path from 'node:path'

const fileLealises = async (fileName, fileContent) => {
    const filePath = path.resolve('src', fileName)

    try {
        await fs.writeFile(filePath, fileContent, 'utf-8')
        console.log(`File ${fileName} was successfully created`);
        const data = await fs.readFile(filePath, "utf-8")
        console.log('File content:', data);

    } catch (error) {
        console.log(error.message);
    }
}

export default fileLealises;