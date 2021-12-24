export default {
    getStarted: `let x = 1;

    x = -x;
    console.log( x ); // -1, unary negation was applied`,
    structural: `alert('Hello')
alert('World')`,
    exTag1: `alert(3 +
1
+ 2);`,
    exTag2: `let x = 1, y = 3;
    alert( y - x ); // 2, binary minus subtracts values`,
    exTag3: `alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
    alert( 8 % 3 ); // 2, a remainder of 8 divided by 3`,
    exTag4: `alert( 2 ** 2 ); // 2² = 4
    alert( 2 ** 3 ); // 2³ = 8
    alert( 2 ** 4 ); // 2⁴ = 16`,
    exTag5: `alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
    alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)`,
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
