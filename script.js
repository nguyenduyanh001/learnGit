"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Engineer = exports.Worker = exports.Data = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync({ sigint: true });
var Data = /** @class */ (function () {
    function Data(name, birthdate, adress, phone_number, id) {
        if (name)
            this.name = name;
        if (birthdate)
            this.birthdate = birthdate;
        if (adress)
            this.adress = adress;
        if (phone_number)
            this.phone_number = phone_number;
        if (id)
            this.id = id;
    }
    Data.prototype.createEntity = function () {
        var name = prompt("what is your name: ");
        var birthdate = prompt("what is your birthdate: ");
        var adress = prompt("what is your adress: ");
        var phone_number = prompt("what is your phone number: ");
        var id = prompt("what is your id: ");
        if (name != null && birthdate != null && adress != null && phone_number != null && id != null) {
            var myData = new Data(name, birthdate, adress, phone_number, id);
            console.log("\n * myData: ", myData);
            return myData;
        }
    };
    return Data;
}());
exports.Data = Data;
;
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    function Worker(name, birthdate, adress, phone_number, id, level) {
        var _this = _super.call(this, name, birthdate, adress, phone_number, id) || this;
        if (level)
            _this.level = level;
        return _this;
    }
    Worker.prototype.createWorker = function () {
        var data = this.createEntity();
        var level = prompt("what is your worker's level: ");
        var myWorker = new Worker(data === null || data === void 0 ? void 0 : data.name, data === null || data === void 0 ? void 0 : data.birthdate, data === null || data === void 0 ? void 0 : data.adress, data === null || data === void 0 ? void 0 : data.phone_number, data === null || data === void 0 ? void 0 : data.id, level);
        console.log("\n * myWorker: ", myWorker);
        return myWorker;
    };
    return Worker;
}(Data));
exports.Worker = Worker;
;
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer(name, birthdate, adress, phone_number, id, field, docs) {
        var _this = _super.call(this, name, birthdate, adress, phone_number, id) || this;
        if (field)
            _this.field = field;
        if (docs)
            _this.docs = docs;
        return _this;
    }
    Engineer.prototype.createEngineer = function () {
        var data = this.createEntity();
        var field = prompt("what is your engineer's field ");
        var docs = prompt("what is your engineer's docs ");
        var myEngineer = new Engineer(data === null || data === void 0 ? void 0 : data.name, data === null || data === void 0 ? void 0 : data.birthdate, data === null || data === void 0 ? void 0 : data.adress, data === null || data === void 0 ? void 0 : data.phone_number, data === null || data === void 0 ? void 0 : data.id, field, docs);
        console.log("\n * myEngineer: ", myEngineer);
        return myEngineer;
    };
    return Engineer;
}(Data));
exports.Engineer = Engineer;
;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, birthdate, adress, phone_number, id, job) {
        var _this = _super.call(this, name, birthdate, adress, phone_number, id) || this;
        if (job)
            _this.job = job;
        return _this;
    }
    Employee.prototype.createEmployee = function () {
        var data = this.createEntity();
        var job = prompt("what is your engineer's job: ");
        var MyEmployee = new Employee(data === null || data === void 0 ? void 0 : data.name, data === null || data === void 0 ? void 0 : data.birthdate, data === null || data === void 0 ? void 0 : data.adress, data === null || data === void 0 ? void 0 : data.phone_number, data === null || data === void 0 ? void 0 : data.id, job);
        console.log("\n * MyEmployee: ", MyEmployee);
        return MyEmployee;
    };
    return Employee;
}(Data));
exports.Employee = Employee;
