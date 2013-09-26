# Javascript Playground

My collection of Javascript snippets while reading    
Functional Javascript by Michael Fogus

Using [lowdash](http://lodash.com/)

### Metaprogramming Progrmaming

    function one(x) {
        this._x = x;
    } 
    function point(x, y) {
        one.call(this, x);
        this._y = y;
    }
    
> new point(2, 3)  
> //=> {_x:2, _y:3}

By dynamically binding the _this_ reference in a call to _one_, it became possible to change the target of its property creation code.
    
### Applicative Progrmaming
* _.map calls a function on every value in a collection in turn, returning a collection of the results
* _.reduce collects a composite value from the incremental results of a function supplied with an accumulation value and each value in a collection
* _.filter calls a predicate function (returns true/false) and grabs each value where predicate returns true, returning them in a new collection

Closure is a function that captures the external bindings contained in the scope in which it was defined for later use.   
Closures are equivalent to vampires - they capture minions and give them everlasting life until they themselves are destroyed.