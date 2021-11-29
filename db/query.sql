Select
  CONCAT(employee.first_name, ' ', employee.last_name) as name
  role.title,
  role.salary,
  department.department_name as department,
  employee_m.first_name as manager_firstname,
  employee_m.last_name as manager_lastname
from
  employee
  join role on employee.role_id = role.id
  join department on role.department_id = department.id
  Left join employee as employee_m on employee.manager_id = employee_m.id;