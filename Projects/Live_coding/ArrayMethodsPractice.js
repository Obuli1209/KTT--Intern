const employees = [
  { id: 1, name: "Employee1", salary: 31000, department: "HR", address: { city: "Delhi", pin: 600001 } },,
  { id: 2, name: "Employee2", salary: 32000, department: "Finance", address: { city: "Mumbai", pin: 600002 } },,
  { id: 3, name: "Employee3", salary: 33000, department: "Sales", address: { city: "Bangalore", pin: 600003 } },,
  { id: 4, name: "Employee4", salary: 34000, department: "Marketing", address: { city: "Kolkata", pin: 600004 } },,
  { id: 5, name: "Employee5", salary: 35000, department: "IT", address: { city: "Chennai", pin: 600005 } },,
  { id: 6, name: "Employee6", salary: 36000, department: "HR", address: { city: "Delhi", pin: 600006 } },,
  { id: 7, name: "Employee7", salary: 37000, department: "Finance", address: { city: "Mumbai", pin: 600007 } },,
  { id: 8, name: "Employee8", salary: 38000, department: "Sales", address: { city: "Bangalore", pin: 600008 } },,
  { id: 9, name: "Employee9", salary: 39000, department: "Marketing", address: { city: "Kolkata", pin: 600009 } },,
  { id: 10, name: "Employee10", salary: 40000, department: "IT", address: { city: "Chennai", pin: 600010 } },,
  { id: 11, name: "Employee11", salary: 41000, department: "HR", address: { city: "Delhi", pin: 600011 } },,
  { id: 12, name: "Employee12", salary: 42000, department: "Finance", address: { city: "Mumbai", pin: 600012 } },,
  { id: 13, name: "Employee13", salary: 43000, department: "Sales", address: { city: "Bangalore", pin: 600013 } },,
  { id: 14, name: "Employee14", salary: 44000, department: "Marketing", address: { city: "Kolkata", pin: 600014 } },,
  { id: 15, name: "Employee15", salary: 45000, department: "IT", address: { city: "Chennai", pin: 600015 } },,
  { id: 16, name: "Employee16", salary: 46000, department: "HR", address: { city: "Delhi", pin: 600016 } },,
  { id: 17, name: "Employee17", salary: 47000, department: "Finance", address: { city: "Mumbai", pin: 600017 } },,
  { id: 18, name: "Employee18", salary: 48000, department: "Sales", address: { city: "Bangalore", pin: 600018 } },,
  { id: 19, name: "Employee19", salary: 49000, department: "Marketing", address: { city: "Kolkata", pin: 600019 } },,
  { id: 20, name: "Employee20", salary: 50000, department: "IT", address: { city: "Chennai", pin: 600020 } },,
  { id: 21, name: "Employee21", salary: 51000, department: "HR", address: { city: "Delhi", pin: 600021 } },,
  { id: 22, name: "Employee22", salary: 52000, department: "Finance", address: { city: "Mumbai", pin: 600022 } },,
  { id: 23, name: "Employee23", salary: 53000, department: "Sales", address: { city: "Bangalore", pin: 600023 } },,
  { id: 24, name: "Employee24", salary: 54000, department: "Marketing", address: { city: "Kolkata", pin: 600024 } },,
  { id: 25, name: "Employee25", salary: 55000, department: "IT", address: { city: "Chennai", pin: 600025 } },,
  { id: 26, name: "Employee26", salary: 56000, department: "HR", address: { city: "Delhi", pin: 600026 } },,
  { id: 27, name: "Employee27", salary: 57000, department: "Finance", address: { city: "Mumbai", pin: 600027 } },,
  { id: 28, name: "Employee28", salary: 58000, department: "Sales", address: { city: "Bangalore", pin: 600028 } },,
  { id: 29, name: "Employee29", salary: 59000, department: "Marketing", address: { city: "Kolkata", pin: 600029 } },,
  { id: 30, name: "Employee30", salary: 60000, department: "IT", address: { city: "Chennai", pin: 600030 } },,
  { id: 31, name: "Employee31", salary: 61000, department: "HR", address: { city: "Delhi", pin: 600031 } },,
  { id: 32, name: "Employee32", salary: 62000, department: "Finance", address: { city: "Mumbai", pin: 600032 } },,
  { id: 33, name: "Employee33", salary: 63000, department: "Sales", address: { city: "Bangalore", pin: 600033 } },,
  { id: 34, name: "Employee34", salary: 64000, department: "Marketing", address: { city: "Kolkata", pin: 600034 } },,
  { id: 35, name: "Employee35", salary: 65000, department: "IT", address: { city: "Chennai", pin: 600035 } },,
  { id: 36, name: "Employee36", salary: 66000, department: "HR", address: { city: "Delhi", pin: 600036 } },,
  { id: 37, name: "Employee37", salary: 67000, department: "Finance", address: { city: "Mumbai", pin: 600037 } },,
  { id: 38, name: "Employee38", salary: 68000, department: "Sales", address: { city: "Bangalore", pin: 600038 } },,
  { id: 39, name: "Employee39", salary: 69000, department: "Marketing", address: { city: "Kolkata", pin: 600039 } },,
  { id: 40, name: "Employee40", salary: 70000, department: "IT", address: { city: "Chennai", pin: 600040 } },,
  { id: 41, name: "Employee41", salary: 71000, department: "HR", address: { city: "Delhi", pin: 600041 } },,
  { id: 42, name: "Employee42", salary: 72000, department: "Finance", address: { city: "Mumbai", pin: 600042 } },,
  { id: 43, name: "Employee43", salary: 73000, department: "Sales", address: { city: "Bangalore", pin: 600043 } },,
  { id: 44, name: "Employee44", salary: 74000, department: "Marketing", address: { city: "Kolkata", pin: 600044 } },,
  { id: 45, name: "Employee45", salary: 75000, department: "IT", address: { city: "Chennai", pin: 600045 } },,
  { id: 46, name: "Employee46", salary: 76000, department: "HR", address: { city: "Delhi", pin: 600046 } },,
  { id: 47, name: "Employee47", salary: 77000, department: "Finance", address: { city: "Mumbai", pin: 600047 } },,
  { id: 48, name: "Employee48", salary: 78000, department: "Sales", address: { city: "Bangalore", pin: 600048 } },,
  { id: 49, name: "Employee49", salary: 79000, department: "Marketing", address: { city: "Kolkata", pin: 600049 } },,
  { id: 50, name: "Employee50", salary: 30000, department: "IT", address: { city: "Chennai", pin: 600050 } },,
  { id: 51, name: "Employee51", salary: 31000, department: "HR", address: { city: "Delhi", pin: 600051 } },,
  { id: 52, name: "Employee52", salary: 32000, department: "Finance", address: { city: "Mumbai", pin: 600052 } },,
  { id: 53, name: "Employee53", salary: 33000, department: "Sales", address: { city: "Bangalore", pin: 600053 } },,
  { id: 54, name: "Employee54", salary: 34000, department: "Marketing", address: { city: "Kolkata", pin: 600054 } },,
  { id: 55, name: "Employee55", salary: 35000, department: "IT", address: { city: "Chennai", pin: 600055 } },,
  { id: 56, name: "Employee56", salary: 36000, department: "HR", address: { city: "Delhi", pin: 600056 } },,
  { id: 57, name: "Employee57", salary: 37000, department: "Finance", address: { city: "Mumbai", pin: 600057 } },,
  { id: 58, name: "Employee58", salary: 38000, department: "Sales", address: { city: "Bangalore", pin: 600058 } },,
  { id: 59, name: "Employee59", salary: 39000, department: "Marketing", address: { city: "Kolkata", pin: 600059 } },,
  { id: 60, name: "Employee60", salary: 40000, department: "IT", address: { city: "Chennai", pin: 600060 } },,
  { id: 61, name: "Employee61", salary: 41000, department: "HR", address: { city: "Delhi", pin: 600061 } },,
  { id: 62, name: "Employee62", salary: 42000, department: "Finance", address: { city: "Mumbai", pin: 600062 } },,
  { id: 63, name: "Employee63", salary: 43000, department: "Sales", address: { city: "Bangalore", pin: 600063 } },,
  { id: 64, name: "Employee64", salary: 44000, department: "Marketing", address: { city: "Kolkata", pin: 600064 } },,
  { id: 65, name: "Employee65", salary: 45000, department: "IT", address: { city: "Chennai", pin: 600065 } },,
  { id: 66, name: "Employee66", salary: 46000, department: "HR", address: { city: "Delhi", pin: 600066 } },,
  { id: 67, name: "Employee67", salary: 47000, department: "Finance", address: { city: "Mumbai", pin: 600067 } },,
  { id: 68, name: "Employee68", salary: 48000, department: "Sales", address: { city: "Bangalore", pin: 600068 } },,
  { id: 69, name: "Employee69", salary: 49000, department: "Marketing", address: { city: "Kolkata", pin: 600069 } },,
  { id: 70, name: "Employee70", salary: 50000, department: "IT", address: { city: "Chennai", pin: 600070 } },,
  { id: 71, name: "Employee71", salary: 51000, department: "HR", address: { city: "Delhi", pin: 600071 } },,
  { id: 72, name: "Employee72", salary: 52000, department: "Finance", address: { city: "Mumbai", pin: 600072 } },,
  { id: 73, name: "Employee73", salary: 53000, department: "Sales", address: { city: "Bangalore", pin: 600073 } },,
  { id: 74, name: "Employee74", salary: 54000, department: "Marketing", address: { city: "Kolkata", pin: 600074 } },,
  { id: 75, name: "Employee75", salary: 55000, department: "IT", address: { city: "Chennai", pin: 600075 } },,
  { id: 76, name: "Employee76", salary: 56000, department: "HR", address: { city: "Delhi", pin: 600076 } },,
  { id: 77, name: "Employee77", salary: 57000, department: "Finance", address: { city: "Mumbai", pin: 600077 } },,
  { id: 78, name: "Employee78", salary: 58000, department: "Sales", address: { city: "Bangalore", pin: 600078 } },,
  { id: 79, name: "Employee79", salary: 59000, department: "Marketing", address: { city: "Kolkata", pin: 600079 } },,
  { id: 80, name: "Employee80", salary: 60000, department: "IT", address: { city: "Chennai", pin: 600080 } },,
  { id: 81, name: "Employee81", salary: 61000, department: "HR", address: { city: "Delhi", pin: 600081 } },,
  { id: 82, name: "Employee82", salary: 62000, department: "Finance", address: { city: "Mumbai", pin: 600082 } },,
  { id: 83, name: "Employee83", salary: 63000, department: "Sales", address: { city: "Bangalore", pin: 600083 } },,
  { id: 84, name: "Employee84", salary: 64000, department: "Marketing", address: { city: "Kolkata", pin: 600084 } },,
  { id: 85, name: "Employee85", salary: 65000, department: "IT", address: { city: "Chennai", pin: 600085 } },,
  { id: 86, name: "Employee86", salary: 66000, department: "HR", address: { city: "Delhi", pin: 600086 } },,
  { id: 87, name: "Employee87", salary: 67000, department: "Finance", address: { city: "Mumbai", pin: 600087 } },,
  { id: 88, name: "Employee88", salary: 68000, department: "Sales", address: { city: "Bangalore", pin: 600088 } },,
  { id: 89, name: "Employee89", salary: 69000, department: "Marketing", address: { city: "Kolkata", pin: 600089 } },,
  { id: 90, name: "Employee90", salary: 70000, department: "IT", address: { city: "Chennai", pin: 600090 } },,
  { id: 91, name: "Employee91", salary: 71000, department: "HR", address: { city: "Delhi", pin: 600091 } },,
  { id: 92, name: "Employee92", salary: 72000, department: "Finance", address: { city: "Mumbai", pin: 600092 } },,
  { id: 93, name: "Employee93", salary: 73000, department: "Sales", address: { city: "Bangalore", pin: 600093 } },,
  { id: 94, name: "Employee94", salary: 74000, department: "Marketing", address: { city: "Kolkata", pin: 600094 } },,
  { id: 95, name: "Employee95", salary: 75000, department: "IT", address: { city: "Chennai", pin: 600095 } },,
  { id: 96, name: "Employee96", salary: 76000, department: "HR", address: { city: "Delhi", pin: 600096 } },,
  { id: 97, name: "Employee97", salary: 77000, department: "Finance", address: { city: "Mumbai", pin: 600097 } },,
  { id: 98, name: "Employee98", salary: 78000, department: "Sales", address: { city: "Bangalore", pin: 600098 } },,
  { id: 99, name: "Employee99", salary: 79000, department: "Marketing", address: { city: "Kolkata", pin: 600099 } },,
  { id: 100, name: "Employee100", salary: 30000, department: "IT", address: { city: "Chennai", pin: 600100 } },
];

// Names of all employees
const names1 = employees.map(emp => emp.name);
console.log('Names:', names1);

// // Print all employee details using forEach
// employees.forEach(emp => console.log(`${emp.name} earns ₹${emp.salary}`));

// // List of employees from IT department
// const itEmployees1 = employees.filter(emp => emp.department === 'IT');
// console.log('IT Employees:', itEmployees1);

// // Total salary of all employees
// const totalSalary1 = employees.reduce((sum, emp) => sum + emp.salary, 0);
// console.log('Total Salary:', totalSalary1);

// // // First employee from Sales
// // const salesEmp1 = employees.find(emp => emp.department === 'Sales');
// // console.log('First Sales Employee:', salesEmp1);

// // Employees sorted by salary
// const sortedEmps1 = [...employees].sort((a, b) => b.salary - a.salary);
// console.log('Sorted Employees:', sortedEmps1);

// // Display pin codes
// employees.forEach(emp => console.log(`${emp.name} lives at PIN ${emp.address.pin}`));
