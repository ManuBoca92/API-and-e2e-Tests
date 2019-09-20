# Test

* API functional and non-functional tests were written using Apache jmeter. To run tests please download **[Apache Jmeter](https://jmeter.apache.org/download_jmeter.cgi)**.  After installing Apache jmeter, open the command prompt and`cd` to the `/bin` directory of the newly install Apache jmeter and run `jmeter` using this command like so `sh jmeter.sh`. 
Please remember that Apache Jmeter needs **Java 8+**. 

https://api.adviceslip.com/advice
## Functional tests
#### Test case 1
API GET request to get a random advise.

#### Test case 2
API GET request to get an advise by `id`.

#### Test case 3
API GET request to search for an advise using a search `query`.

## Non-functional tests
Test case 1 to 3 wer repeated,for a 100 requests per second for a loop count of 10. 


## UI Automation tests
The tests were written using two popular frameworks, which are cypress and protractor. 
