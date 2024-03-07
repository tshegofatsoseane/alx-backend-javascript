/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Create a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - Name course.
   * @param {Number} length - Course length in months.
   * @param {String[]} students - Course student length.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Get course name.
   */
  get name() {
    return this._name;
  }

  /**
   * Set course name.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets course length.
   */
  get length() {
    return this._length;
  }

  /**
   * Set court length (in months).
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Get course student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets course student names.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
