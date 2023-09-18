"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var script2_1 = require("./script2");
function main() {
    var employeeManage = new script2_1.EmployeesManage();
    employeeManage.imputList();
    employeeManage.printEmployees();
}
main();
