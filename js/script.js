function anotherFunction() {
  console.log('Hola');
}

function fnWithCallback(callbackFunction) {
  callbackFunction();
}

fnWithCallback(anotherFunction);

