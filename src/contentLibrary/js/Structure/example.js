export default {
    getStarted: `console.log("Hello", "WORLD")
console.log("World")`,
    structural: `alert('Hello')
alert('World')`,
    exTag1: `alert(3 +
1
+ 2);`,
    exTag2: `alert("Hello");

    [1, 2].forEach(alert);`,
    exTag3: `alert("Hello")[1, 2].forEach(alert);
    `,
    exTag4: `// This comment occupies a line of its own
    alert('Hello');
    
    alert('World'); // This comment follows the statement`,
    exTag5: `/* An example with two messages.
    This is a multiline comment.
    */
    alert('Hello');
    alert('World');`,
    exTag6: `/* Commenting out the code
    alert('Hello');
    */
    alert('World');`,
    exTag7: `/*
    /* nested comment ?!? */
  */
  alert( 'World' );`,
    exTag8: `<link rel="stylesheet" href="styles.css">`,
    exTag9: `<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>`,
    exTag10: `<p>This is <sub>subscripted</sub> text.</p>`,
    exTag11: `<p>This is <sup>superscripted</sup> text.</p>`,
    exTag12: `<p title='John "ShotGun" Nelson'>`,
};
