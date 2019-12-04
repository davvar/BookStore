const rndNum = range => Math.floor(Math.random() * (range ? range : 1));

const randomNumWithinRange = (prevNum, range) => {
  let currNum = rndNum(range);
  return prevNum === currNum
    ? randomNumWithinRange(prevNum, range)
    : currNum;
};


const randomNumsWithinRange = function(range, length = 1) {
  if (length === 1) return rndNum(range);
  //preventing infinity loop
  if(range <= length)  length = range 

  let nums = [];
  
  arrayMaker();
  function arrayMaker() {
    let num = rndNum(range);

    if (nums.includes(num)) return arrayMaker();
    
    nums.push(num);
    return nums.length === length
      ? nums 
      : arrayMaker();
  }

  return nums;
};

export { randomNumsWithinRange, randomNumWithinRange };
