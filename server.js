const inquirer = require('inquirer');
const mysql = require('mysql');

const connection =mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'employee_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
    startApp();
});

function startApp() {
    inquirer 
    .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments?',
            'View all roles?',
            'View all employees?',
            'Add a department?',
            'Add a role?',
            'Add an employee?',
            'Update an employee role?',
            'Exit',
        ],
    })
    .then((answer) => {
        switch (answer.action) {
            case 'View all departments?':
            const query = 'Select id, name FROM departments';

            connection.query(query, (err, results) => {
                if (err) throw err;

                console.log ('\nDEpartments:');
                results.forEach((department) => {
                    console.log('ID: ${department.id} | Name: ${department.name}');
                });
                startApp();
            });
            break;

            case 'View all roles?':

            break;

            case 'View all employees?':

            break;

            case 'Add a department?':

            break;

            case 'Add a role?':

            break;

            case 'Add an employee?':

            break;

            case 'Update an employee role?':

            break;

            case 'Exit':
                connection.end();
            break;

            default:
                console.log('Invalid choice');
            break;
        }
    });
}

startApp();