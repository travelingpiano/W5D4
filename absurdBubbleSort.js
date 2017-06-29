const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function adsurdBubbleSort(arr,sortCompletionCallback){
  madeAnySwaps = true;
  function outerBubbleSortLoop(madeAnySwaps){
    if(madeAnySwaps==true){
      innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
    }else{
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(madeAnySwaps);
}

function askIfGreaterThan(el1,el2,callback){
  reader.question(`Is ${el1} greater than ${el2}?(yes/no)\n`,function(answer){
    if(answer === "yes"){
      callback(true);
    }else{
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr,i,madeAnySwaps,outerBubbleSortLoop){
  if(i<arr.length-1){
    askIfGreaterThan(arr[i],arr[i+1],(isGreaterThan)=>{
      madeAnySwaps = false;
      if(isGreaterThan===true){
        let x = arr[i];
        arr[i] = arr[i+1];
        arr[i+1]= x;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr,i+1,madeAnySwaps,outerBubbleSortLoop);
    });
  }else if(i==(arr.length-1)){
    outerBubbleSortLoop(madeAnySwaps);
  }
}



// askIfGreaterThan(5,10,(ans)=>{console.log(ans);});

adsurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
