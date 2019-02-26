// Sample File - this can be removed to illustrate 
// possible file structure and use. Delete as needed. 

/**
 *  Filters an array and returns unique values. 
 * @param {Array} array - unique values.
 */
function getDistinct(array) {
  return array.filter((elm, index, self) => {
    return self.indexOf(elm) === index;
  });
}