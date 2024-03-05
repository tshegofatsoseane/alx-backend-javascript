export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat();

  const iterator = {
    index: 0,
    next() {
      if (this.index < allEmployees.length) {
        return { value: allEmployees[this.index++], done: false };
      } else {
        return { done: true };
      }
    }
  };

  iterator[Symbol.iterator] = function () {
    return this;
  };

  return iterator;
}
