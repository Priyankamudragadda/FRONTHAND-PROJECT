//Example-1
let counter =0;

const intervalId = setInterval(() => {
    counter++;
    console.log("Counter:" + counter);
    
    if(counter ===5 ){
        clearInterval(intervalId);
        console.log("Interval stopped.");
    }
},1000);


//Example-2
console.log("Starting...");
setTimeout(() =>{
    console.log("This message is displayed after 2 seconds.");
},2000);
console.log("Ending...");