function rateLimit(fn, delay){
    let blocked=false;
    return function(...args){
        if(blocked){
            return;
        }

        blocked=true;
        fn.apply(this, args);

        setTimeout(()=>{
            blocked=false;
        }, delay);
    };
}

const limitedFn = rateLimit(()=>{
    console.log("Rate Limit function executed");
},2000);

limitedFn();  
limitedFn();