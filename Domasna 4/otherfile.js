const {writeDoc, appendDoc, readDoc} = require("./main")

async function main() {
    try{
        await writeDoc("doc.txt", "Random text")
        await appendDoc("doc.txt", "\nAdding append")
        await readDoc("doc.txt")
    }catch (err){
        console.log(err)
    }
}

main()