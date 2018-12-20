class Vec {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  plus(obj){
   return new Vec(this.x + obj.x, this.y + obj.y);
  }
  minus(obj){
    return new Vec(this.x - obj. x, this.y - obj.y)
  }
  get length(){
    return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)))
  }
  
  
} 


// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// //class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }

// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");
// console.log(killerRabbit.speak("carrot"))