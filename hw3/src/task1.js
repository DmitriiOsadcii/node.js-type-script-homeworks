import * as fs from 'node:fs/promises'
import path from 'node:path'


export const createDir = async (nameOfDir) => {
    const dirPath = path.resolve('src', nameOfDir)
    try {
        await fs.mkdir(dirPath)
        console.log(`Directory ${nameOfDir} has been successfully created`);

    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDir = async (nameOfDir) => {
    const dirPath = path.resolve('src', nameOfDir)
    try {
        await fs.rmdir(dirPath)
        console.log(`Directory ${nameOfDir} has been successfully deleted`);

    } catch (error) {
        console.log(error.message);
    }
}
