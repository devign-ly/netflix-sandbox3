class Auth extends EventTarget {
  constructor() {
    super();
    this.currentUser = null;
  }

  signInWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      if (
        email &&
        email.length > 0 &&
        password &&
        password.length > 0 &&
        password !== 'bad'
      ) {
        const user = {
          displayName: email,
          photoURL: 1,
        };
        this.currentUser = user;
        this.dispatchEvent(
          new CustomEvent('auth-state-changed', {
            detail: { user },
          })
        );
        resolve();
      } else {
        reject(new Error('Wrong username or password'));
      }
    });
  }

  signOut() {
    this.dispatchEvent(
      new CustomEvent('auth-state-changed', {
        detail: { user: null },
      })
    );
  }

  onAuthStateChanged(callback) {
    const listener = (e) => {
      callback(e.detail.user);
    };

    this.addEventListener('auth-state-changed', listener);

    return function unsubscribe() {
      this.removeEventListener('auth-state-changed', listener);
    };
  }
}

const auth = new Auth();

export { auth };
