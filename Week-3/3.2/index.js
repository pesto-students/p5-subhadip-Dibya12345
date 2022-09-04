let name = {
    firstName: "Dibya",
    Lastname: "Dash",
    displayName: function(hometown, state) {
      console.log(this.firstName + " " + this.Lastname+ " from " + hometown +" in " + state)
    }
  }
  console.log(name.displayName("Bhubaneswar", "Odisha"))
  
  let name2 = {
    firstName: "Shubhadip",
    Lastname: "Majumder",
  }
  // USE CASE FOR CALL: We want to use the displayName function in name2 
  // In this case we can use a call function without explicitly 
  // defining the function in the name2 object
  
  name.displayName.call(name2, "Kolkata", "Westbengal")
  console.log(name2.displayName)
  
  // USE CASE FOR APPLY: Let's add two more arguments
  // Now instead of passing the argument one by one we can pass it 
  // as an array
  name.displayName.apply(name2, ["Kolkata", "Westbengal"])
  console.log(name2.displayName)
  // USE CASE FOR BIND: it return a function
  let displayname=name.displayName.bind(name2, "Kolkata", "Westbengal")
  console.log(displayname)
  