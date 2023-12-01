CREATE DATABASE web_node_db;

USE web_node_db;

CREATE TABLE cameras (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    resolution VARCHAR(20) NOT NULL,
    type VARCHAR(50) NOT NULL
);

CREATE TABLE cameraTypes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(25) NOT NULL,
    description VARCHAR(150) NOT NULL
);

INSERT INTO cameraTypes (title, description)
VALUES
    ('DSLR Cameras', 'Digital single-lens reflex cameras for high-quality photography.'),
    ('Mirrorless Cameras', 'Compact and lightweight cameras without the mirror and optical viewfinder.'),
    ('Action Cameras', 'Small, durable, and designed for capturing action-packed activities.'),
    ('360-Degree Cameras', 'Capture immersive 360-degree photos and videos.'),
    ('Point and Shoot Cameras', 'Simple and easy-to-use cameras for everyday photography.'),
    ('Security Cameras', 'Used for surveillance and security purposes.'),
    ('Instant Cameras', 'Produce instant prints for quick and fun photography.');
