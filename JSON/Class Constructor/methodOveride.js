class Parent{
    property(){
        console.log("Parent constructor called");
    }   
    greet(){
        console.log("Hello from Parent");
    }
}
class Child extends Parent{
    property(){
        super.property(); // Call the parent class property
        console.log("Child Property");
    }  
    greet (){
        console.log("Hello from Child");
    }
}
child = new Child();
child.greet();
// override the greet method of the parent class
child.property();
