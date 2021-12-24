export default {
    getStarted: `let message;

    message = 'Hello'; // store the string 'Hello' in the variable named message`,
    structural: `alert('Hello')
alert('World')`,
    exTag1: `let message;
    message = 'Hello!';
    
    alert(message); // shows the variable content`,
    exTag2: `let message = 'Hello!'; // define the variable and assign the value

    alert(message); // Hello!`,
    exTag3: `let user = 'John', age = 25, message = 'Hello'`,
    exTag4: `var message = 'Hello'; `,
    exTag5: `let message;

    message = 'Hello!';
    
    message = 'World!'; // value changed
    
    alert(message);`,
    exTag6: `let hello = 'Hello world!';

    let message;
    
    // copy 'Hello world' from hello into message
    message = hello;
    
    // now two variables hold the same data
    alert(hello); // Hello world!
    alert(message); // Hello world!`,
    exTag7: `let message = "This";

    // repeated 'let' leads to an error
    let message = "That"; // SyntaxError: 'message' has already been declared`,
    exTag8: `let userName;
    let test123;`,
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
