export const LOGIN_API = (username , password)=>{
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
      const success = true; // Change this to false to see the reject case
  
      if (success) {
        resolve("Operation was successful!");
      } else {
        reject("Operation failed!");
      }
    }, 2000); // Wait for 2 seconds
  });
}
  