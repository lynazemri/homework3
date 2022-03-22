let obj1 = {
  name: " abc",
  age: 19,
  degree: "1",
};

let obj2 = {
  name: "def",
  age: 20,
  degree: "2",
};

function check(obj1, obj2) {
  for (i in obj2) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
}

console.log(check(obj1, obj2));
