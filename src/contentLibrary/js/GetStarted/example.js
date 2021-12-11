export default {
    getStarted: `<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>`,
    structural: `<head>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>`,
    exTag1: `body {
background-color: powderblue;
}
h1 {
color: blue;
}
p {
color: red;
}`,
    exTag2: `<style>
h1 {
    color: blue;
    font-family: verdana;
    font-size: 300%;
}
p {
    color: red;
    font-family: courier;
    font-size: 160%;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>`,
    exTag3: `p {
border: 2px solid powderblue;
}`,
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
