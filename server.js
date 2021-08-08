const express = require('express')
const app = express();
const port = process.env.PORT || 3495;
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var cors = require('cors');
app.use(cors());
app.options('*', cors());

app.use(express.static('./public'));

const routes = require('./routes');
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});