
CREATE DATABASE rams_db;

USE rams_db;

CREATE TABLE assets(
    id INT AUTO_INCREMENT PRIMARY KEY,
    asset_name VARCHAR(100),
    serial_no VARCHAR(100),
    status VARCHAR(50)
);
