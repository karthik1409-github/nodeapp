const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var os = require("os");
var hostname = os.hostname;


app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h1>This is a simple Node JS App</h1>
          <h3>Hostname: ${hostname}</h3>
        </section>
        
        <!--
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Course Goal</label>
            <input type="text" name="goal">
          </div>
          <button>Set Course Goal</button>
        </form>
        -->

      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  res.redirect('/');
});

//app.listen(9999);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Application listening on ${port}`));
