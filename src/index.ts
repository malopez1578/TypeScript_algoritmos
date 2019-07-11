class PruebaTs {
  message: string;
  constructor(menssage) {
    this.message = menssage;
  }
  reverseText() {
    let word = this.message
      .split("")
      .reverse()
      .join("");
    return word;
  }
  isUnique(arr) {
    const breadcrumbs = {};
    let result = true;
    for (let i = 0; i < arr.length; i++) {
      console.log(`~~~~ LOOP ~~~~ i === ${i}`);

      if (breadcrumbs[arr[i]]) {
        result = false;
      } else {
        breadcrumbs[arr[i]] = true;
      }
    }
    return result;
  }
  times10 = function(n: number) {
    return n * 10;
  };
  saveInMemory = function(n: number) {
    console.time('Checking Normal');
    let cache = {};
    if (n in cache) {
      console.log("Fetching from cache: ", n);
      console.timeEnd('Checking Normal');
      return cache[n];
    } else {
      let result = this.times10(n);
      console.timeEnd('Checking Normal');
      cache[n] = result;
      return result;
    }
  };
}

let init = new PruebaTs("hol");

console.log(init.saveInMemory(3));
console.log("cached value: ", init.saveInMemory(9));
