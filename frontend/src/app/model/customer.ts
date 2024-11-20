export class Customer {
    id!: number;
    lastName!: string;
    email!: string;
    phone!: string;
  
    constructor(lastName: string, email: string, phone: string) {
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
    }
  }  