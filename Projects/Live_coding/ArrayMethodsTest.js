const employees = [
    { name: "John", salary: 50000 },
    { name: "Alice", salary: 70000 },
    { name: "Bob", salary: 30000 },
    { name: "Diana", salary: 90000 },
    { name: "Eve", salary: 40000 }
  ];
  
  // 1. map – get only names
  const names = employees.map(emp => emp.name);
  console.log("Names:", names);
  
  // 2. forEach – print name and salary
  employees.forEach(emp => console.log(`${emp.name}: ₹${emp.salary}`));
  
  // 3. for...of – same as above
  for (const emp of employees) console.log(`Employee: ${emp.name}, Salary: ₹${emp.salary}`);
  
  // 4. filter – employees earning > ₹50,000
  const rich = employees.filter(emp => emp.salary > 50000);
  console.log("High Earners:", rich);
  
  // 5. find – find first employee earning < ₹40,000
  const lowEarner = employees.find(emp => emp.salary < 40000);
  console.log("Low Earner:", lowEarner);
  
  // 6. sort – sort by salary descending
  const sorted = [...employees].sort((a, b) => b.salary - a.salary);
  console.log("Sorted Salaries:", sorted);
  
  // 7. reduce – total salary
  const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
  console.log("Total Salary:", totalSalary);
  