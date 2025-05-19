/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((value) => {
        const transformedValue = asyncTransformer(value);
        resolve(transformedValue);
      })
      .catch((error) => {
        reject(error);
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
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise
    .then((value) => {
      const tranformedValue = slowAsyncProcess(value);
      return tranformedValue;
    })
    .catch((error) => {
      throw error;
    });
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    const newPromise = new Promise((resolve, reject) => {
      const userObj = getUserById(userId);

      if (!userObj) {
        reject(undefined);
      } else {
        resolve(userObj);
      }
    });

    return newPromise
      .then((userObj) => {
        return getOrganizationById(userObj.organizationId).then(
          (organizationObj) => {
            return { ...userObj, organization: { ...organizationObj } };
          }
        );
      })
      .catch((error) => {
        return undefined;
      });
  };
}