// Code your solution here:

function driversWithRevenueOver(array, number) {
  let arr = array.filter(e => e.revenue > number)
  return arr
}

function driverNamesWithRevenueOver(array, number) {
let arr1 = driversWithRevenueOver(array, number)

let arr2 = arr1.map(e => e.name)

return arr2
  
}

function exactMatch(drivers, object) {
  let arr1 = []
  arr1 = drivers.filter(e => e.Object.keys() == object[0])
}

function exactMatchToList(drivers, object) {
  
}
