export default {
    getStarted: `switch(x) {
        case 'value1':  // if (x === 'value1')
          ...
          [break]
      
        case 'value2':  // if (x === 'value2')
          ...
          [break]
      
        default:
          ...
          [break]
      }`,
    exTag1: `let a = 2 + 2;

    switch (a) {
      case 3:
        alert( 'Too small' );
        break;
      case 4:
        alert( 'Exactly!' );
        break;
      case 5:
        alert( 'Too big' );
        break;
      default:
        alert( "I don't know such values" );
    }`,
    exTag2: `let a = 2 + 2;

    switch (a) {
      case 3:
        alert( 'Too small' );
      case 4:
        alert( 'Exactly!' );
      case 5:
        alert( 'Too big' );
      default:
        alert( "I don't know such values" );
    }`,
    exTag3: `let a = "1";
    let b = 0;
    
    switch (+a) {
      case b + 1:
        alert("this runs, because +a is 1, exactly equals b+1");
        break;
    
      default:
        alert("this doesn't run");
    }`,
    exTag4: `let a = 3;

    switch (a) {
      case 4:
        alert('Right!');
        break;
    
      case 3: // (*) grouped two cases
      case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;
    
      default:
        alert('The result is strange. Really.');
    }`,
    exTag5: `let arg = prompt("Enter a value?");
    switch (arg) {
      case '0':
      case '1':
        alert( 'One or zero' );
        break;
    
      case '2':
        alert( 'Two' );
        break;
    
      case 3:
        alert( 'Never executes!' );
        break;
      default:
        alert( 'An unknown value' );
    }`,
    exTag6: `let s = "my" + "string";
    alert(s); // mystring`,
    exTag7: `alert( '1' + 2 ); // "12"
    alert( 2 + '1' ); // "21"`,
    exTag8: `alert(2 + 2 + '1' ); // "41" and not "221"`,
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
