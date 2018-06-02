# Developper guide

# How to setup a development envt in terminal
> 
> git clone https://github.com/prodageo/textlint-rule-volore-getting-started
> npm i -d

Note :
 - tested on Laragon, Windows 10
 - to be tested : on Ubuntu


# How to test changes
> npm run build
Test with scripts in test/
> npm test
Another way for testing (based on the file given on the command line)
> textlint --rulesdir lib/ test/sample.md -f pretty-error

 
# Known intricacies


# Issues

## Issue repository
 - https://github.com/prodageo/textlint-rule-volore-getting-started/issues
 
## Closing issue
Put "Fixes #nnn :" in the commit message.
For closing issue #1
> git commit -am "Fixes #1 : comment"


# Resources


