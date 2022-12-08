-- insert queries for creating tables
insert into CITIES (CITY, STATE) values ('New York', 'NY');
insert into CITIES (CITY, STATE) values ('Los Angeles', 'CA');
insert into CITIES (CITY, STATE) values ('Chicago', 'IL');
insert into CITIES (CITY, STATE) values ('Houston', 'TX');
insert into CITIES (CITY, STATE) values ('Philadelphia', 'PA');

insert into WAREHOUSES (WAREHOUSE_NAME, LOCATION, EXTRA_CONTEXT, CITY_ID) values ('BigBasket', 'New York', '{"capacity": 1000}', 1);
insert into WAREHOUSES (WAREHOUSE_NAME, LOCATION, EXTRA_CONTEXT, CITY_ID) values ('Dukan', 'Chicago', '{"capacity": 2000}', 3);
insert into WAREHOUSES (WAREHOUSE_NAME, LOCATION, EXTRA_CONTEXT, CITY_ID) values ('AnyStore', 'Philadelphia', '{"capacity": 3000}', 5);
insert into WAREHOUSES (WAREHOUSE_NAME, LOCATION, EXTRA_CONTEXT, CITY_ID) values ('Tesco', 'Washington DC', '{"capacity": 4000}', 6);

insert into STORES (STORE_NAME, LOCATION_CITY, WAREHOUSE_ID) values ('BigBasket', 'Pune', 101);
insert into STORES (STORE_NAME, LOCATION_CITY, WAREHOUSE_ID) values ('Dukan', 'Pune', 102);
insert into STORES (STORE_NAME, LOCATION_CITY, WAREHOUSE_ID) values ('AnyStore', 'Philadelphia', 103);
insert into STORES (STORE_NAME, LOCATION_CITY, WAREHOUSE_ID) values ('Tesco', 'Washington DC', 104);

insert into CUSTOMERS (CUSTOMER_NAME, ADDR, CUSTOMER_CITY) values ('Mr. Patil', '123 Main St', 'Pune');
insert into CUSTOMERS (CUSTOMER_NAME, ADDR, CUSTOMER_CITY) values ('Will Smith', '195 Main St', 'Washington DC');
insert into CUSTOMERS (CUSTOMER_NAME, ADDR, CUSTOMER_CITY) values ('Henry Johnson', '323 Main St', 'New York');
insert into CUSTOMERS (CUSTOMER_NAME, ADDR, CUSTOMER_CITY) values ('Jane Hakwings', '823 Main St', 'Chicago');
insert into CUSTOMERS (CUSTOMER_NAME, ADDR, CUSTOMER_CITY) values ('William Dove', '177 Main St', 'St Louis');

insert into ORDERS (ORDER_DATE, CUSTOMER_ID) values ('2020-01-01 00:00:00', 1);
insert into ORDERS (ORDER_DATE, CUSTOMER_ID) values ('2020-01-02 00:00:00', 2);
insert into ORDERS (ORDER_DATE, CUSTOMER_ID) values ('2020-01-03 00:00:00', 3);

insert into ITEMS (DESCRIPTION, WEIGHT, COST) values ('Item 1', 1.00, 10.00);
insert into ITEMS (DESCRIPTION, WEIGHT, COST) values ('Item 2', 2.00, 20.00);
insert into ITEMS (DESCRIPTION, WEIGHT, COST) values ('Item 3', 3.00, 30.00);
insert into ITEMS (DESCRIPTION, WEIGHT, COST) values ('Item 4', 4.00, 40.00);

insert into ITEMS_ORDERS (ORDERED_QUANTITY, ORDER_ID, ITEM_ID) values (1, 1, 1);
insert into ITEMS_ORDERS (ORDERED_QUANTITY, ORDER_ID, ITEM_ID) values (2, 1, 2);
insert into ITEMS_ORDERS (ORDERED_QUANTITY, ORDER_ID, ITEM_ID) values (3, 2, 3);
insert into ITEMS_ORDERS (ORDERED_QUANTITY, ORDER_ID, ITEM_ID) values (4, 2, 4);

insert into STORES_ITEMS (QUANTITY, STORE_ID, ITEM_ID) values (10, 1, 1);
insert into STORES_ITEMS (QUANTITY, STORE_ID, ITEM_ID) values (20, 1, 2);
insert into STORES_ITEMS (QUANTITY, STORE_ID, ITEM_ID) values (30, 2, 3);
insert into STORES_ITEMS (QUANTITY, STORE_ID, ITEM_ID) values (40, 2, 4);





-- Find the item that has minimum weight.
SELECT * FROM ITEMS WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);

-- Find the different warehouses in “Pune”.
SELECT * FROM WAREHOUSES WHERE CITY_ID = (SELECT CITY_ID FROM CITIES WHERE CITY = "Pune");

-- Find the details of items ordered by a customer “Mr. Patil”.
SELECT * FROM ITEMS I INNER JOIN ITEMS_ORDERS I_O ON I_O.itemId = I.ITEM_ID INNER JOIN ORDERS O ON O.ORDER_ID=I_O.ORDER_ID INNER JOIN CUSTOMERS C ON C.CUSTOMER_ID=O.CUSTOMER_ID WHERE C.CUSTOMER_NAME='Mr. Patil';

-- Find a Warehouse which has maximum stores.
SELECT * FROM WAREHOUSES WHERE WAREHOUSE_ID = (
	SELECT WAREHOUSE_ID FROM STORES GROUP BY WAREHOUSE_ID ORDER BY COUNT(*) DESC LIMIT 1
) LIMIT 1;

-- Find an item which is ordered for a minimum number of times.
SELECT * FROM ITEMS WHERE ITEM_ID = (
    SELECT ITEM_ID FROM ITEMS_ORDERS GROUP BY ITEM_ID ORDER BY COUNT(*) LIMIT 1
) LIMIT 1;

-- Find the detailed orders given by each customer.
SELECT C.CUSTOMER_NAME, I.DESCRIPTION, I.WEIGHT, I.COST, O.ORDER_DATE, C.CUSTOMER_CITY FROM ORDERS O
INNER JOIN CUSTOMERS C ON O.CUSTOMER_ID = C.CUSTOMER_ID
INNER JOIN ITEMS_ORDERS IOS ON IOS.ORDER_ID = O.ORDER_ID
INNER JOIN ITEMS I ON I.ITEM_ID = IOS.ITEM_ID;
