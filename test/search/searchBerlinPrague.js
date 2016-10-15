import test from 'selenium-webdriver/testing';
import {assert} from 'chai';
import {cityFrom,cityTo,date,url} from '../../constants/';
import SearchPage from '../../pagesobjects/SearchPage';
import ResultsPage from '../../pagesobjects/ResultsPage';
import DriverFactory from '../../drivers/';



test.describe("Search cities Berlin - Prague", function (done) {
	this.timeout(300000);
	var driver;


	before(() => {

		driver = DriverFactory.getDriver('firefox');

	});

	after(() => {
		driver.quit();
	});

	test.it("Run a search for one passenger ", (done) => {
		driver = driver.build();

		var searchPage = new SearchPage(driver);
		var resultsPage = new ResultsPage(driver);
		
		searchPage.open(url)	
			.then(() => {
				return searchPage.isLoaded();
			})
			.then(() => {
				return searchPage.searchOnePax(cityFrom,cityTo,date);
			})
			.then(() => {
				return resultsPage.compareResults();
			})
			.then(() => {
				done();
			});
	});

});
