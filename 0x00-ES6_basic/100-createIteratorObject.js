export default function createIteratorObject(report) {
    const employeesName = []
    for (const department of Object.keys(report.allEmployees)) {
        for (const name of report.allEmployees[department]) {
            employeesName.push(name);
        }
    }
    return employeesName
}