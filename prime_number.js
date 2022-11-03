function PrimeNumbers(Number){
    let Factors=0;
    for(i=2;i<=Number*(1/2);i++){
        if(Number%i==0){
            Factors++;
            break;
        }
    }
    if(Factors==0)
        return true;
    }else{
        return false;
    }
}
let userInput=3274
let answer=PrimeNumbers(userInput);
if(answer==true){
    console.log(Number,"is Prime number");
}else{
    console.log(Number,"is Not a prime number");
}