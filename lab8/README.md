#### Inheritance

1. What is the general purpose of inheritance in programming languages?
2. What is the [[Prototype]] property?
3.  What is __proto__ and what is it usage?
4. What is the prototype inheritance chain and what happens when the JS compiler looks for a property on an object?
5.  What happens if an object has a property with the same name as a property on a prototype?
6.  What is the value of 'this' inside an inherited method?  What is the object-before-dot rule?
7.  How does the object-before-dot rule work when an object inherits a method that uses 'this'?
8.  What are the two conventions for using constructor functions?
9.  How do constructor functions relate to object literals?
10.  What are the hidden effects of using the new operator with a function constructor?
11. What happens if you forget to use new?
12.  What is the F.prototype property?
13.  How does the F.prototype property relate to [[Prototype]]?
14.  What are the built-in constructor functions for arrays, functions, objects, and numbers?
15.  What are obj.toString,  obj.__proto__.toString, Object.prototype.toString (Object.prototype)?
16.  trace the Array prototype hierarchy shown (JS object hierarchy) in your browser console.
17.  Try adding the show function to your String prototype (Changing native prototypes) and see if it works for every string.
18.  What is Object.create?  How does it relate to __proto__ and F.prototype?


____________________________________________
|   Person
--------------------------------------------
fname
lname
display() // show fname & lname
static compare(p1, p2) // compare by fname
___________________________________________

                    ^
                    |
                    |
                    |

___________________________________________
|   Employee
___________________________________________
salary
display() //display fname & lname & salary
static compare(e1,e2) // compare by salary
___________________________________________


