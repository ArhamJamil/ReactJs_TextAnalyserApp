import x from './module2.mjs'
import {b,c,d} from './module2.mjs'

/*
    x ==> is a local variable or caller which will call and return the value, that is passed from 
    from another modulle/file via export ... A default export can be called with any value

    But named export values should be called with named import as defined in module 2
*/ 

console.log(x) // Default value
console.log(b)  // named value
console.log(c) // named Value
console.log(d)// named value