CCREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE products
(
	item_id  INT NOT NULL,
    product_name VARCHAR(100) NULL, 
    department_name VARCHAR(100) NULL, 
    price decimal (10,2) NULL,
    stock_quantity INT NULL,
	PRIMARY KEY  (item_id)                                  
);                            


SELECT * FROM products;