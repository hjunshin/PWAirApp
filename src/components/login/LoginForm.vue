<template>
  <section>
    <article>
      <div class="box-form">
        <h1 class="blind">로그인</h1>
        <form novalidate @submit.prevent="validateUser">
          <fieldset>
            <legend>로그인 정보 입력란</legend>

            <div class="md-layout">
              <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-content>
                  <md-field :class="getValidationClass('email')">
                    <label for="email">아이디</label>
                    <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.email.required">아이디를 입력해주세요.</span>
                    <span class="md-error" v-else-if="!$v.form.email.email">유효하지 않은 아이디입니다.</span>
                  </md-field>

                  <md-field :class="getValidationClass('password')">
                    <label for="password">비밀번호</label>
                    <md-input type="password" name="password" id="password" v-model="form.password" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.password.required">비밀번호를 입력해주세요.</span>
                    <span class="md-error" v-else-if="!$v.form.password.password">유효하지 않은 비밀번호입니다.</span>
                  </md-field>
                </md-card-content>

                <md-progress-bar md-mode="indeterminate" v-if="sending" />

                <md-card-actions>
                  <md-button type="submit" class="md-raised md-primary btn-login" :disabled="sending">로그인</md-button>
                </md-card-actions>
              </md-card>
            </div>

            <md-snackbar :md-active.sync="userLogined">{{ lastUser }}님 환영합니다!</md-snackbar>
          </fieldset>
        </form>

      </div>
    </article>
  </section>

</template>

<script>

import { validationMixin } from 'vuelidate';
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

export default {
  name:'FormValidation',
  mixins:[validationMixin],
  data(){
    return{
      form:{
        email:null,
        password:null
      },
      userLogined:false,
      sending:false,
      lastUser:null
    }
  },
  methods:{
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid':field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.form.email = null
      this.form.password = null
    },
    loginUser () {
      this.sending = true
      this.lastUser = `${this.form.email}`
      this.userLogined = true

      window.setTimeout(() => {
        this.sending = false
        this.clearForm()
        this.$router.push('home');
      }, 1500)

    },
    validateUser () {


      //로그인 인증
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).catch(
        (error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          let errorInfo = error.code.split("/");
              errorInfo = errorInfo[1];
          console.log(`[${errorCode}] ${errorMessage}`);

          if (errorInfo === "user-not-found") {
            console.log("유효하지 않은 아이디입니다.");
          }else if(errorInfo === "wrong-password"){
            console.log("유효하지 않은 비밀번호입니다.");
          }

        }
      ).then(
        (user) => {

          if (!this.$v.$invalid) {
            if(user){
              this.loginUser()
            }
          }

        }
      );

      this.$v.$touch()

    }
  },
  validations:{
    form:{
      email:{
        required,
        email
      },
      password:{
        required,
        minLength:minLength(6)
      }
    }
  }
}
</script>

<style scoped>
  .md-layout{justify-content:center;}
  .md-card .md-title{text-align:center;}
  .md-card-actions{padding:0 1.143rem 1.429rem;}
  .md-progress-bar{position:absolute;top:0;right:0;left:0;}
  .btn-login{width:100%;}
  .md-button.md-theme-default.md-raised:not([disabled]).md-primary{color:#000;background:#ffe340;}
</style>
