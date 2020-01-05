// An implementation of a Vector (and vector-related operations) in TypeScript.

class Vector {
  constructor(public vector: number[]) {
  }

  public getFromVector(idx: number): number {
    return this.vector[idx];
  }

  public plus(otherVec: Vector): Vector {
    let newVector = []

    for (const [idx, val] of this.vector.entries()) {
      newVector.push(val + otherVec.getFromVector(idx))
    }

    return new Vector(newVector)
  } 
  
  public minus(otherVec: Vector): Vector {
    let newVector = []

    for (const [idx, val] of this.vector.entries()) {
      newVector.push(val - otherVec.getFromVector(idx))
    }

    return new Vector(newVector)
  }

  public times(scalar: number): Vector {
    let newVector = []

    for (const [idx, val] of this.vector.entries()) {
      newVector.push(val * scalar)
    }

    return new Vector(newVector)
  }

  public getMagnitude(): number {
    let valBeforeSqrt = 0;

    for (const val of this.vector) {
      valBeforeSqrt += val * val;
    }

    return Math.sqrt(valBeforeSqrt)
  }

  public normalize(): Vector {
    let magnitude = this.getMagnitude();

    let newVector = []

    for (const val of this.vector) {
      newVector.push(val / magnitude);
    }

    return new Vector(newVector);
  }

  public dotProduct(otherVec: Vector): number {
    let dotProductResult = 0; 

    for (const [idx, val] of this.vector.entries()) {
      dotProductResult += val * otherVec.getFromVector(idx);
    }
    
    return dotProductResult; 
  }

  public getAngleBetween(otherVec: Vector, inDegrees: boolean): number {
    let cosOfAngle = this.dotProduct(otherVec) / (this.getMagnitude() * otherVec.getMagnitude())

    if (inDegrees === false) {
      return Math.acos(cosOfAngle)
    } else {
      return Math.acos(cosOfAngle) * (180 / Math.PI)
    }
  }
}

// Main
console.log("Answer to 1")
console.log(new Vector([8.218, -9.341]).plus(new Vector([-1.129, 2.111])))

console.log("Answer to 2")
console.log(new Vector([7.119, 8.215]).minus(new Vector([-8.223, 0.878])))

console.log("Answer to 3")
console.log(new Vector([1.671, -1.012, -0.318]).times(7.41))


console.log("Answer to Magnitude 1")
console.log(new Vector([-0.221, 7.437]).getMagnitude())

console.log("Answer to Magnitude 2")
console.log(new Vector([8.813, -1.331, -6.247]).getMagnitude())

console.log("Answer to Normalize 1")
console.log(new Vector([5.581, -2.136]).normalize())

console.log("Answer to Normalize 2")
console.log(new Vector([1.996, 3.108, -4.554]).normalize())


console.log("Answer to dot product 1")
console.log(new Vector([7.887, 4.138]).dotProduct(new Vector([-8.802, 6.776])))

console.log("Answer to dot product 2")
console.log(new Vector([-5.955, -4.904, -1.874]).dotProduct(new Vector([-4.496, -8.755, 7.103])))

console.log("Answer to get angle 1")
console.log(new Vector([3.183, -7.627]).getAngleBetween(new Vector([-2.668, 5.319]), false));

console.log("Answer to get angle 2")
console.log(new Vector([7.35, 0.221, 5.188]).getAngleBetween(new Vector([2.751, 8.259, 3.985]), true));
