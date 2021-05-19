-- creating the database
CREATE database crudnodejsmysql;

-- using the database
use crudnodejsmysql;

-- creating a table
CREATE TABLE customer;{
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VRACHAR(50) NOT NULL,
    adress VARCHAR(100) NOT NULL,
    phone VARCCHAR(15)
};

-- to show all tables
SHOW TABLES;

-- to describe the tables
describe customer;