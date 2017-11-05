CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT, 
	burger_name varchar(200) NOT NULL, 
	devoured boolean DEFAULT false, 
	DATE TIMESTAMP, 
	PRIMARY KEY (id)
);

SELECT * FROM burgers;