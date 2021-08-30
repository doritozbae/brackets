module.exports = function check(str, bracketsConfig) {

  let leftBracket = [];
  let rightBracket = []; 
  let st = [];

 for (let j = 0; j < bracketsConfig.length; j++) {
   leftBracket.push(bracketsConfig[j][0]);
   rightBracket.push(bracketsConfig[j][1]);
 } 

 let newStr = str.split(""); 

 for (let i = 0; i < newStr.length; i++) {
  //let currentIndex = newStr[i];
    
    // if (leftBracket.includes(currentIndex)) {
    //   st.push(currentIndex);
    // }
    // else if (rightBracket.includes(currentIndex)) {
    //   if (rightBracket.indexOf(currentIndex) != leftBracket.indexOf(st.pop())) {
    //     return false;
    //   } 
    // }

    if (rightBracket.includes(newStr[i])) {
      if (st.includes(leftBracket[rightBracket.indexOf(newStr[i])])) {
        st.pop();
        continue;
      }
    }

    if (leftBracket.includes(newStr[i])) {
      st.push(newStr[i]);
      continue;
    }

    return false;
  }

if (st.length > 0) {
  return false;
}
return true;

 
}
