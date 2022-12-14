function createIncrement() {
    let count = 0;
    function increment() {
        count = count+ 3;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
   return [increment, log]
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // Output : Count is 0
//This is because the scope of the count declared in line number 6 is the function createIncrement. Hence it outputs as 0
// log function is creating closure with createIncreament function and the closure contains message variable with initialised value