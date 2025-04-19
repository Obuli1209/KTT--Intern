create database advancedFunctions;
use advancedFunctions;
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    city VARCHAR(50)
);
-- show tables;
select*from customers;

INSERT INTO customers (customer_id, name, email, city)
VALUES
(1, 'Maadhini', 'maadhini@example.com', 'Chennai'),
(2, 'Obuli', 'obuli@example.com', 'Mumbai'),
(3, 'Bruce Lee', 'brucele@example.com', 'Bangalore');

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    total_price DECIMAL(10, 2),
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
-- show  tables;
select * from orders;

INSERT INTO orders (order_id, customer_id, total_price, order_date)
VALUES
(101, 1, 450.00, '2025-04-10'),
(102, 2, 1500.00, '2025-04-12'),
(103, 3, 700.00, '2025-04-13'),
(104, 1, 300.00, '2025-04-14');


-- String Functions
SELECT 
    CONCAT(name, ' - ', city) AS customer_info,
    SUBSTRING(name, 1, 3) AS short_name,
    REPLACE(name, 'a', '@') AS name_with_at,
    UPPER(email) AS email_uppercase,
    LOWER(city) AS city_lowercase,
    LENGTH(name) AS name_length
FROM customers;

-- Numeric functions
SELECT 
    order_id,
    total_price,
    FLOOR(total_price) AS floor_price,
    CEILING(total_price) AS ceiling_price,
    ABS(total_price - 1000) AS abs_diff,
    MOD(total_price, 300) AS price_mod,
    ROUND(total_price, 1) AS rounded_price
FROM orders;


-- Date and time functions
SELECT 
    order_id,
    order_date,
    CURRENT_DATE AS today_date,
    YEAR(order_date) AS order_year,
    DATE_ADD(order_date, INTERVAL 5 DAY) AS five_days_later, 
    CURRENT_TIMESTAMP AS current_datetime
FROM orders;

select current_timestamp as current_datatime;

-- nullif()
select nullif(total_price,700) as result
from orders;

-- coalesce()
SELECT order_id, order_date, COALESCE(total_price, 1500) AS adjusted_price
FROM orders;

-- Creating a single column index
CREATE INDEX idx_customer_name
ON customers (name);

-- Creating a composite index on two columns
CREATE INDEX idx_customer_order
ON orders (customer_id, order_date);

-- view index
-- show index from customers;

-- Dropping an index 
DROP INDEX idx_customer_name ON customers;
