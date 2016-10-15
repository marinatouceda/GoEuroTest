# GoEuroTest
Find below the excercises requested. The resolutions will be in this repository 

2. Test automation 

GoEuro lists the travel results sorted by cheapest, fastest or by time (departure/arrival). Please 
create an automated test that will make a search (Eg.: Berlin-Prague) and will verify that the
sorting by price is correct. 
Please send your solution as a github link. We’ll take a look at your solution considering if the 
test is working, the design choices, the commit
messages on github (best practices of version 
control) and the test report. 

The solution will be developed in Node.js , using Mocha as a test framework .The structure for this solution will imply have a Page Object for Search Page and a Page object for the list of results.

To run the test with Mocha, use : npm run onetest or just use the line

mocha test/search/searchBerlinPrague --compilers js:babel-register

The report is a log file that should be created when you run the scripst with npm run. I still in a learning process regarding node, I was using Java and TestNG for reporting, but I am pretty excited regarding node!:)
