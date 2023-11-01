function myDisplayer(some){
    document.getElementById("demo").innerHTML=some;
}
 let myPromise = new Promise(function(myResole, MyReject){
    let x= 0;
    if(x==0){
        myResolve("ok");
    }
    else{
        MyReject("Error");
    }
    
 });
 myPromise.then(
    function(value) {myDisplayer(value);
    },
    function(error) {myDisplayer(error);
    }
 )