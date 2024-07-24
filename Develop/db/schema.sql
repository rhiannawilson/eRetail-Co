-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

\c ecommerce_db;

CREATE TABLE Category (
id SERIAL PRIMARY KEY, 
category_name VARCHAR(50) NOT NULL
);

CREATE TABLE Product (
id SERIAL PRIMARY KEY,
product_name VARCHAR(50) NOT NULL,
price DECIMAL NOT NULL,
stock INTEGER DEFAULT 10 CHECK (stock >= 0),
category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE Tag (
id SERIAL PRIMARY KEY, 
tag_name VARCHAR(50)
    FOREIGN KEY (tag_name) REFERENCES product(id)
);

CREATE TABLE ProductTag (
id SERIAL PRIMARY KEY, 
product_id INTEGER,
tag_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (tag_id) REFERENCES tag(id)
);
