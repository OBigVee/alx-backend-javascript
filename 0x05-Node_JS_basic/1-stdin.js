process.stdin.setEncoding("utf-8");
const intro = "Welcome to Holberton School, what is your name?\n"
const outro = "This important software is now closing";
process.stdin.write(intro);
process.stdin.on("readable",function (){
    const name = process.stdin.read();
    if (name !== null){
        console.log(`your name is: ${name}`);
    }
    console.log(outro);
})
// const name = process.stdin.write("Welcome to Holberton School," +
//     " what is your name?"+"\n");
// console.log(`your name is: ${name} \n`);
// console.log("This important software is now closing");