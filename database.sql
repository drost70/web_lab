CREATE DATABASE web_node_db2;

USE web_node_db2;

CREATE TABLE cameraTypes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    description VARCHAR(150) NOT NULL
);
