const parse = (item: string | null): unknown => {
  return item === null ? null : JSON.parse(item);
};

const stringify = (item: unknown) => {
  return JSON.stringify(item);
};

function getItem(key: string) {
  return parse(localStorage.getItem(key));
}

function setItem(key: string, data: unknown) {
  localStorage.setItem(key, stringify(data));
}

function removeItem(key: string) {
  localStorage.removeItem(key);
}

function clear() {
  localStorage.clear();
}

function length() {
  return localStorage.length;
}

export { getItem, setItem, removeItem, clear, length };
