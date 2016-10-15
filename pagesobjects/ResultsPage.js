import BasePage from './BasePage';
const firstValue = '#results-train .result:nth-child(2) .result-grid:nth-child(1) .price-no span:nth-child(2)'; 
const secondValue = '#results-train .result:nth-child(2) .result-grid:nth-child(1) .price-no span:nth-child(2)'; 


import {By, until} from 'selenium-webdriver';


// Me traigo el driver de la  BasePage

class ResultsPage extends BasePage {
	constructor (webdriver) {
		super(webdriver);
	}
	 	
 	compareResults () { 		
 		let first = this.driver.findElement (By.css(firstValue)).getText(); 		
		let second = this.driver.findElement(By.css(secondValue)).getText();
		if (parseInt(first) <= parseInt(second)) {
			console.log('The results are being displayed in descending order by price');
		}
		return console.error('The sorting is not working');
		
		 		
 	}

 	searchOnePax (cityFrom,cityTo,date) {
 		this.searchFrom(cityFrom);
 		this.searchTo(cityTo);
 		this.selectDepartureDate(date);
 		this.pressSearchButton(); 		
 		return this.driver.wait(until.elementLocated(By.css(searchResults)),50000);
 	}

}

export default ResultsPage;
