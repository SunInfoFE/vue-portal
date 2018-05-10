<template>
  <div>
    <s-form :model="loginForm">
      <s-form-item>
        <s-input id="userName" type="text" v-model="loginForm.userName"></s-input>
      </s-form-item>
      <s-form-item>
        <s-input id="userPwd" type="password" v-model="loginForm.userPwd"></s-input>
      </s-form-item>
      <s-form-item>
        <s-button @click.native.prevent="handleLogin">登录</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        userName: 'admin',
        userPwd: ''
      }
    };
  },
  methods: {
    handleLogin () {
      console.log(JSON.stringify(this.loginForm));
      this.$store.dispatch('login', this.loginForm).then(res => {
        if (res === 'success') {
          this.$router.push('/');
        }
      });
    }
  },
  mounted() {
    this.handleLogin()
  }
};
</script>

<style>

</style>
