/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise
      .then(success=>{
          return resolve(asyncTransformer(success));
      },failure=>{
        return reject(failure);
      });
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then((value)=>{
    return (slowAsyncProcess(value));
  });
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {function} getUserById 
 * @param {function} getOrganizationById 
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById){
  return function getUserByIdWithOrganization(userId){
    return new Promise((resolve,reject)=>{
      getUserById(userId).then(success1=>{
      getOrganizationById(success1.organizationId).then(success2=>{
          success1.organization=success2;
          resolve(success1);
      })
    }).catch(error=>{
      resolve(undefined);
    })
      })
    }
  }

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};