import fs from 'fs'

export default async function handler(req,res){
    if(req.method === "POST"){
        const dir = await fs.promises.readdir("contactdata")
        fs.writeFile(`contactdata/${dir.length + 1}.json`,JSON.stringify(req.body),()=>{})
        res.status(200).json({message:"Contact Data Saved"})
    }else {
    }
}