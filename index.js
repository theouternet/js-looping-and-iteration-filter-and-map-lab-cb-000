// Code your solution here:

function driversWithRevenueOver(array, number) {
  let arr = array.filter(e => e.revenue > number)
  return arr
}

function driverNamesWithRevenueOver(array, number) {
let arr1 = driversWithRevenueOver(array, number)

let arr2 = arr1.map(e => e.name)

}

function exactMatch(drivers, object) {

}

function exactMatchToList(drivers, object) {
  
}
