-- Associations - It describe the relationships of tables.
-- The associations defined the typically on foreign key.

-- Types of Association:
-- One to One
      -- Each row in table A associated with the one and only one row in table B.
      -- EX: table A(User) and table B(User profile).
      -- User Table
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    name VARCHAR(100)
);

-- Profile Table
CREATE TABLE user_profiles (
    profile_id INT PRIMARY KEY,
    user_id INT UNIQUE,
    bio TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


-- One to many
      -- One row in Table A can be associated with many rows in Table B,
      -- but each row in Table B is associated with only one row in Table A.
      -- EX: One customer can place many Orders.

-- Customers Table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100)
);

-- Orders Table
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

