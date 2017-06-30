Function.prototype.myBind = function (context) {
  return (...array)=>{this.apply(context,array)};
}

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function(kind) {
   console.log("Turning on the " + kind + " " + this.name);
}

name = "Bob";

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn("large"); // should say "Turning on a lamp"
myBoundTurnOn("large"); // should say "Turning on a lamp"

// this.func.bind(this)
//
// equivalent to
//
// ()=>this.func
