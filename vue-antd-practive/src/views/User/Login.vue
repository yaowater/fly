<template>
  <div>
    <a-form layout="inline" @submit="handleSubmit">
      <a-form-item>
        <a-input placeholder="Username" v-model="loginInformationObj.username">
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          type="password"
          placeholder="Password"
          v-model="loginInformationObj.password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit"> Login </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginInformationObj: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (
        this.loginInformationObj.username == "admin" &&
        this.loginInformationObj.password == "123456"
      ) {
        this.$message.success("登录成功", 1.2, () => {
          this.$router.push("/");
        });
      } else {
        this.$message.warning("账号或者密码不正确");
      }
    },
  },
};
</script>

<style lang="css">
</style>