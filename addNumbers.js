const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum,numsLeft,completionCallback){
  if(numsLeft===0){
    completionCallback(sum);
    reader.close();
  }
  if(numsLeft>0){
    reader.question("Please input number",function(answer){
      sum = parseInt(sum) + parseInt(answer);
      console.log(sum);
      numsLeft -= 1;
      addNumbers(sum,numsLeft,completionCallback);
    });
  }
}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
