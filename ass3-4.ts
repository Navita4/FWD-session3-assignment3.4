abstract class Department{

    constructor(public name:string){

    }
    printName():void{
        console.log("Department name:"+this.name);
    }
    abstract printMeeting():void;

    
}
class AccountingDepartment extends Department{

    constructor(){
        super("Accounting and auditing"); //constructor in derived classes must call super()
    }
    printMeeting():void{
        console.log("The accounting Department meets each Saturday at 9am");
    }
    generateReports():void{
        console.log("Generating accounting reports...");

    }
}
let department:Department; //create reference to an abstract type
department = new AccountingDepartment(); // create and assign non-abstract subclass
department.printName();
department.printMeeting();