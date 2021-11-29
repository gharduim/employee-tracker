module.exports = {
    initialQuestion: {
        type: "list",
        message: "What would you like to do?",
        name: "initial",
        choices: ["Add an employee",
            "Add a department",
            "Add a role",
            "View All Departments",
            "View All Employees",
            "View All Roles",
            "Update Employee's Role",
            "Remove Roles",
            "Exit"
        ]
    },

    addEmployee: (role, employees) => [{
        type: "input",
        message: "What is your employee's first name?",
        name: "first_name",
    },
    {
        type: "input",
        message: "What is your employee's last name?",
        name: "last_name",
    },
    {
        type: "list",
        message: "What is your employee's roleID?",
        name: "role_id",
        choices: role
    },
    {
        type: "list",
        message: "Who is your employee's manager?",
        name: "manager_id",
        choices: employees
    }
    ],

    addDepartmentQuestions: {
        type: "input",
        message: "What is the name of your department?",
        name: "department_name",
    },

    addRole: (department) => [{
        type: "input",
        message: "What is the title of your new role?",
        name: "titleRole",
    },
    {
        type: "input",
        message: "What is the salary for this role?",
        name: "salary",
    },
    {
        type: "list",
        message: "What is the department for this role?",
        name: "department_id",
        choices: department
    }
    ],
    
    updateRole: (employee, role) => [{
        type: "list",
        message: "Choose an employee to update:",
        name: "worker",
        choices: employee
    },
    {
        type: "list",
        message: "What is this employee's new role?",
        name: "newrole",
        choices: role
    }]
};