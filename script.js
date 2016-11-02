// random(m) : random number 1~M
function random(m){
    var rnd = Math.floor(Math.random()*m+1); 
    return rnd;
}

// max(a,b)
function max(a,b){
   if (a>b) { var max=a; return max; } 
   else     { var max=b; return max; }
}

//lastChar(arr)
function lastChar(arr){
   var char=arr[arr.length-1]
   return char;
}

//squares(a, b)
function squares(a,b){
   var squa = a*a+b*b;
   return squa;
}

//leapYear(y)
function leapYear(y){
   if  (y%4===0 && y%100>0) { var YN="yes"; return YN; } 
   else                     { var YN="no";  return YN; }
}

