const fs = require("fs");

const database = `${__dirname}/../data.json`

const readFile = async() => {
    return new Promise((sucess, fail) => {
        fs.readFile(database, "utf-8", (err, data) => {
            if(err){
                return fail(err);
            }else
                return sucess(data);
        });
    });
};

const writeFile = async(data) => {
    return new Promise ((success, fail) => {
        fs.writeFile(database, data, (err) => {
            if(err){
                return fail(err);
            }else{
                return success();
            }
        })
    })
};

const list = async() => {
    let file = await readFile();
    let fileData = JSON.parse(file);
    return fileData;
}

const add = async (data) => {
    let file = await readFile();
    let fileData = JSON.parse(file);
    fileData.push(data);
    await writeFile(JSON.stringify(fileData));
}

const remove = async(index) => {
    index = Number(index)
    let file = await readFile();
    let fileData = JSON.parse(file);
    const newFileData = fileData.filter((_, i) => index !==i);
    await writeFile(JSON.stringify(newFileData))
}

module.exports = {
    list,
    add,
    remove
}