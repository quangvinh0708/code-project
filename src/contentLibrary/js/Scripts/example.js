export default {
    getStarted: `<p id="demo"></p>
    <script>
    document.getElementById("demo").innerHTML = "My First JavaScript";
    </script>`,
    structural: `<!DOCTYPE html>
    <html>
    <head>
    <script>
    function myFunction() {
      document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>
    </head>
    <body>
    <h2>Demo JavaScript in Head</h2>
    
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
    </body>
    </html`,
    exTag1: `function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }`,
    exTag2: `<script src="myScript.js"></script>`,
    exTag3: `<script src="myScript1.js"></script>
    <script src="myScript2.js"></script>`,
    exTag4: `p {
border: 2px solid powderblue;
padding: 30px;
}`,
    exTag5: `p {
border: 2px solid powderblue;
margin: 50px;
}`,
    exTag6: `<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">`,
    exTag7: `<link rel="stylesheet" href="/html/styles.css">`,
    exTag8: `<link rel="stylesheet" href="styles.css">`,
    exTag9: `<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>`,
    exTag10: `<p>This is <sub>subscripted</sub> text.</p>`,
    exTag11: `<p>This is <sup>superscripted</sup> text.</p>`,
    exTag12: `<p title='John "ShotGun" Nelson'>`,
};
