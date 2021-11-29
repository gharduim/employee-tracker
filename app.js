const inquirer = require('inquirer');
const connection = require('./config/connection.js');
const questions = require('./utils/questions.js');
const table = require('console.table');
const logo = require('asciiart-logo');

displayLogo()
start();

function displayLogo() {
    console.log(
        logo({
            name: 'Employee Tracker System',
            lineChars: 10,
            padding: 2,
            margin: 3,
            borderColor: 'grey',
            logoColor: 'white',
            textColor: 'white',
        })
            .render()
    );
}

async function start() {
    const userChoice = await inquirer.prompt(questions.initialQuestion);
    switch (userChoice.initial) {
        case "Add an employee":
            addEmployee();
            break;
        case "Add a department":
            addDepartment();
            break;
        case "Add a role":
            addNewRole();
            break;
        case "View All Departments":
            printDepartments();
            break;
        case "View All Employees":
            printEmployees();
            break;
        case "View All Roles":
            printRoles();
            break;
        case "Update Employee's Role":
            updateRole();
            break;
        case "Remove Roles":
            rmRole();
            break;
        case "Exit":
            connection.end();
            break;
        default:
            connection.end();
    }

}

async function addEmployee() {
    let qry = "SELECT id as value, CONCAT(first_name, ' ', last_name) as name FROM employee"
    connection.query(qry, async (err, employees) => {
        qry = "SELECT id as value, title as name FROM role"
        connection.query(qry, async (err, role) => {
            // get the name, category, starting bid from user
            const newEmp = await inquirer.prompt(questions.addEmployee(role, employees));
            qry = "INSERT INTO employee SET ?"
            connection.query(qry, newEmp, function (err) {
                if (err) throw err;
                console.log("New employee was added successfully!");
                // re-prompt the user for if they want to bid or post
                start();
            });
        })
    })
}

async function addDepartment() {
    const departmentDetails = await inquirer.prompt(questions.addDepartmentQuestions)
    connection.query("INSERT INTO department SET ?", {
        department_name: departmentDetails.department_name
    },
        function (err) {
            if (err) throw err;
            console.log("New department was added successfully!");
            // re-prompt the user for if they want to bid or post
            start();
        }
    );
}

async function addNewRole() {
    let qry = "SELECT id as value, department_name as name FROM department"
    connection.query(qry, async (err, department) => {
        const roleDetails = await inquirer.prompt(questions.addRole(department))
        connection.query("INSERT INTO role SET ?", {
            title: roleDetails.titleRole,
            salary: roleDetails.salary,
            department_id: roleDetails.department_id
        },
            function (err) {
                if (err) throw err;
                console.log("New department was added successfully!");
                // re-prompt the user for if they want to bid or post
                start();
            }
        );
    })
}

async function updateRole() {
            // query for the category choices
            connection.query("SELECT employee.last_name as name FROM employee LEFT JOIN role ON employee.role_id = role.id", async (err, employee) => {
                connection.query("SELECT role.id as value, role.title as name FROM employee LEFT JOIN role ON employee.role_id = role.id", async (err, role) => {
                    const updateDetails = await inquirer.prompt(questions.updateRole(employee, role))
                    connection.query("UPDATE employee SET ? WHERE ?",
                    [{
                        role_id: updateDetails.newrole,
                    },
                    {
                        last_name: updateDetails.worker,
                    },
                    ],
                    function (err, res) {
                        if (err) throw err;
                        console.log("Role updated with sucess!");
                        // Call deleteProduct AFTER the UPDATE completes
                        start();
                    }
                )});
            })
        }

function printDepartments() {
            connection.query("SELECT * FROM department", function (err, res) {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.table(res);
                start();
            });
        }

function printEmployees() {
            connection.query("Select employee.id, CONCAT(employee.first_name, ' ', employee.last_name) as name, role.title, role.salary, department.department_name as department, CONCAT(employee_m.first_name, ' ', employee_m.last_name) as managerName from employee join role on employee.role_id = role.id join department on role.department_id = department.id Left join employee as employee_m on employee.manager_id = employee_m.id", function (err, res) {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.table(res);
                start();
            });
        }

function printRoles() {
            connection.query("SELECT role.id, role.title, role.salary, department.department_name AS Department FROM employee_tracker_db.role JOIN employee_tracker_db.department ON department.id = role.department_id", function (err, res) {
                //connection.query("SELECT * FROM role", function (err, res) {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.table(res);
                start();
            });
        }


async function rmRole() {
    connection.query("SELECT * FROM role", async (err, role) => {
        const {
            roleName
        } = await inquirer.prompt([{
            type: "list",
            message: "Select a role to delete:",
            name: "roleName",
            choices: () => {
                return role.map((role) => role.title);
            }
        }]);
        console.log(roleName);
        connection.query(`DELETE FROM role WHERE ?`, {
                title: roleName
            },
            function (err, res) {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.log("Role removed with sucess");
                start();
            });
    })
};
