//Example-1
function outerFunction() {
    let outerVariable = 'I am from outer scope';
  
    function innerFunction() {
      return outerVariable;
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction();
  console.log(closure());  



//   Example-2
  function createCounter() {
    let count = 0;
  
    return function() {
      count += 1;
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter());  
  console.log(counter());  
  console.log(counter());  
  