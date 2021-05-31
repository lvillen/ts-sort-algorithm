class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // All of this only works if collection is number[]
        // If collection is an array of numbers > check with 'instanceof Array'
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // All of this only works if collection === string > typeof for primitive values
        // If collection is a string, do this logic instead 
        // THE CODE
        if (typeof this.collection === 'string') {
          
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(`Your sorted item is: ${sorter.collection}`);