show databases;

CREATE DATABASE IF NOT EXISTS WAREHOUSE;
USE WAREHOUSE;

-- cities table
CREATE TABLE IF NOT EXISTS CITIES(
    CITY_ID INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    CITY CHAR(20) NOT NULL,
    STATE CHAR(20) NOT NULL
);

-- Warehouses table
CREATE TABLE IF NOT EXISTS WAREHOUSES(
    WAREHOUSE_ID INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    WAREHOUSE_NAME CHAR(30) NOT NULL,
    LOCATION CHAR(20) NOT NULL,
    EXTRA_CONTEXT JSON,
    CITY_ID INTEGER NOT NULL,
    FOREIGN KEY (CITY_ID) REFERENCES CITIES(CITY_ID)
);

-- STORES table
CREATE TABLE IF NOT EXISTS STORES(
    STORE_ID INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    STORE_NAME CHAR(20) NOT NULL,
    LOCATION_CITY CHAR(20) NOT NULL,
    WAREHOUSE_ID INTEGER NOT NULL,
    FOREIGN KEY (WAREHOUSE_ID) REFERENCES WAREHOUSES(WAREHOUSE_ID)
);

-- CUSTOMERS table
CREATE TABLE IF NOT EXISTS CUSTOMERS(
    CUSTOMER_ID INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    CUSTOMER_NAME CHAR(50) NOT NULL,
    ADDR VARCHAR(50) NOT NULL,
    CUSTOMER_CITY CHAR(20) NOT NULL
);

-- ORDERS table
CREATE TABLE IF NOT EXISTS ORDERS(
    ORDER_ID INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ORDER_DATE DATETIME NOT NULL,
    CUSTOMER_ID INTEGER NOT NULL,
    FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMERS(CUSTOMER_ID)
);

-- ITEMS table
CREATE TABLE IF NOT EXISTS ITEMS(
    ITEM_ID INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    DESCRIPTION TEXT NOT NULL,
    WEIGHT DECIMAL(5, 2) NOT NULL,
    COST DECIMAL(5, 2) NOT NULL
);

-- ITEMS_ORDERS table
CREATE TABLE IF NOT EXISTS ITEMS_ORDERS(
    ITEM_ORDER_ID INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ORDERED_QUANTITY INTEGER NOT NULL,
    ORDER_ID INTEGER NOT NULL,
    ITEM_ID INTEGER NOT NULL,
    FOREIGN KEY (ORDER_ID) REFERENCES ORDERS(ORDER_ID),
    FOREIGN KEY (ITEM_ID) REFERENCES ITEMS(ITEM_ID)
);

-- STORES_ITEMS table
CREATE TABLE IF NOT EXISTS STORES_ITEMS(
    STORE_ITEM_ID INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    QUANTITY INTEGER NOT NULL,
    STORE_ID INTEGER NOT NULL,
    ITEM_ID INTEGER NOT NULL,
    FOREIGN KEY (STORE_ID) REFERENCES STORES(STORE_ID),
    FOREIGN KEY (ITEM_ID) REFERENCES ITEMS(ITEM_ID)
);


