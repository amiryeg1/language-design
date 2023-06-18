# Language Design And Implementation

## Question
Write a program that takes a text file as input and outputs the location of the entries in memory as a text file.

### Example
given this text file as the input:

```js
//input.txt
int x,y;
char t[2],u;
int a[3][4];
char b[2],v[2][7];
char z,g[8],h,m;
```
we would expect the program to return this file as the output:

```js
//output.txt
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

### Limitations And Rules

- the program only accepts `char` and `int` as type values, where 

**char = 1 byte**
  
**int = 2 bytes**

- The maximum number of array dimensions is **`two`**