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
}

// Main
console.log("Answer to 1")
console.log(new Vector([8.218, -9.341]).plus(new Vector([-1.129, 2.111])))

console.log("Answer to 2")
console.log(new Vector([7.119, 8.215]).minus(new Vector([-8.223, 0.878])))

console.log("Answer to 3")
console.log(new Vector([1.671, -1.012, -0.318]).times(7.41))
