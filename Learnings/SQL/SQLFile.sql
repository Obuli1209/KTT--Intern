create database Ecommercedb;
use Ecommercedb;
CREATE TABLE customers (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    useremail VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(20) NOT NULL,
    phoneno VARCHAR(15),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO customers (username, useremail, password, phoneno) VALUES
("Obuli", "Obuli12@gmail.com", "obuli@12", "9374658210"),
("Maadhini", "maadhini01@gmail.com", "maad@123", "9876543210"),
("Karthik", "karthik22@gmail.com", "kart@321", "9123456780"),
("Swetha", "swetha10@gmail.com", "sweth@456", "9988776655"),
("Raj", "raj789@gmail.com", "raj@789", "9001122334"),
("Priya", "priya44@gmail.com", "priya@999", "9112233445"),
("Sathish", "sathish33@gmail.com", "sath@2024", "8899776655"),
("Divya", "divya11@gmail.com", "divya@123", "9345678123"),
("Hari", "hari007@gmail.com", "hari@007", "9004455667"),
("Anu", "anu23@gmail.com", "anu@2025", "9786453120");


rename tables customers to users;

select * from users;

select count(*) as total_users
from users;

update users set username = "Hariharan" where user_id = 9;


insert into users(username,useremail,password,phoneno) values
("Sathish","sathish123@gmail.com","sathish2025","9876543210");

select * from users
order by username;

alter table users add city varchar(50);
update users set city = "Salem" where user_id = 1;
update users set city = "Salem" where user_id = 2;
update users set city = "Karur" where user_id = 3;
update users set city = "Namakkal" where user_id = 4;
update users set city = "Erode" where user_id = 5;
update users set city = "Thiruchi" where user_id = 6;
update users set city = "coimbatore" where user_id = 7;
update users set city = "Bangalore" where user_id = 8;
update users set city = "Chennai" where user_id = 9;
update users set city = "Thiruchi" where user_id = 10;
update users set city = "Madurai" where user_id = 11;

update users set city = "Namakkal" where user_id = 8;
update users set city = "Madurai" where user_id = 9;
update users set city = "Salem" where user_id = 11;

select * from users
where city = "Salem" or city = "Thiruchi";

select * from users
where city = "Namakkal" and phoneno like "9%";

select * from users
where not city = "salem";

select username,useremail from users
where useremail is not null;

select * from users limit 5;

show tables;

-- customer, product and orders table join
create table customers (
  customer_id int primary key auto_increment,
  username varchar(50) not null,
  useremail varchar(100) not null unique,
  phoneno varchar(15),
  address varchar(100),
  city varchar(50),
  state varchar(50),
  pincode varchar(10),
  country varchar(50) default 'india',
  created_at datetime default current_timestamp
);

-- insert data into customers table
insert into customers (username, useremail, phoneno, address, city, state, pincode) values
('obuli', 'obuli12@gmail.com', '9374658210', 'address 1', 'salem', 'tamil nadu', '636007'),
('maadhini', 'maadhini01@gmail.com', '9876543210', 'address 2', 'erode', 'tamil nadu', '638001'),
('karthik', 'karthik22@gmail.com', '9123456780', 'address 3', 'namakkal', 'tamil nadu', '637001'),
('swetha', 'swetha10@gmail.com', '9988776655', 'address 4', 'coimbatore', 'tamil nadu', '641001'),
('raj', 'raj789@gmail.com', '9001122334', 'address 5', 'madurai', 'tamil nadu', '625001'),
('priya', 'priya44@gmail.com', '9112233445', 'address 6', 'karur', 'tamil nadu', '639001'),
('sathish', 'sathish33@gmail.com', '8899776655', 'address 7', 'dharmapuri', 'tamil nadu', '636701'),
('divya', 'divya11@gmail.com', '9345678123', 'address 8', 'thanjavur', 'tamil nadu', '613001'),
('hari', 'hari007@gmail.com', '9004455667', 'address 9', 'vellore', 'tamil nadu', '632001'),
('anu', 'anu23@gmail.com', '9786453120', 'address 10', 'trichy', 'tamil nadu', '620001');
select * from customers;
select count(*) from customers;

-- create products table
create table products (
  product_id int primary key auto_increment,
  product_name varchar(100) not null,
  price decimal(10,2) not null
);

-- insert data into products table
insert into products (product_name, price) values
('iphone 14', 79999.00),
('nike shoes', 4999.00),
('hp laptop', 54999.00),
('boat earbuds', 1999.00),
('samsung tv', 44999.00),
('wireless mouse', 599.00),
('keyboard', 999.00),
('smartwatch', 2999.00),
('headphones', 2599.00),
('backpack', 1499.00);
select * from products;
select count(*) from products;
select sum(price) from products;

-- create orders table
create table orders (
  order_id int primary key auto_increment,
  customer_id int,
  product_id int,
  quantity int,
  total_price decimal(10,2),
  order_date datetime default current_timestamp,
  foreign key (customer_id) references customers(customer_id),
  foreign key (product_id) references products(product_id)
);

-- insert data into orders table
insert into orders (customer_id, product_id, quantity, total_price) values
(1, 1, 1, 79999.00),
(2, 2, 2, 9998.00),
(3, 3, 1, 54999.00),
(4, 4, 1, 1999.00),
(5, 5, 1, 44999.00),
(6, 6, 3, 1797.00),
(7, 7, 1, 999.00),
(8, 8, 2, 5998.00),
(9, 9, 1, 2599.00),
(10, 10, 2, 2998.00);
select * from orders;
select count(*) from orders;
select sum(quantity) from orders;
select min(quantity) from orders;
select max(quantity) from orders;
select sum(total_price) from orders;

-- join query to view orders with customer and product info
select 
  o.order_id,
  c.username, 
  c.useremail,
  c.city,
  c.state,
  p.product_name,
  o.quantity,
  o.total_price,
  o.order_date
from orders o
join customers c on o.customer_id = c.customer_id
join products p on o.product_id = p.product_id;







