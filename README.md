# Test

* API functional and non-functional tests were written using Apache jmeter. To run tests please download **[Apache Jmeter](https://jmeter.apache.org/download_jmeter.cgi)**.  After installing Apache jmeter, open the command prompt and`cd` to the `/bin` directory of the newly install Apache jmeter and run `jmeter` using this command like so `sh jmeter.sh`. 
Please remember that Apache Jmeter needs **Java 8+**. 

To automated both tests, a backend listener can be added to the funtional test and results could be saved into a realtime datasource e.g **InfluxDB** and then these results could be displayed in metrics platform such as **Grafana**. A cron job will need to be set for tests.

https://api.adviceslip.com/advice
## Functional tests
#### Test case 1
API GET request to get a random advise.

#### Test case 2
API GET request to get an advise by `id`.

#### Test case 3
API GET request to search for an advise using a search `query`.

## Non-functional tests
Test cases 1 to 3 were repeated,for a 100 requests per second for a loop count of 10. 

![alt text](https://github.com/ManuBoca92/Test/blob/master/API_tests/Screenshot%202019-09-20%20at%2021.27.02.png)

As you can see from the `graph result` the **throughput** server can handle 1,787.133 requests per minute. The Throughput is the most important parameter. It represents the ability of the server to handle a **heavy load**.  The higher the Throughput is, the better is the server performance.

Also the **deviation** is shown in red - it indicates the deviation from the average. The smaller the better.


## UI Automation tests
The key features of the platform is the form which comprises of a dropdown, datepicker, input fields and buttons. I will automate this tests using cypress or protractor. I setup the test environment for these frameworks.

I wasn't able to access most elements inside the iframe due to **css styling** and **duplication** of web elements. I will go about testing key features by folowing theses steps;
* I will request the frontend developers to provide unique ids to each element, so as to remove issues with duplication. 
* I will ask my senior colleague or frontend team for a better solution in accessing some elements in the iframe which I have add issues with.

After this has been done, I will then begin testing the key features which I had earlier named. 

After completing all tests, I will setup a CI/CD confguration so as to run tests on a every pull/merge request.
