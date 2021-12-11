export default {
    getStarted: `body {
        background-color: lightblue;
      }`,
    structural: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    h1 {
      background-color: green;
    }
    
    div {
      background-color: lightblue;
    }
    
    p {
      background-color: yellow;
    }
    </style>
    </head>
    <body>
    
    <h1>CSS background-color example!</h1>
    <div>
    This is a text inside a div element.
    <p>This paragraph has its own background color.</p>
    We are still in the div element.
    </div>
    
    </body>
    </html>`,
    exTag1: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    div {
      background-color: green;
    }
    
    div.first {
      opacity: 0.1;
    }
    
    div.second {
      opacity: 0.3;
    }
    
    div.third {
      opacity: 0.6;
    }
    </style>
    </head>
    <body>
    
    <h1>Transparent Boxes</h1>
    
    <p>When using the opacity property to add transparency to the background of an element, all of its child elements become transparent as well. This can make the text inside a fully transparent element hard to read:</p>
    
    <div class="first">
      <h1>opacity 0.1</h1>
    </div>
    
    <div class="second">
      <h1>opacity 0.3</h1>
    </div>
    
    <div class="third">
      <h1>opacity 0.6</h1>
    </div>
    
    <div>
      <h1>opacity 1 (default)</h1>
    </div>
    
    </body>
    </html>`,
    exTag2: `p.center {
        text-align: center;
        color: red;
      }`,
    exTag3: `<p class="center large">This paragraph refers to two classes.</p>`,
    exTag4: `* {
        text-align: center;
        color: blue;
      }`,
    exTag5: `h1 {
        text-align: center;
        color: red;
      }
      
      h2 {
        text-align: center;
        color: red;
      }
      
      p {
        text-align: center;
        color: red;
      }`,
    exTag6: `h1, h2, p {
        text-align: center;
        color: red;
      }`,
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
