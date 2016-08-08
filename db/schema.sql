CREATE DATABASE task_db;
USE task_db;

CREATE TABLE tasks
(
  id int NOT NULL AUTO_INCREMENT,
  task TEXT NOT NULL,
  completed BOOLEAN,
  date TIMESTAMP,
  PRIMARY KEY (id)
);

