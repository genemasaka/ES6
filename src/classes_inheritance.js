//created a class 'User'
class User {
	//constructor method that runs automatically when
	//'User' is instantiated
	//the constructor takes parameters name, email and subcription
	constructor(name, email, subscription) {
		//'this' keyword used to refer to properties within the class
		this.name = name
		this.email = email
		this.subscription = subscription
	}

	//method that logs the user's name
	getUserName() {
		console.log("User's name is:\n" + this.name)
	}

	//static method that exexutes only the block of code within it
	//its output cannot be altered by other methods or parameters
	static userCount() {
		console.log("The user count is 33")
	}
}

//created instance of 'User' in varaible 'simone'
let simone = new User('Simone', 'simone@gmail.com', 'Premium')
//calling getUserName method using 'simone' instance
simone.getUserName()
//calling static method straight from 'User'
User.userCount()

//created class Profile that extends class User using 'extends' keyword
class Profile extends User {
	constructor(name, email, subcription, theme) {
		//super method inherits all properties from User class
		super(name, email, subcription)
		this.theme = theme
	}
	//getTheme method used to get user's profile theme 
	getTheme() {
		console.log(this.name+" has a "+this.theme+" for their profile")
	}
}

//created instance of 'Profile' in 'lefty'
let lefty = new Profile('lefty', 'lefty@gmail.com', 'Premium', 'dark')

//calling getTheme method from 'lefty' instance
lefty.getTheme()