const setItem = (key, value) => {
  let _value = JSON.stringify(value);
  localStorage.setItem(key, _value);
};

const getItem = key => {
  let _value = JSON.parse(localStorage.getItem(key));

  return _value;
};

export { setItem, getItem };
