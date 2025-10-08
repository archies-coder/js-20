export function curry(fn) {

  let args2 = [];
  
  return function i(...args){

    args2 = [...args2, ...args]

    if(args2.length >= fn.length) {
      const result =  fn(...args2)
      args2 = []
      return result
    }

    return i
  }
}