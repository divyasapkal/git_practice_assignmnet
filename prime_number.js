function PrimeNumber(Number){
    let Factors=0;
    for(i=2;i<=Number/2;i++){
        if(Number%i==0){
            Factors++;
            break;
        }
    }
    if(Factors==0){
        return true;
    }else{
        return false;
    }
}
let userInput=3274
let answer=PrimeNumber(userInput);
if(answer==true){
    console.log("Prime number");
}else{
    console.log("Not a prime number");
}