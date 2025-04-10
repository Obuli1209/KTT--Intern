// Array of Objects: Employees
const employees = [
  { id: 1, name: "Alice", salary: 55000, department: "IT", address: { city: "Chennai", pin: 600001 } },
  { id: 2, name: "Bob", salary: 42000, department: "HR", address: { city: "Delhi", pin: 110001 } },
  { id: 3, name: "Charlie", salary: 63000, department: "Finance", address: { city: "Mumbai", pin: 400001 } },
  { id: 4, name: "Diana", salary: 48000, department: "IT", address: { city: "Bangalore", pin: 560001 } },
  { id: 5, name: "Eve", salary: 30000, department: "Sales", address: { city: "Kolkata", pin: 700001 } }
];

// Object of Arrays: Departments
const departments = {
  IT: ["Alice", "Diana"],
  HR: ["Bob"],
  Finance: ["Charlie"],
  Sales: ["Eve"]
};

// map - Extract names of employees
const names = employees.map(emp => emp.name);
console.log("Employee Names:", names);

// forEach - Log all employee details
employees.forEach(emp => {
  console.log(`${emp.name} from ${emp.department} earns ₹${emp.salary}`);
});

// for...of - Print employees with nested city info
for (const emp of employees) {
  console.log(`${emp.name} lives in ${emp.address.city} (PIN: ${emp.address.pin})`);
}

// filter - Employees earning more than 45,000
const highEarners = employees.filter(emp => emp.salary > 45000);
console.log("High Earners:", highEarners);

// find - First employee from IT department
const firstIT = employees.find(emp => emp.department === "IT");
console.log("First IT Employee:", firstIT);

// sort - Sort employees by salary (descending)
const sortedBySalary = [...employees].sort((a, b) => b.salary - a.salary);
console.log("Sorted by Salary:", sortedBySalary);

// reduce - Calculate total payroll
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log("Total Payroll:", totalSalary);

// Nested object access - Print all employee PIN codes
employees.forEach(emp => {
  console.log(`${emp.name}'s PIN code is ${emp.address.pin}`);
});
