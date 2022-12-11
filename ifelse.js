const a = 10;
const b = 12;

console.log(a > b);                     //Helps in debugging
console.log(b > a);  

if (a<b){
    let c = 14;                         
    //Scope of c will remain in the if statement
    //As soon as the bracket closes value of c is destryed
    
    console.log('b is greater',c);
}
else{
    //if c was printed here, it'll not work
    //also cannot change the value of c here
    console.log('a is greater');
}