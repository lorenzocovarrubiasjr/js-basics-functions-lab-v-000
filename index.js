// Code your solution in this file!
function distanceFromHqInBlocks(customers_block) {
  const hqBlock = 42
  let distFromHQ = 0
  if (customers_block > hqBlock)  {
    distFromHQ = customers_block - hqBlock;
  }
  else if (customers_block < hqBlock) {
    distFromHQ = hqBlock - customers_block
  }
  else {
    distFromHQ = 0
  }
  return distFromHQ
}

function distanceFromHqInFeet() {
}

funtcion distanceTravelledInFeet() {
}

function calculatesFarePrice(start, destination) {
  
}


