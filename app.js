const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
const fileCreation = () => {
    rl.question("Enter the file name \n",(file)=>{
        rl.question("Enter the content : \n",(content)=>{
            fs.writeFile(`${file}.txt`,content,(err)=>{
                if(err){
                     console.log(err)
                    }
                else  {
                    console.log("File created successfully")
                }
                rl.close();          
            })
        })
    })
}

fileCreation();