export default {
    getStarted: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    body {
      background-image: url("https://i.pinimg.com/736x/44/fc/80/44fc80e46c9d1398184b3a8ad71ee834.jpg");
    }
    </style>
    </head>
    <body>
    
    <h1>Hello World!</h1>
    
    <p>This page has an image as the background!</p>
    
    </body>
    </html>`,
    structural: `#para1 {
        text-align: center;
        color: red;
      }`,
    exTag1: `.center {
        text-align: center;
        color: red;
      }`,
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
