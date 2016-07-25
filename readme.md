# Common Accord Docs

Command line tool to render common accord documents

## Install

Install [NodeJS](https://nodejs.org) on your machine.

Clone this project to a folder on your e.g. /home/<user>/cmacc-docs

Go into this folder and run the following command

```
npm install
```

## Usage

To run the parser use the following command from the root of this project

```
node ./run.js <input> <output>
```

Example of ycombinator

```
node ./run.js ./doc/acme/angel-round/safe_robinson.md
```

or

```
node ./run.js ./doc/acme/angel-round/safe_robinson_v2_.md
```

Output will be int foder

./build/index.html

## Principles

+ documents are managed as md files and follow the [markdown spec](http://spec.commonmark.org/0.24/)
+ accord is an super set of markdown which enables the following features
    + import of documents
    + injection of variables
+ accord works as an preprocessor of mark down. This will follow the same approach as typescript as superset of javascript

## Technology

## Links

+ [Comparison of programming](https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(syntax))

@ ./docs