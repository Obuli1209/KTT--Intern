use transactions;
CREATE TABLE accounts (
    account_id INT PRIMARY KEY AUTO_INCREMENT,
    account_name VARCHAR(100),
    balance DECIMAL(10, 2)
);
select * from accounts;
show tables;
INSERT INTO accounts (account_name, balance) VALUES 
('Obuli', 5000.00),
('Maadhini', 3000.00),
('Hari', 7000.00);

BEGIN;

UPDATE accounts SET balance = balance - 500 WHERE account_id = 1;  
SAVEPOINT point1;

UPDATE accounts SET balance = balance + 500 WHERE account_id = 2;  

-- ROLLBACK TO point1;

COMMIT;

