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

for of loop:
 ------------
 for(let idx of marks)
            {
                console.log("mark",marks);
            }
```
