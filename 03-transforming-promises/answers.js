/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
    promise
    .catch(err=>reject(err))
    .then(result=>{
      try{
        return resolve(transformer(result));
      }
      catch(err){
        return reject(reject(err));
      }
    })
  })
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then(result=>{
      return new Promise((resolve,reject)=>{
      if(Number(result)){
        resolve(Number(result)*Number(result));
      }
      else {
          reject("Cannot convert '"+result+"' to a number!")
      }
    });
    });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch((numberPromise)=>{
      if(numberPromise)
        return 0;
      else
        return numberPromise;
    });
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(onSuccess=>{
    throw (onSuccess);
  }, onFailure =>{
    return onFailure;
  }
  );
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};