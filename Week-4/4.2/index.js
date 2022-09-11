const Person = function(){}
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

const Teacher = function(){}
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject){
    console.log(this.name + " is now teaching " + subject);
}

const me = new Teacher();
me.initialize("John", 25);
me.teach("Mathematics");