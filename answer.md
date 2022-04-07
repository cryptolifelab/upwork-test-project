- How many different/distinct secret keys can be generated using `wp_generate_passowrd(8)`? Don't worry! We don't use WordPress, but we are happy to understand how you navigate through documentation of packages you don't know (oops, this could be a hint). Please, answer this question in a document named `answer.md` inside the repo.


wp_generate_password( int $length = 12, bool $special_chars = true, bool $extra_special_chars = false )

$length
(int) (Optional) The length of password to generate.
Default value: 12

$special_chars
(bool) (Optional) Whether to include standard special characters.
Default value: true

$extra_special_chars
(bool) (Optional) Whether to include other special characters. Used when generating secret keys and salts.
Default value: false

Normal characters: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
Special characters: !@#$%^&*()

**We use a password of length 8. We use normal chars and special chars, so we have 72^8**

