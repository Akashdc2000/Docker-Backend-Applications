CREATE TABLE employees
(
    empid SERIAL,
    ename text,
    email text,
    gender text,
    CONSTRAINT employees_pkey PRIMARY KEY (empid)
);

INSERT INTO employees(ename, email,gender) VALUES
  ('Akash','akash1@gmail.com','male'),
  ('ram', 'ram@gmail.com','male'),
  ('riya', 'riya@gmail.com','female');
