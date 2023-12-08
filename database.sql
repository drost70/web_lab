CREATE DATABASE web_laba4;

USE web_laba4;

CREATE TABLE cameras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(255) NOT NULL,
    resolution TEXT NOT NULL,
    zoom DECIMAL(10, 2) NOT NULL,
    memoryCardType VARCHAR(50) NOT NULL,
    photosCount INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);
