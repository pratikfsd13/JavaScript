const user = {
    name: 'John',};

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// {value: 'John', writable: true, enumerable: true, configurable: true}

console.log(Object.getPrototypeOf(user)); // {} 
