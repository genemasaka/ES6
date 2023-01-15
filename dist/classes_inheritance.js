"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//created a class 'User'
var User = function () {
	//constructor method that runs automatically when
	//'User' is instantiated
	//the constructor takes parameters name, email and subcription
	function User(name, email, subscription) {
		_classCallCheck(this, User);

		//'this' keyword used to refer to properties within the class
		this.name = name;
		this.email = email;
		this.subscription = subscription;
	}

	//method that logs the user's name


	_createClass(User, [{
		key: "getUserName",
		value: function getUserName() {
			console.log("User's name is:\n" + this.name);
		}

		//static method that exexutes only the block of code within it
		//its output cannot be altered by other methods or parameters

	}], [{
		key: "userCount",
		value: function userCount() {
			console.log("The user count is 33");
		}
	}]);

	return User;
}();

//created instance of 'User' in varaible 'simone'


var simone = new User('Simone', 'simone@gmail.com', 'Premium');
//calling getUserName method using 'simone' instance
simone.getUserName();
//calling static method straight from 'User'
User.userCount();

//created class Profile that extends class User using 'extends' keyword

var Profile = function (_User) {
	_inherits(Profile, _User);

	function Profile(name, email, subcription, theme) {
		_classCallCheck(this, Profile);

		var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, name, email, subcription));
		//super method inherits all properties from User class


		_this.theme = theme;
		return _this;
	}
	//getTheme method used to get user's profile theme 


	_createClass(Profile, [{
		key: "getTheme",
		value: function getTheme() {
			console.log(this.name + " has a " + this.theme + " for their profile");
		}
	}]);

	return Profile;
}(User);

//created instance of 'Profile' in 'lefty'


var lefty = new Profile('lefty', 'lefty@gmail.com', 'Premium', 'dark');

//calling getTheme method from 'lefty' instance
lefty.getTheme();