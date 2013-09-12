/* Creating the 99 bottles song using functional JS with lowdash
*
* To use:
* bottleSong = new Song(2);
* bottleSong.getLyrics();
* Output:
*   "2 bottles of beer on the wall
*    2 bottles of beer
*    Take one down, pass it around
*    1 bottles of beer on the wall
*
*    1 bottles of beer on the wall
*    1 bottles of beer
*    Take one down, pass it around
*    No more bottles of beer on the wall
*    "
*/

/**
* Construct the song segment given a number n:
* n bottles of beer on the wall
* n bottles of beer
* Take one down, pass it around
* (n-1) bottles of beer on the wal
*   Once n is 1, the last line is:
* No more bottles of beer on the wall
*/
var SongSegment = function(n) {
   var a = [];
  _(a)
  .push(n + " bottles of beer on the wall")
  .push(n + " bottles of beer")
  .push("Take one down, pass it around")
  .tap(function(arr) { //_.tap(val, func-to-invovke)
    arr.push(((n === 1) ? "No more" : (n-1)) + " bottles of beer on the wall");
  });

  this._arr = a;
  return this; 
}

SongSegment.prototype.push = function(val) {
  console.log(this._arr);
  this._arr.push(val);
  return this;
}

SongSegment.prototype.get = function() {
  return this._arr;
}

SongSegment.prototype.getLyrics = function() {
  return _(this._arr).join("\n");
}

/* 
* Construct the entire song: n bottles of beer on the wall
*  Continuously call the SongSegment
*/
var Song = function(n, segSeparator) {
  var sep = segSeparator || "",
   res = [];
   this._arr = _.reduce(_.range(n, 0, -1), //_.reduce(col, callback(res, val, idx/key, col), res)
                  function(res, v) {
                    //join the song segments together
                    return res.concat(new SongSegment(v).push(sep).get());    
                  }, res);
  return this;
};

Song.prototype.push = function(val) {
  this._arr.push(val);
}

Song.prototype.get = function() {
  return this._arr;
}

Song.prototype.getLyrics = function() {
  return _(this._arr).join("\n");
}