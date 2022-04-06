<font size="3">At this moment, we render our job offers at once. This is not a problem as long as our offers are 100, but it could become as the number of offers increases. Your task:
Enter inside the ./bin/generateFaker.js change the value of NUMBER_OF_JOBS and run yarn run create:faker to regenerate the list of job offers
Try with 1000, 10000, 50000 job offers; what happens to the frontend? Are there any differences in the use of the page? Can you describe what procedure you used to find out any differences?
Could you provide us with a solution to rendering all these job offers on the page? Don't worry; there is no right or wrong implementation.</font>


<font size="2">As the number of tasks increases, the load on pulling and displaying elements will increase, This can be hidden from the developer console cover in the network tab.
This can be fixed by adding either pagination to pages or lazy loading, this will reduce the load on the number of displayed elements (If an implementation is needed, I can provide an example code)</font>



<font size="3">How many different/distinct secret keys can be generated using wp_generate_passowrd(8)? Don't worry! We don't use WordPress, but we are happy to understand how you navigate through documentation of packages you don't know (oops, this could be a hint). Please, answer this question in a document named answer.md inside the repo.</font>


<font size="2"> If, in addition to the password length, do not change optional parameters, then the result will be <span style="color:white; background-color: #999999">Math.pow(7, 21)</span> </font>

<font size="1">https://developer.wordpress.org/reference/functions/wp_generate_password/</font>
