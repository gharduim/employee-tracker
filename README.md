# Employee Tracker System

![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blue)   [License - MIT](https://opensource.org/licenses/MIT/)

## Description

This application is called Employee Tracker System, it can be used to create, read, update data from the database. This is a Node.js application that connects to a mySQL database.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

### Demonstration

View a complete video demonstration of the application: [Employee Tracker system Demo](https://drive.google.com/file/d/1EutHrWZG-vKokUrzzBT4FiA4b27c28Vb/view?usp=sharing)

![Employee-screen](./assets/video/employee_tracker.gif "Employee Tracker Table")

## Table of Contents

* [Description](#description)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)

## Technologies

* [Node.js](https://nodejs.org/)
* [Inquirer.js](https://www.npmjs.com/package/inquirer)
* [MySQL](https://www.mysql.com/)

## Installation

To install dependencies, run the following:

```
npm init -y
```
```
npm install 
```

## Usage

After installing the dependencies, run the application with

```
node app.js
```


## Questions

Questions about this repository? Please contact me at [gharduim@gmail.com](mailto:gharduim@gmail.com). View more of my work in GitHub at [Gustavo Harduim](https://github.com/gharduim) 
