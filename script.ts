import * as promptSync from 'prompt-sync';
const prompt = promptSync({sigint:true});

export class Data {
    name: string
    birthdate: string
    adress : string
    phone_number :string
    id: string
    constructor(name?: string, birthdate?: string, adress?: string, phone_number?:string, id?: string) {
        if (name) this.name = name;
        if (birthdate) this.birthdate = birthdate;
        if (adress) this.adress = adress;
        if (phone_number) this.phone_number = phone_number;
        if (id) this.id = id;
    }

    createEntity() {
        const name = prompt("what is your name: ");
        const birthdate = prompt("what is your birthdate: ");
        const adress = prompt("what is your adress: ");
        const phone_number = prompt("what is your phone number: ");
        const id = prompt("what is your id: ");
        if (name != null && birthdate  != null && adress != null && phone_number != null && id != null) {
            const myData = new Data(name, birthdate, adress, phone_number, id);
            console.log("\n * myData: ", myData);
            return myData
        }
    }
};

export class Worker extends Data {
    level: string
    constructor(name?: string, birthdate?: string, adress?: string, phone_number?:string, id?: string, level?: string) {
        super(name, birthdate, adress, phone_number, id);
        if (level) this.level = level;
    }
    createWorker() {
        const data = this.createEntity();
        const level = prompt("what is your worker's level: ");
        const myWorker = new Worker(data?.name, data?.birthdate, data?.adress, data?.phone_number, data?.id, level);
        // console.log("\n * myWorker: ", myWorker);
        return myWorker
    }
        
};

export class Engineer extends Data { 
    field: string;
    docs: string;
    constructor(name?: string, birthdate?: string, adress?: string, phone_number?:string, id?: string, field?: string, docs?: string) {
        super(name, birthdate, adress, phone_number, id)
        if(field) this.field = field;
        if(docs) this.docs = docs;
    }
    createEngineer() {
        const data = this.createEntity()
        const field = prompt("what is your engineer's field ")
        const docs = prompt("what is your engineer's docs ")
        
        const myEngineer = new Engineer(data?.name, data?.birthdate, data?.adress, data?.phone_number, data?.id, field , docs)
        // console.log("\n * myEngineer: ", myEngineer)
        return myEngineer
        
    }
};

export class Employee extends Data {
    jobs: string[]
    constructor(name?: string, birthdate?: string, adress? : string, phone_number? :string, id?: string, jobs?: string[]) {
        super(name, birthdate, adress, phone_number, id)
        if (jobs) this.jobs = jobs
    }
    createEmployee() {
        const data = this.createEntity();
        const job = prompt("what is your engineer's job: ")
        const jobs = [job]
        const MyEmployee = new Employee(data?.name, data?.birthdate, data?.adress, data?.phone_number, data?.id, jobs);
        // console.log("\n * MyEmployee: ", MyEmployee)
        return MyEmployee
    }
}




