import { Data, Employee, Engineer, Worker } from "./script";
import * as promptSync from 'prompt-sync';
const prompt = promptSync({sigint:true});

export class EmployeesManage {
    Employees: (Employee | Engineer | Worker | Data)[]
    constructor() {
        this.Employees = []
    }

    imputList() {
        let employeenumber = prompt("How many employees do you have: ")
        if (employeenumber) {
            for(let i = 0; i < parseInt(employeenumber); i++ ) {
                const entityreq = prompt("what employee role do you want to make: ");
                if (entityreq == "employee") {
                    let employee = new Employee()
                    employee = employee.createEmployee()
                    this.Employees.push(employee);
                }
                if (entityreq == "engineer") {
                    let engineer = new Engineer()
                    engineer = engineer.createEngineer()
                    this.Employees.push(engineer)
                }
                if (entityreq == "worker") {
                    let worker = new Worker()
                    worker = worker.createWorker()
                    this.Employees.push(worker)
                }
                else {
                    console.log("something is wrong")
                }
            }
        }
    }
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
    printEmployees() {
        // for(const x of this.Employees) {console.log(x)}
        console.log("\n =============== LIST ============== \n");
        console.log(this.Employees);
    }
}