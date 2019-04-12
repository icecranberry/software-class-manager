<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img
                    src="/static/project.png"
                    alt="Vue Material Admin"
                    width="120"
                    height="120"
                  />
                  <h1 class="flex my-4 primary--text">
                    云上软件工程
                  </h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="login"
                    label="学号"
                    type="text"
                    v-model="model.username"
                    ref="username"
                  ></v-text-field>
                  <v-text-field
                    append-icon="lock"
                    name="password"
                    label="密码"
                    id="password"
                    type="password"
                    v-model="model.password"
                    ref="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
<!--                <v-btn icon>-->
<!--                  <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>-->
<!--                </v-btn>-->
<!--                <v-btn icon>-->
<!--                  <v-icon color="red">fa fa-google fa-lg</v-icon>-->
<!--                </v-btn>-->
<!--                <v-btn icon>-->
<!--                  <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>-->
<!--                </v-btn>-->
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="login" :loading="loading"
                  >登陆</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    model: {
      username: "",
      password: ""
    }
  }),

  methods: {
      login: function () {
          this.loading = true;
          let loginAccount ={"username":this.model.username,"password":this.model.password};
          console.log(loginAccount);
          this.axios.post('/api/login', loginAccount).then(res => {
              if (res.data.msg == "Login success") {
                  setTimeout(() => {
                      this.$router.push("/dashboard");
                  }, 500);
              }
              else {
                  alert(res.data.msg);
                  this.loading = false;
              }
              console.log('res=>', res);
          });
      }
  }
};
</script>
<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
