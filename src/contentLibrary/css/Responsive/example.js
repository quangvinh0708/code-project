export default {
    getStarted: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    table {
      border-collapse: collapse;
      width: 100%;
    }
    
    th, td {
      text-align: left;
      padding: 8px;
    }
    
    tr:nth-child(even) {background-color: #f2f2f2;}
    </style>
    </head>
    <body>
    
    <h2>Responsive Table</h2>
    <p>A responsive table will display a horizontal scroll bar if the screen is too 
    small to display the full content. Resize the browser window to see the effect:</p>
    <p>To create a responsive table, add a container element (like div) with <strong>overflow-x:auto</strong> around the table element:</p>
    
    <div style="overflow-x: auto;">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Adam</td>
          <td>Johnson</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
          <td>67</td>
        </tr>
      </table>
    </div>
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
