## java script:

## scope:

```js
<script>console.log(x1); #undefied value come notdefine-Its an error</script>
```

> var-has function scope,
> let-has block scope,
> cons-can be changed
> [1,2,3]+"abc"--->'1,2,3abc'-converts to string
> console.log(g1==g2)--->compares the values
> console.log(g1===g2)--->compares the values and dataypes but its faster than == in some scenarios

# functions

- normal:

  ```js
  console.log(f(3));
  function f(n) {
    return n * n;
  }
  ```

## arrow:

```const double=(n) =>n*n;
## 5 pillars of code:
------------------
1.readability
2.maintainability-codedebt
3.extensibility
4.testability
5.perfomance
anonymous:
----------
IIFE(pattern)
```

# copy by value:

cons q1=[...q2]
ex:
var q1=[1,2,3]
var q2=[...q1]
var q3=[60,...q1,90,40]
console.log(q3)
\\o/p:60,1,2,3,90,40
\\t3=[...t2,...t1]

# different for loops

## for loop:

```js
for(let i=0;i<marks.length;i++)
    {
        console.log("index: ",i,"mark",marks[i]);
    }


for in loop:
    -----------
    for(let idx in marks)
        {
            console.log("index: ",idx,"mark",marks[idx]);
        }

        //if we want index number we can use for in loop

for of loop:
 ------------
 for(let idx of marks)
            {
                console.log("mark",marks);
            }
```

# ES6 Features

let and cons
template literal:

```js
function fullname(firstname,lastname){
    return 'welcome ${firstname},${lastname} 😍'
}


spread operator
rest operator
# Es6+ plus
object.keys&object.values
numaric separators
nullish coalescing
var temp=0?? avgtemp
var temp=0||avgtemp
optional chaining


# shorcuts
crtl+space--->autocomplete
cr+/--->comments
win+.---->emojis
crtl+click-->go to files
# Array destructing
const[t1,t2]=[100,200]
t1=100,t2=200;
const[t1,,t2,t3,t4]=[100,200,null]
console.log(t1,t2,t3);
//task
let total=0;
for(let i of allitems)
  {
    const {price,quantity}=i;
    total+=price*quantity;
  }
  console.log(total);

  #more destructring
  let total=0;
for(let {price,quantity} of allitems)
  {
    total+=price*quantity;
  }
  console.log(total);

# ternary operator
5>4?"awe":"cool";

# unary operator
++,--,!

# binary operator
logical-&&,||
relational->,<,>=,==,===,<=
airthamatic-+.-,*,/

# truthy vs falsy
truthy=if value converts into true its true

Falsy-viceversa
//example
let x="cool";
if(x)
console.log("hey");
else
console.log("awww");
o/p:hey
refer falsy table:https://developer.mozilla.org/en-US/docs/Glossary/Falsy

# inbuild methods
"guna".toLowerCase();
"guna".toUpperCase();
"this is pavan".split(" ");//[this,is,pavan]
"this is pavan".split("");//[t,h,i,s,i,s,p,a,v,a,n]

# june-03

# the software devlopment life cycle

SDLC image
.Figma is used to design the applications
colors.com -is used to add color combinations for the web design
 6-phases of sdlc:
 ----------------
 1.analysis
 2.design
 3.devlopment
 4.testing
 5.deployment
 6.maintenance

 # water fall vs Agile

![alt text](<Waterfall vs agile ss.png>)

```
