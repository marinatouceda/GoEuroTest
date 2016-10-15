import BasePage from './BasePage';
const inputSearchFrom = 'from_filter'; //id 
const inputSearchTo = 'to_filter'; //id
const inputCountPax = 'person-counter';//id
const departureDate = 'departure_date'; //id
const hotelCheckboxAirbnb = '.checkboxv2 .hotel-checkbox__airbnb'; //css
const hotelCheckboxBooking = '.checkboxv2 .hotel-checkbox__booking'; //css
const searchButtonCss = 'twelve btn orange large search-btn-1';
const searchButton = 'search-form__submit-btn';
const searchResults = 'results-train'; //id

import {By, until} from 'selenium-webdriver';


// Me traigo el driver de la  BasePage

class SearchPage extends BasePage {
	constructor (webdriver) {
		super(webdriver);
	}

	isLoaded () {
		//return this.driver.wait(until.elementLocated(By.id('ember759')),30000);
		return this.waitForDisplayed(searchButton, 30000);
	}

 	searchFrom (cityFrom) {
 		this.driver.findElement (By.id(inputSearchFrom)).sendKeys(cityFrom);
 	}

 	searchTo (cityTo) {
 		this.driver.findElement (By.id(inputSearchTo)).sendKeys(cityTo);
 	}

 	selectDepartureDate (date) {
 		this.driver.findElement (By.id(departureDate)).sendKeys(date);
 	}

 	selectBookingOption () {
 		this.driver.findElement (By.css(hotelCheckboxBooking)).click();
 	}
 	unselectAirbnbOption () {
 		this.driver.findElement (By.css(hotelCheckboxAirbnb)).click();
 	}

 	pressSearchButton () {
 		//this.driver.findElement(By.css(searchButtonCss)).click();
 		console.log('Press Search Button')
 		this.driver.findElement(By.id(searchButton)).click();
 		this.driver.findElement(By.id(searchButton)).submit();
 	}

 	searchOnePax (cityFrom,cityTo,date) {
 		this.searchFrom(cityFrom);
 		this.searchTo(cityTo);
 		this.selectDepartureDate(date);
 		this.unselectAirbnbOption();
 		this.pressSearchButton(); 		
 		return this.driver.wait(until.elementLocated(By.id(searchResults)),30000);
 	}

}

export default SearchPage;
