export default {
    getStarted: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    ul.a {
      list-style-type: circle;
    }
    
    ul.b {
      list-style-type: square;
    }
    
    ol.c {
      list-style-type: upper-roman;
    }
    
    ol.d {
      list-style-type: lower-alpha;
    }
    </style>
    </head>
    <body>
    
    <h2>The list-style-type Property</h2>
    
    <p>Example of unordered lists:</p>
    <ul class="a">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
    
    <ul class="b">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
    
    <p>Example of ordered lists:</p>
    <ol class="c">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ol>
    
    <ol class="d">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ol>
    
    </body>
    </html>`,
    structural: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    ul {
      list-style-image: url('sqpurple.gif');
    }
    </style>
    </head>
    <body>
    
    <h2>The list-style-image Property</h2>
    
    <p>The list-style-image property specifies an image as the list item marker:</p>
    
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
    
    </body>
    </html>`,
    exTag1: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    ul.demo {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    </style>
    </head>
    <body>
    
    <p>Default list:</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
    
    <p>Remove bullets, margin and padding from list:</p>
    <ul class="demo">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
    
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
