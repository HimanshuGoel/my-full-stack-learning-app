# Digital Workbench Bootcamp - Council Election

## Pre-requisites

* You have an operating linux environment (WSL2 if on windows)
* Devbox is installed (follow this guide: https://www.jetify.com/docs/devbox/installing_devbox/)
* Git is installed
* You have access to this repo in innersource and have created a Personal Access Token with `read_repository` and `write_repository` scopes.

## Getting started

1. Check this repo out inside your Linux environment (WSL2 Debian or Ubuntu if on Windows)
   1. `git clone https://YOUR_USERNAME:YOUR_TOKEN@innersource.soprasteria.com/dwb-bootcamp/council-election.git`
2. Change directory to this repo `cd whereever/you/checked/it/out`
3. Create and checkout your own branch `git checkout -b your_team_name` (Commit and push code as you go)
4. Enter the devbox environment by executing `devbox shell`
5. Open IntelliJ IDEA by executing `idea-community .` (if the project doesn't open first time, exit and run this again)
6. Ensure you can build the project using Maven
   1. Within IntelliJ IDEA open the Maven window from the icon on the right hand side of the screen
   2. Expand concil-election > Lifecycle
   3. Control (or command) and click on `clean` and `install`
   4. Click the green arrow immediately above this (not the one at the very top of the screen)


## The Brief

You have been hired by the local council who are about to run a poll of the population to determine the next council leader.

In a twist to the usual process, voters will be asked to vote for their preferred candidate and against their least favourite. The votes will be collated as below.

```
                  PreviousYearsService VotesFor  VotesAgainst  
R U Mad                     0             12          549
B A Goodchoice             12            352          129
Will Do-Nuttin             25            400          291
```

The winner will be the candidate with the largest positive count when votes against are deducted from their votes for.

You have been asked to write a command line application which will consume the file and output the winning candidate.

Note that there are many more candidates in the actual election.

## Have a look around the files before you start

1. In the left hand project tree expand council-election>src>main>java, you'll see two files:
   1. Election.java - this is your main file, you can right-click and Run this
   2. ResultFileImporter.java - this is there to help you so we don't have to worry too much about reading files today
2. Back in the left hand project tree, expand concil-election>src>main>resources, you'll see one file:
   1. election_results.txt

You are free to change anything about this solution *except the results file*

Remember this is not a test, you do not need to complete this.
