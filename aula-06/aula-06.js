let user;
user = {
  name: 'João',
};

let username = user?.name || 'Usuário sem nome';
console.log('username: ', username);

let username2 = user?.name ?? 'Usuário sem nome';
console.log('username: ', username);
