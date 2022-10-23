// Code your solution here
const driverss = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function findMatching(array,name){
return array.filter((driver)=>{return driver.toLowerCase()===name.toLowerCase()})

  }
findMatching(driverss,"Bobby")

function fuzzyMatch(array, letter) {
    return array.filter((first) => first.substring(0, letter.length) === letter);
  }
  console.log(fuzzyMatch(driverss, "S"));
  

  function matchName (array , name ){
    return array.filter(driver=>{
       return driver.name===name;
    })
  }