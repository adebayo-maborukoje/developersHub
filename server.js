var express = require('express');
var app = express();

app.use(express.static('./'));


app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
