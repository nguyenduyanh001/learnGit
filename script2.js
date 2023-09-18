"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesManage = void 0;
var script_1 = require("./script");
var promptSync = require("prompt-sync");
var prompt = promptSync({ sigint: true });
var EmployeesManage = /** @class */ (function () {
    function EmployeesManage() {
        this.Employees = [];
    }
    EmployeesManage.prototype.imputList = function () {
        var employeenumber = prompt("How many employees do you have: ");
        if (employeenumber) {
            for (var i = 0; i < parseInt(employeenumber); i++) {
                var entityreq = prompt("what employee role do you want to make: ");
                if (entityreq == "employee") {
                    var employee = new script_1.Employee();
                    employee = employee.createEmployee();
                    this.Employees.push(employee);
                }
                if (entityreq == "engineer") {
                    var engineer = new script_1.Engineer();
                    engineer = engineer.createEngineer();
                    this.Employees.push(engineer);
                }
                if (entityreq == "worker") {
                    var worker = new script_1.Worker();
                    worker = worker.createWorker();
                    this.Employees.push(worker);
                }
                else {
                    console.log("something is wrong");
                }
            }
        }
    };
    // updateEmployees() {
    //     const IDinput = prompt("what is the id")
    //     for (const x of this.Employees) {
    //         if (x.id == IDinput) {
    //             this.updateEmployees()
    //         }
    //         else {console.log("id not found")}
    //     }
    // }
    // searchEmployees() {
    //     // const 
    // }
    EmployeesManage.prototype.printEmployees = function () {
        // for(const x of this.Employees) {console.log(x)}
        console.log("\n =============== LIST ============== \n");
        console.log(this.Employees);
    };
    return EmployeesManage;
}());
exports.EmployeesManage = EmployeesManage;
