# Language Design and Implementation

## Overview
This program takes a text file as input and outputs the location of the entries in memory as a text file. It supports `char` and `int` data types, with `char` occupying 1 byte and `int` occupying 2 bytes in memory. The program can handle arrays with a maximum of two dimensions.

## Input Format
The input file should be a text file containing variable declarations. Each declaration should be on a separate line and follow the format: `type identifier[dimension1][dimension2];`. The supported types are `char` and `int`, and the dimensions should be non-negative integers.

## Output Format
The program generates an output file that lists each variable identifier and its corresponding memory location. Each entry is listed on a separate line in the format: `identifier location`. The location is specified as an offset from the beginning of the memory, in bytes. For arrays, the location includes the dimensions and the memory occupied by each element.

## Example
### Input File (`input.txt`)
```js
int x, y;
char t[2],u;
int a[3][4];
char b[2],v[2][7];
char z,g[8],h,m;
```

### Output File (`output.txt`)
```js
x 0
y 2
t 4 + 1X
u 6
a 7 + 8X + 2Y
b 31 + 1X
v 33 + 7X + 1Y
z 47
g 48 + 1X
h 56
m 57
```

## Limitations and Rules
- The program only supports `char` and `int` data types.
- The size of a `char` is 1 byte, and the size of an `int` is 2 bytes.
- Arrays can have a maximum of two dimensions.
- The input file should follow the specified format.
- The program calculates the memory locations based on the specified data types and array dimensions.

## Implementation Details
The program follows these steps to generate the output:

1. Read the input file line by line.
2. Parse each line to extract the variable type, identifier, and dimensions (if applicable).
3. Calculate the memory location for each variable based on its type and dimensions.
4. Generate the output file with each variable's identifier and memory location.

Please note that the program assumes no padding between variables or arrays for simplicity.
