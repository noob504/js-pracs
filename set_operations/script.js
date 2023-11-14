const setA = new Set(["apple", "mango", "orange"]);
const setB = new Set(["grapes", "apple", "banana"]);
const setC = new Set(["apple", "orange"]);

function calcUnion() {
  const unionSet = new Set(setA);

  for (const elem of setB) {
    unionSet.add(elem);
  }

  document.getElementById('operationResult').innerHTML = `Union of Set A and Set B is: \{${[...unionSet]}}`;
}

function calcIntersection() {
  const intersectionSet = new Set();

  for(const elem of setA) {
    if(setB.has(elem)) {
      intersectionSet.add(elem);
    }
  }

  document.getElementById('operationResult').innerHTML = `Intersection of Set A and Set B is: \{${[...intersectionSet]}}`;
}

function calcDifference() {
  const differenceSet = new Set(setA);

  for (const elem of setB) {
    differenceSet.delete(elem);
  }


  document.getElementById('operationResult').innerHTML = `Difference of Set A and Set B is: \{${[...differenceSet]}}`;
}

function calcSubset() {
  let isSubset = true;

  for (const elem of setC) {
    if (!setA.has(elem)) {
      isSubset = false;
      break;
    }
  }

  document.getElementById('operationResult').innerHTML = `Set C is a subset of Set A: ${isSubset}`;
}

function reset() {
  document.getElementById('operationResult').innerHTML = '';
}


