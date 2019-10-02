export class Employee {
  constructor(name, email, username, id) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.id = id;
  }
  static fromJSON(json) {
    return new Employee(json.name, json.email, json.username, json.id);
  }
}
