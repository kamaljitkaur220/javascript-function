
//ADD

function add (x , y){
return x + y;
}
document.getElementById("add-sum").innerHTML = add(4,2);

//Muliply 
function Multiply(x, y) {
  let  ans= 0; 
              
  for (let i = 0; i < y; i++) {
      ans = add(ans,x) 
  }
  return ans; 
} 
document.getElementById("demo").innerHTML = Multiply(4,6);


//power
function power(x, n) {
  let result1 = 1;
  for(let index = 0; index < n; index++){
    result1 *= x;
  }
return result1;
}
document.getElementById("add-power").innerHTML = power(2,8);


// Factorial 


function factorial(n) { 
  let ans=1;  
  for (let i = 2; i <= n; i++) 
      ans = ans * i; 
  return ans; 
} 
  document.getElementById("add-fact").innerHTML =  factorial(5);
  

//Fibonacci
function fibonacci(n) {

	let sequence = [0, 1];

	for (let i = 2; i < n; i++) {
		sequence.push(sequence[sequence.length -1] + sequence[sequence.length -2]);
	}

	return sequence;
}

document.getElementById("add-fib").innerHTML =  fibonacci(8);

