# wc-tool

## Summary

I am building a command line tool that works like the Unix `wc` command. What does that tool do?:

1. count bytes in a file with -c flag
2. count lines in a file with -l flag
3. count words in file with -w flag
4. count chars in file with -m flag
5. support default option that does 1-3 in one line

## Things we have to know how to do

1. read a file with our programming language
2. distinguish file types(.txt,.pdf,etc)
3. how to tell what a "line" is
4. how to create a terminal command on my local machine
    1. how to add optional flags to a terminal command
5. what is a byte?
6. how to count bytes
7. how to separate a file into words

## Where to find stuff

## How custom terminal commands are set up

1. run `cd ~`
2. `mkdir bin`
3. `open ~/.zshrc` (if you are using zsh as your terminal)
4. paste `export PATH="$HOME/bin:$PATH"` onto a new line
    1. That will tell your terminal that this folder has information it should know about
5. In your project folder
    1. `touch index.js`
    2. `code index.js`
    3. In that `index.js` file
        1. `console.log("this is my ccwc")`
6. `cd ~/bin`
7. `touch ccwc`
8. In that `ccwc` file
    1. `node ~/<path to your index.js file> "$@"`
9. In your terminal
    1. `chmod +x ccwc`
    2. This turns your file into an executable terminal command
10. open a new terminal window
11. `ccwc`
12. You should see "This is my ccwc" in your terminal
