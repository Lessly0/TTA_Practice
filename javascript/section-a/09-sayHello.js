const student = {
    name: "John",
    sayHello: function() {
        console.log(`Hi, my name is ${this.name}`);
    }
};

// example
student.sayHello();