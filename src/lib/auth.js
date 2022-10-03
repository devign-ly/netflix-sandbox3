import users from '../data/users.json';

const AUTH_STATE_CHANGED = 'auth-state-changed';
const RESPONSE_DELAY = 300;

// This class is based on Firebase’s authentication system because this project used to use
// Firebase. This is all very simple so the overall system (AuthContext, etc.) could probably be
// simplified a lot too.
class Auth extends EventTarget {
  constructor() {
    super();
    this.currentUser = null;
  }

  signInWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        setTimeout(() => {
          resolve(user);
          this.dispatchEvent(
            new CustomEvent(AUTH_STATE_CHANGED, {
              detail: { user },
            })
          );
        }, RESPONSE_DELAY);
      } else {
        setTimeout(() => {
          reject(new Error('Wrong username or password'));
        }, RESPONSE_DELAY);
      }
    });
  }

  signOut() {
    this.dispatchEvent(
      new CustomEvent(AUTH_STATE_CHANGED, {
        detail: { user: null },
      })
    );
  }

  onAuthStateChanged(callback) {
    const listener = (e) => {
      callback(e.detail.user);
    };

    this.addEventListener(AUTH_STATE_CHANGED, listener);

    return function unsubscribe() {
      this.removeEventListener(AUTH_STATE_CHANGED, listener);
    };
  }
}

const auth = new Auth();

export { auth };
