import * as fs from 'fs'

// Example : http://localhost:3000/api/getBlog?slug=how-to-learn-js

export default function handler(req,res){
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
    if(err) return res.status(400).json({error:"No such blog found"})
    res.status(200).json(JSON.parse(data))
  })
}