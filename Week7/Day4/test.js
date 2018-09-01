function accum(s) {
  // your code
  let result = '';
  let x = s.toUpperCase();
  let y = x.charAt(0);;
  for(let i=1;i<x.length;i++){
      y+='-';
      y+=x.charAt(i);

      for(let j=0;j<i;j++){
        y+=s.charAt(i).toLowerCase();
      } 
  }
  return y;
}

console.log(accum("ZpglnRxqenU"));

//should return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"