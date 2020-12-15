const users = [
	{ email: 'dahee1@gmail.com', password: '1', name: '다희1' },
	{ email: 'dahee2@gmail.com', password: '2', name: '다희2' },
	{ email: 'dahee3@gmail.com', password: '3', name: '다희3' },
];

export function signIn({ email, password }) {
	const user = users.find(
		user => user.email === email && user.password === password
	);
	if (user === undefined) throw new Error();
	return user;
}

// export function signUp({ name, email, password }) {
// 	const user = users.find(
// 		user => user.email === email && user.password === password
// 	);
// 	if (user === undefined) throw new Error();
// 	return user;
// }
