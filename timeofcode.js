// Big O Notation

// function sumofall(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;

// }


// function sumofall(n){
//     return n*(n+1)/2;
// }




// console.log(sumofall(10));

const sumofall = (n) =>{
    let total = 0;
    for(let i=1; i<=n; i++){
        total += i;
    }
    return total;
}
 console.log(sumofall(10));