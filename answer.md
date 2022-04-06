
## How many different/distinct secret keys can be generated using wp_generate_passowrd(8)?
According to my opinion wp_generate_password(8), It will select 8 characters from these.
Normal characters: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
Special characters: !@#$%^&*()
Extra special characters: -_ []{}<>~`+=,.;:/?| 

Total characters = 92 including special and extra special characters.

Formulae to calculate distinct keys: n^k

k = no of elements to be selected from n
n = total no of elements available

So, k = 8 and n = 92

92^8 = 5132188731375616 (distinct password).