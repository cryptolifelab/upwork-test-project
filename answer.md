# We forced a wait time of 3 seconds to simulate a very slow API call. The UX is not ideal now (sorry, we were in a hurry smiley). Can you offer us a solution that makes the wait less incomprehensible for our users?

`We can implement and use Loader component untill the timeout is cleared.`

# Try with 1000, 10000, 50000 job offers; what happens to the frontend? Are there any differences in the use of the page? Can you describe what procedure you used to find out any differences? Could you provide us with a solution to rendering all these job offers on the page?

`While fetching more than 1000 data, we can see that App is taking load and we can see the difference through the time taken to fetch the data which can be seen in network tab. To resolve this issue, we can implement server_side_pagination. basically we can use Infinite scrolling in Frontend Side. So, we can get data on scroll and enhance the user experiance.`

# How many different/distinct secret keys can be generated using wp_generate_passowrd(8)? Don't worry! We don't use WordPress, but we are happy to understand how you navigate through documentation of packages you don't know (oops, this could be a hint). Please, answer this question in a document named answer.md inside the repo.

`For the wp_generate_passowrd method of wordpress 72^8 (or 7.222041363 \* 10^14) different/distinct secret keys can be generated using wp_generate_passowrd(8) as it takes 3 arguments of (digits:12,special Char:true, extra Special char:false) and in our case digits are 8 and other 2 takes default arguments value. So,`

AlphaNumeric : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
Speacial Characters : !@#$%^&*()
extra special : -_ []{}<>~`+=,.;:/?|

But in our case extraspecial is false then Total possible characters are 72 and possibility are 72^8.
