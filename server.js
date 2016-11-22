require('babel-register');
var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8001

var mongoose = require('mongoose'),
    configDB = require('./config');
var bodyParser = require('body-parser');
var logger = require('morgan');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./src/routes');
var User = require('./models/user');
var Dhtoperator = require('./models/dhtoperator');
var Mobilecircle = require('./models/mobilecircle');
var Mobileoperator = require('./models/mobileoperator');

// using webpack-dev-server and middleware in development environment
if (process.env.NODE_ENV !== 'production') {
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');
    var config = require('./webpack.config');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

mongoose.connect(configDB.database);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

// app.use(logger('dev'));
app.use(express.static('static'))
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/dist/index.html')
});


app.post('/api/dhtoperatorAdd', function(req, res, next) {
    console.log(req.body.name);
    console.log(req.body.value);
    var dht = new Dhtoperator({
        name: req.body.name,
        value: req.body.value,
    });
    dht.save();
    res.send(dht.save());
});

app.post('/api/mobileoperatorAdd', function(req, res, next) {
    console.log(req.body.name);
    var mob = new Mobileoperator({
      name: req.body.name,
      value: req.body.value,
    });
    mob.save();
    res.send(mob.save());
});

app.post('/api/mobilecircleAdd', function(req, res, next) {
    console.log(req.body);
    var cir = new Mobilecircle({
      name: req.body.name,
      value: req.body.value,
    });
    cir.save();
    res.send(cir.save());
});

app.get('/api/getAllcircles', function(req, res, next) {
    Mobilecircle
        .find()
        .exec(function(err, circle) {
            if (err) return next(err);
            res.send(circle);
        });
});

app.get('/api/getAlldht', function(req, res, next) {
    Dhtoperator
        .find()
        .exec(function(err, dht) {
            if (err) return next(err);
            res.send(dht);
        });
});

app.get('/api/getAllmobile', function(req, res, next) {
    Mobileoperator
        .find()
        .exec(function(err, mobile) {
            if (err) return next(err);
            res.send(mobile);
        });
});

app.get('/api/getAllusers', function(req, res, next) {
    User
        .find()
        .exec(function(err, user) {
            if (err) return next(err);
            res.send(user);
        });
});

app.post('/api/deleteMOP', function(req, res, next) {
    var name = req.body.name
    Mobileoperator
        .find({ 'name': name })
        .exec(function(err, item) {
            if (err) return next(err);
            item.forEach(function(i) {
                i.remove();
                i.save();
            });
            Mobileoperator
                .find()
                .exec(function(err, mobile) {
                    if (err) return next(err);
                    res.send(mobile);
                });
        });
});

app.post('/api/deleteMC', function(req, res, next) {
    var name = req.body.name
    Mobilecircle
        .find({ 'name': name })
        .exec(function(err, item) {
            if (err) return next(err);
            item.forEach(function(i) {
                i.remove();
                i.save();
            });
            Mobilecircle
                .find()
                .exec(function(err, circle) {
                    if (err) return next(err);
                    res.send(circle);
                });
        });
});

app.post('/api/deleteDHT', function(req, res, next) {
    var name = req.body.name
    Dhtoperator
        .find({ 'name': name })
        .exec(function(err, item) {
            if (err) return next(err);
            item.forEach(function(i) {
                i.remove();
                i.save();
            });
            Dhtoperator
                .find()
                .exec(function(err, dht) {
                    if (err) return next(err);
                    res.send(dht);
                });
        });
});

app.post('/api/deleteAU', function(req, res, next) {
    User
        .find({ 'name': name })
        .exec(function(err, item) {
            if (err) return next(err);
            item.forEach(function(i) {
                i.remove();
                i.save();
            });
            User
                .find()
                .exec(function(err, user) {
                    if (err) return next(err);
                    res.send(user);
                });
        });
});

app.post('/api/signup', function(req, res, next) {
    console.log(req.body);
    // console.log(User);
    var usr = new User({
        userId: Math.random(100000000000) * Math.random(100000000000) * Math.random(100000000000) + Math.random(100000000000),
        name: req.body.name,
        email: req.body.email,
        password: req.body.pass,
        mobile: req.body.num,
        type:'client'
    });
    usr.save();
    res.send(usr.save());
});


app.post('/api/login', function(req, res, next) {
    console.log(req.body);
    var email = req.body.email;
    var pass = req.body.pass;

    User.findOne({ email: email, password: pass }, function(err, user) {
        if (err) return next(err);
        console.log(user);
        if (!user) return res.send(404);
        // req.session.user = email;
        return res.send(user);
    });
});

app.get('/api/logout', function(req, res) {
    req.session.user = null;
});




// app.use(function(req, res) {
//     Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
//         if (err) {
//             res.status(500).send(err.message)
//         } else if (redirectLocation) {
//             res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
//         } else if (renderProps) {
//             var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
//             var page = swig.renderFile('dist/index.html', { html: html });
//             res.status(200).send(page);
//         } else {
//             res.status(404).send('Page Not Found')
//         }
//     });
// });

app.listen(PORT, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    }
});
