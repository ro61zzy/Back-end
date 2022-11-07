//Sync, Async, wait, promise and try and catch

function getUserInfo() {
  //this will execute after 10 seconds, here the second log will be
  // executed first, this is an ASYNC method
  // therefore we need sync, to make the first method run first
  setTimeout(() => {
    console.log('user info is logged')
  }, 10000)
}

function getUserContacts() {
  console.log('returns all user contacts')
}

//getUserInfo()
//getUserContacts()

// 1. sync method using try-catch
//to implement sync, we use try and catch
/*try {
  console.log('Get user info')
} catch (e) {
  console.log('There is an error getting user info')
} finally {
  console.log('return user')
}

getUserContacts()
//this will now run sequentially
*/

// 2. - using promises
var user = new Promise((resolve, reject) => {
  console.log('Getting user info')
  //you either resolve or reject
  resolve('Here is user info')
  //if there is a problem you reject
  // reject('Failed to load')
})
  .then(() => {
    //then do this
    getUserContacts()
  })
  .catch((e) => {
    //if there's an error, catch it
    console.log(e)
  })
