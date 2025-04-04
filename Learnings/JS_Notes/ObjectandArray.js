// Array of Object
const users = [
    {
        id: 1,
        name: "Obuli",
        age: 23,
        email: "obuli@gmail.com"
    },
    {
        id: 2,
        name: "Dhanush",
        age: 23,
        email: "dhanush@gmail.com"
    }
];

// Accessing object properties from array
console.log("First user's name:", users[0].name); // Output: Obuli
console.log("Second user's email:", users[1].email); // Output: dhanush@gmail.com

//new object push in array
users.push({
    id:3,
    name:"Panneer",
    age:23,
    email:"panneer@gmail.com"
})
console.log("Push one object: ",users);
console.log("Length of the array: "+users.length);

//change 3rd array, inside of object age.
let panneer = users.find(user => user.name==="Panneer")
panneer.age=22;
// users[2].age=21;
console.log("After change the object age value: ",users);


// .some() method - return true or false any items match
// .find() method - return first matching item (object and value)
// .filter() method - return all matching items.
// .map() method - handles any size of array like 100s of array and return single line 
// .sort() method - sort the array by different datatypes in different method
// .reverse() method - reverse the array values in original array
// .splice() or spread operator with .reverse() method - new array create and reverse.
// .reduce() method - used ofr arithmetic calculation.
// .isrray() method - check the array or not
// .every() method- return true array passes the test.



//check id is available in users array using .some() method
console.log("Check ID is available or not: "+users.some(user => "id" in user));

//check how many id in array using .fliter() and .length method
console.log("Check how many ID's in users array: "+users.filter(user => "id" in user).length);


//find name in ID=1 in users array using .find() method
let id1=users.find(n => n.id === 1)
if(id1){
    console.log("The ID1 person name is: "+id1.name);  
}else{
    console.log("Not identified");
}

//find index of any object value using .findIndex() method
console.log("Find index of the object in array: "+users.findIndex(user => user.name ==="Panneer"));

//find lastindex of any object in array using .findLastIndex() method
//same method

// .map() method
console.log("Access the user array of object name using map method: ",users.map(user => user.name));

// .sort() method
// console.log("Sorting by age in ascending order: ",users.sort((a,b) => a.age-b.age)); //ascending order
// console.log("Sorting the name: ",users.sort((a,b) => a.name.localeCompare(b.name)));

//reverse() method
// console.log("Reverse in original array",users.reverse());

//spread operator and reverse() method
console.log("reverse the array using spread operator: ",[...users].reverse());

//reduce() method
console.log("Add the total age of all users: ",users.reduce((sum,current) => sum + current.age,0));

//isArray() method
console.log("Check Array or not: ",Array.isArray(users));

//every() method like while loop
console.log("Check users name are equal: ",users.every(user => user.name === users[0].name));
console.log("Check users age are equal: ",users.every(user => user.age === users[0].age));
console.log("Check users email are equal: ",users.every(user => user.email === users[0].email));

console.log("Object of array");
// Object of array
const company = {
    name: "KT Telematic",
    location: "Coimbatore",
    employees: [
        "Obuli",
        "Dhanush",
        "Panneer"
    ],
    departments: ["Engineering", "Medical", "Sales"]
};

// Accessing array elements from object
console.log("Company name:", company.name); // Output: KT Telematic
console.log("First employee:", company.employees[0]); // Output: Obuli
console.log("Second department:", company.departments[1]); // Output: Medical

//add new element in employees array in an company object.
company.employees.push("Hari");
console.log(company.employees);

//add new array
company.age=[22,21,21,23];
console.log("After added new array: ",company);


//change department medical into marketing in company object
let index= company.departments.indexOf("Medical");
company.departments.splice(index,1,"Marketing");
console.log("Change element value in array: ",company.departments);

//add new value in departments array
company.departments.push("Finance");
console.log("Add new element in department array: ",company.departments);

// Practical example combining both
const professors = [
    {
        id: 1,
        name: "Ajith",
        grades: [85, 90, 88],
        details: {
            major: "Computer Science",
            year: "Junior"
        }
    },
    {
        id: 2,
        name: "Praguspathi",
        grades: [78, 82, 80],
        details: {
            major: "Mathematics",
            year: "Senior"
        }
    }
];

// Adding new student in an array object
professors.push({
    id: 3,
    name: "Yaswanth",
    grades: [95, 92, 98],
    details: {
        major: "Physics",
        year: "Senior"
    }
});

// Accessing nested data
console.log(`${professors[0].name}'s first grade:`, professors[0].grades[0]); // Output: Ajith first grade: 85
console.log(`${professors[1].name}'s major:`, professors[1].details.major); // Output: Praguspathi major: Mathematics
console.log("Total Professors:", professors.length); // Output: 3
