export default {
    getStarted: `<!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" href="mystyle.css">
    </head>
    <body>
    
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    
    </body>
    </html>`,
    structural: `body {
        background-color: lightblue;
      }
      
      h1 {
        color: navy;
        margin-left: 20px;
      }`,
    exTag1: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    body {
      background-color: linen;
    }
    
    h1 {
      color: maroon;
      margin-left: 40px;
    }
    </style>
    </head>
    <body>
    
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    
    </body>
    </html>`,
    exTag2: `<!DOCTYPE html>
    <html>
    <body>
    
    <h1 style="color:blue;text-align:center;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>
    
    </body>
    </html>`,
    exTag3: `h1 {
        color: navy;
      }`,
    exTag4: `h1 {
        color: orange;   
      }`,
    exTag5: `<head>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    <style>
    h1 {
      color: orange;
    }
    </style>
    </head>`,
    exTag6: `<head>
    <style>
    h1 {
      color: orange;
    }
    </style>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head>`,
    exTag7: `<!DOCTYPE html>
<html lang="en">
    <body>
    ...
    </body>
</html>>`,
    exTag8: `<!DOCTYPE html>
<html lang="en-US">
    <body>
    ...
    </body>
</html>>`,
    exTag9: `<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>`,
    exTag10: `<p>This is <sub>subscripted</sub> text.</p>`,
    exTag11: `<p>This is <sup>superscripted</sup> text.</p>`,
    exTag12: `<p title='John "ShotGun" Nelson'>`,
};
