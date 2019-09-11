<template>
  <div class="login">
    <h2>登录</h2>
    <el-form :model="ruleForm" :rules="rules" ref="loginForm" label-width="55px">
      <el-form-item label="账号" prop="user" style="width:400px;margin:20px auto ">
        <el-input type="text" v-model="ruleForm.user" auto-complete="off" placeholder="输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass" style="width:400px;margin:20px auto">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          auto-complete="off"
          placeholder="输入密码"
          @keyup.13.native="login"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-button type="success" size="small" @click="login()" style="float:right;">登录</el-button>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.loginForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        user: "",
        pass: ""
      },
      rules: {
        pass: [
          { required: true, message: "必须添加密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        user: [{ required: true, message: "必须填写用户名", trigger: "blur" }]
      }
    };
  },
  methods: {
    async login() {
      if (this.ruleForm.user != "admin" || this.ruleForm.pass != "123456") {
        alert("用户名或密码错误");
        return;
      }

      let statu = await this.$login({
        //设置登陆状态为1
        method: "patch",
        data: { status: "1" }
      });
      statu = JSON.parse(statu.config.data).status;

      if (statu == "1") {
        this.$router.push("/nav_head/home");
        this.$forceUpdate();
      }
    }
  }
};
</script>
<style scoped>
.login {
  width: 400px;
  padding: 40px 40px 80px 25px;
  margin: 100px auto;
  border: 1px solid #dddddd;
  background: #cccccc;
  text-align: center;
}
h2 {
  font-size: 30px;
  color: white;
  letter-spacing: 2px;
}
</style>