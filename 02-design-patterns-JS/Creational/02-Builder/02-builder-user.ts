class Address {
  constructor(public street: string, public zipCode: string) {
    this.street = street;
    this.zipCode = zipCode;
  }
}

class User {
  age: number;
  email: string;
  address: Address;

  constructor(public name: string) {
    this.name = name;
  }
}

class UserBuilder {
  user: User;

  constructor(name: string) {
    this.user = new User(name);
  }

  setAge(age: number) {
    this.user.age = age;
    return this;
  }

  setEmail(email: string) {
    this.user.email = email;
    return this;
  }

  setAddress(address: Address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}
