DROP DATABASE burgers_dB;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    ID INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT_NULL,
    PRIMARY KEY(id)
);
