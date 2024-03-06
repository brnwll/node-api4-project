const defaultUsers = [
  { name: "bob", password: "bobs-pw" },
  { name: "jane", password: "janes-pw" },
  { name: "tom", password: "toms-pw" },
  { name: "sue", password: "sues-pw" },
];

let users = [...defaultUsers];

function getAll() {
  return users;
}

function register(user) {
  if (users.find((u) => u.name === user.name)) {
    return null;
  }
  if (!user.name || !user.password) {
    return null;
  }
  users.push(user);
  return user;
}

function login(user) {
  if (users.find((u) => u.name === user.name && u.password === user.password)) {
    return `Welcome ${user.name}!`;
  }
  return null;
}

function reset() {
  users = [...defaultUsers];
}

module.exports = {
  getAll,
  register,
  login,
  reset,
};
