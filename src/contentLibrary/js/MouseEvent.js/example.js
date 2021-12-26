export default {
    getStarted: `console.log( window.innerWidth ); // full window width
    console.log( document.documentElement.clientWidth ); // window width minus the scrollbar`,
    structural: `alert('Hello')
alert('World')`,
    exTag1: `let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      
      alert('Full document height, with scrolled out part: ' + scrollHeight);`,
    exTag2: `console.log('Current scroll from the top: ' + window.pageYOffset);
    console.log('Current scroll from the left: ' + window.pageXOffset);`,
    exTag3: `function showMessage() {
        let message = "Hello, I'm JavaScript!"; // local variable
      
        alert( message );
      }
      
      showMessage(); // Hello, I'm JavaScript!
      
      alert( message ); // <-- Error! The variable is local to the function`,
    exTag4: `let userName = 'John';

    function showMessage() {
      let message = 'Hello, ' + userName;
      alert(message);
    }
    
    showMessage(); // Hello, John`,
    exTag5: `let userName = 'John';

    function showMessage() {
      userName = "Bob"; // (1) changed the outer variable
    
      let message = 'Hello, ' + userName;
      alert(message);
    }
    
    alert( userName ); // John before the function call
    
    showMessage();
    
    alert( userName ); // Bob, the value was modified by the function`,
    exTag6: `et userName = 'John';

    function showMessage() {
      let userName = "Bob"; // declare a local variable
    
      let message = 'Hello, ' + userName; // Bob
      alert(message);
    }
    
    // the function will create and use its own userName
    showMessage();
    
    alert( userName ); // John, unchanged, the function did not access the outer variable`,
    exTag7: `function showMessage(from, text) { // parameters: from, text
        alert(from + ': ' + text);
      }
      
      showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
      showMessage('Ann', "What's up?"); // Ann: What's up? (**)`,
    exTag8: `function showMessage(from, text) {

        from = '*' + from + '*'; // make "from" look nicer
      
        alert( from + ': ' + text );
      }
      
      let from = "Ann";
      
      showMessage(from, "Hello"); // *Ann*: Hello
      
      // the value of "from" is the same, the function modified a local copy
      alert( from ); // Ann`,
    exTag9: `alert('1' + 2 + 2); // "122" and not "14"`,
    exTag10: `// No effect on numbers
    let x = 1;
    alert( +x ); // 1
    
    let y = -2;
    alert( +y ); // -2
    
    // Converts non-numbers
    alert( +true ); // 1
    alert( +"" );   // 0`,
    exTag11: `// No effect on numbers
    let x = 1;
    alert( +x ); // 1
    
    let y = -2;
    alert( +y ); // -2
    
    // Converts non-numbers
    alert( +true ); // 1
    alert( +"" );   // 0`,
    exTag12: `let apples = "2";
    let oranges = "3";
    
    alert( apples + oranges ); `,
};
