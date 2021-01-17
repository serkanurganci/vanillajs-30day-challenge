const person = new Person(); // create new Person object

//Get object
const inventors = person.inventors;
const people = person.people;

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventors1500 = inventors.filter(
  (filter) => filter.year >= 1500 && filter.year <= 1599
);
console.log(inventors1500);
//with forEach
const inventor = [];
inventors.forEach((item) => {
  if (item.year >= 1500 && item.year <= 1599) {
    inventor.push(item);
  }
});
console.log(inventor);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstAndLast = inventors.map(item => {
    const name = {
        firstName:item.first,
        lastName:item.last
    }
    return name
});

console.log(firstAndLast);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.table(ordered)


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYear = inventors.reduce((total,invertor) =>{
    return total + (invertor.passed - invertor.year);
},0)
console.log(totalYear)

    //with forLoop
    let forLoopTotalYear = 0
    for (let i = 0; i < inventors.length; i++) {
        
        forLoopTotalYear += inventors[i].passed - inventors[i].year

    }
    console.log(forLoopTotalYear)


// 5. Sort the inventors by years lived
const livesYear = inventors.sort((a, b) =>{

  lastGuy = a.passed - a.year
  nextGuy = b.passed - b.year

  return lastGuy > nextGuy ? -1 : 1

})

console.table(livesYear)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll("a"))

// const de = links
//         .map(link => link.textContent)
//         .filter(streetName => streetName.includes("de"))

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ")
  const [bLast, bFirst] = nextOne.split(", ")

  return aLast > bLast ? 1 : -1
})

console.log(alpha)
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportation = data.reduce((obj, item)=>{
  if(!obj[item]){
    obj[item]=0;
  }
  obj[item]++;
  return obj;
},{})

console.log(transportation)