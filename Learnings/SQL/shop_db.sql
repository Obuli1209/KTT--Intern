create database shop_db;
use shop_db;

create table customers(
customer_id int primary key,
name varchar(100),
email varchar(100),
city varchar(50)
);
select * from customers;
show tables;

insert into customers (customer_id,name,email,city) values
(1, 'Alice', 'alice@example.com', 'Chennai'),
(2, 'Bob', 'bob@example.com', 'Delhi'),
(3, 'Charlie', 'charlie@example.com', 'Mumbai'),
(4, 'David', 'david@example.com', 'Bangalore');

create table orders(
order_id int primary key,
customer_id int,
order_date date ,
total_price decimal(10,2)
);
select * from orders;
drop table orders;
INSERT INTO orders (order_id, customer_id, order_date, total_price) VALUES
(101, 1, '2025-04-01', 999.00),
(102, 2, '2025-04-01', 799.00),
(103, 1, '2025-04-03', 1499.00),
(104, 3, '2025-04-05', 299.00);

update orders
set customer_id = 1
where order_id = 103;

alter table orders
add constraint fk_customer
foreign key(customer_id) references customers(customer_id);

-- inner join

select c.name, o.order_id, o.total_price, c.email, o.order_date, c.city
from customers c
inner join orders o on c.customer_id = o.customer_id;

-- left join
select c.customer_id,  c.name, o.order_id, o.total_price, c.email, o.order_date, c.city
from customers c
left join orders o on c.customer_id = o.customer_id

union
-- right join
select c.customer_id,  c.name, o.order_id, o.total_price, c.email, o.order_date, c.city
from customers c
right join orders o on c.customer_id = o.customer_id;

-- create view   
create view high_prices as
select order_id, total_price from orders
where total_price>500;

-- view output
select * from high_prices
order by total_price asc;

-- modify view
create or replace view high_prices as
select order_id, total_price, order_date from orders
where total_price > 900;

-- drop view
drop view high_prices