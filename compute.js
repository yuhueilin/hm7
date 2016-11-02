// random(m) : random number 1~M
function random(m){
    return Math.floor(Math.random()*m+1); 
}

// max(a,b)
function max(a,b){
   if (a>b) { return a; } 
   else     { return b; }
}

//lastChar(arr)
function lastChar(arr){
   return arr[arr.length-1]
}

//squares(a, b)
function squares(a, b){
   return a*a+b*b
}

//leapYear(y)
function leapYear(y){
   if  (y%4===0 && y%100>0) { return "yes"; } 
   else                     { return "no";  }
}