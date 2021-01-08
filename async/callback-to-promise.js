'use strict';

// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'gw' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'gw') {
          resolve({ name: 'gw', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }

  // Hoemwork Answer!
  async getUserWithRole(user, password) {
    const userPro = await this.loginUser(user, password);
    const role = await this.getRoles(user);
    return role;
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// 아래처럼 간단해짐
// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRole) => {
//         alert(`Hi ${userWithRole.name}, you have a ${userWithRole.role} role`);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// Original code from Youtube course
// userStorage
//   .loginUser(id, password)
//   .then(userStorage.getRoles)
//   .then((user) => alert(`Hi ${user.name}, you have a ${user.role} role`))
//   .catch(console.log);

userStorage //
  .getUserWithRole(id, password)
  .catch(console.log)
  .then((user) => alert(`Hi ${user.name}, you have a ${user.role} role`));
