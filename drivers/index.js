import selenium from 'selenium-webdriver';

var firefoxDriver = new selenium.Builder()
    .forBrowser('firefox');

 
var drivers = {
	firefox: firefoxDriver,
	

};

export default {
	getDriver (driverName) {
		return drivers[driverName] || drivers.firefox;
	}
}
