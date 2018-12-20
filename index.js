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

function distanceFromHqInFeet(customers_block) {
  let blocksFromHQ = distanceFromHqInBlocks(customers_block);
  let ftFromHQ = blocksFromHQ * 264
  return ftFromHQ
}

function distanceTravelledInFeet(start, finish) {
  let blocksTraveled = start - finish
  let ftTraveled = blocksTraveled * 264
  if (ftTraveled < 0) {
    ftTraveled =- ftTraveled 
  }
  return ftTraveled
}

function calculatesFarePrice(start, destination) {

}
