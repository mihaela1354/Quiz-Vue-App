import requester from '@/data/requester.js';

export const userService = {
  methods: {
    register() {
      const username = this.username;
      const password = this.password;

      const payload = {
        username,
        password
      };

      requester.post('', 'user', 'Basic', payload)
        .then((res) => res.json())
        .then((userInfo) => {
          sessionStorage.setItem('token', userInfo._kmd.authtoken);
          sessionStorage.setItem('username', userInfo.username);
          sessionStorage.setItem('userId', userInfo._id);
          this.$emit('onChangeHeader', true);
          this.$router.push('/');
        })
        .catch(console.error);
    },
    login() {
      const username = this.username;
      const password = this.password;

      const payload = {
        username,
        password
      };

      requester.post('login', 'user', 'Basic', payload)
        .then((res) => res.json())
        .then((userInfo) => {
          sessionStorage.setItem('token', userInfo._kmd.authtoken);
          sessionStorage.setItem('username', userInfo.username);
          sessionStorage.setItem('userId', userInfo._id);
          this.$emit('onChangeHeader', true);
          this.$router.push('/');
        })
        .catch(console.error);
    },
    logout() {
      requester.post('_logout', 'user', 'Kinvey', {})
        .then(() => {
          sessionStorage.clear();
          this.$emit('onChangeHeader', false);
        })
        .catch(console.error);
    }
  },
  computed: {
    isAuth() {
      return sessionStorage.getItem('token') !== null;
    }
  }
};