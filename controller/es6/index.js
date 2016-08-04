import home from 'x-root-path';
import Stream from 'stream';
import fs from 'fs';
let bigFile = home+'/controller/ractive_method/index.js';
let Readable = Stream.Readable;
let Writable = Stream.Writable

class Student {
  call() {
    fs.createReadStream(bigFile).pipe(process.stdout);
  }
}
class ToReadable extends Readable{
  constructor(iterable) {
    super()
    this.iterator = new function *() {
      yield * iterable
    }
  }
  //子类需要实现该方法，因为这是产生数据的方法。
  _read() {
    const res = this.iterator.next()
    if (res.done) {
      // 数据源已枯竭，调用`push(null)`通知流
      this.push(null)
    } else {
      // 通过`push`方法将数据添加到流中
      this.push(res.value + '\n')
    }
  }
}
let stu = new Student();
stu.call();
/**
 * Readable 创建可读流
 */
