# Developer guide

# How to setup a development platform in terminal
```
Check version of npm
> npm -version
> npm install create-textlint-rule -g
```

# How to setup the project envt in terminal
```
> create-textlint-rule volore-getting-started
> cd textlint-rule-volore-getting-started
> mkdir default
> mv src default/.
> mv test default/.
> mv package.json default/.
> mv package-lock.json default/.
> cd ..
> git clone https://github.com/prodageo/textlint-rule-volore-getting-started temp
> mv temp/src textlint-rule-volore-getting-started/.
> mv temp/test textlint-rule-volore-getting-started/.
> mv temp/package.json textlint-rule-volore-getting-started/.
> mv temp/package-lock.json textlint-rule-volore-getting-started/.
> rm -rf temp
> cd textlint-rule-volore-getting-started
> git pull origin master
> npm i -d
```
Note :
 - tested on 
   - Laragon, Windows 10 - npm 5.5.1
 - to be tested :
   - Ubuntu


# How to test changes ?
```
> npm run build
Test with scripts in test/
> npm test
Another way for testing (based on the file given on the command line)
> textlint --rulesdir lib/ test/sample.md -f pretty-error
```

## How to commit ?
```
> git add *
> git commit -am "Fixes #xxx : comment"
> git push origin master
```

# Issues

## Issue repository
 - https://github.com/prodageo/textlint-rule-volore-getting-started/issues
 
## Closing issue
Put "Fixes #nnn :" in the commit message.
```
For closing issue #1
> git commit -am "Fixes #1 : comment"
```

# Resources
 - https://github.com/textlint/textlint/blob/master/docs/rule.md : guide for envt dev setup

# Annexes

## Annex 1 : questions from create-textlint-rule volore-getting-started
```
Initialized empty Git repository in C:/Apps/laragon/www/volore/textlint-rule-volere-getting-started/.git/
Input information about your textlint rule                                                               
This utility will walk you through creating a package.json file.                                         
It only covers the most common items, and tries to guess sensible defaults.                              
                                                                                                         
See `npm help json` for definitive documentation on these fields                                         
and exactly what they do.                                                                                
                                                                                                         
Use `npm install <pkg>` afterwards to install a package and                                              
save it as a dependency in the package.json file.                                                        
                                                                                                         
Press ^C at any time to quit.                                                                            
package name: (textlint-rule-volere-getting-started)                                                     
version: (1.0.0)                                                                                         
description: aaa                                                                                         
git repository: https://github.com/prodageo/textlint-rule-volore-getting-started.git                     
author: fbab                                                                                             
license: (ISC)       
```
