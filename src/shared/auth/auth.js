const users = [
    { email: 'dahee1@gmail.com', password: '1', name: 'd1' },
    { email: 'dahee2@gmail.com', password: '2', name: 'd2' },
    { email: 'dahee3@gmail.com', password: '3', name: 'd3' }
  ]
  
  export function signIn({ email, password }) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user === undefined) throw new Error();
    return user;
  }