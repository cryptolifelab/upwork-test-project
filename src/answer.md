# How many different/distinct secret keys can be generated using wp_generate_passowrd(8)
`72^8` different/distinct secret keys can be generated using wp_generate_passowrd(8)

<!-- Explaination -->
Lower Case Characters : 26
Upper Case Characters : 26
Digits : 10
Speacial Characters : 10( wp_generate_passowrd() consists of 3 arguments (digits:12,special Char:true, extra Special char:false) )
total characters : 72 

# Describe what procedure you used to find out differences for increasing number of data
<!-- Explaination -->
1. API call timeout
with the help of developer tools, I can see how long it takes to call single API with large response 

2. UI performance
When response large enough, UI starts breaking or shows nothing 

# Solution for increasing NUMBER_OF_JOBS
Best approch to solve issue for increasing data are 
1. Pagination
2. Infinite scroll on same page
3. Server side rendering





