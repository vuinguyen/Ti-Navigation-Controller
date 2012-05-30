var NavigationController = require('NavigationController'),
TestWindow = require('TestWindow');

//create NavigationController which will drive our simple application
var controller = new NavigationController();

//open initial window
controller.open(new TestWindow(controller));