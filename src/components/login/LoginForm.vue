<template>
  <div class="">
    <form novalidate class="md-layout">
      <input type="text" v-model="id">
      <input type="password" v-model="pw">
      <button type="button" v-on:click="login"></button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id: '',
      pw: ''
    }
  },
  methods: {
    login(){
      let thiz = this;
      firebase.auth().signInWithEmailAndPassword(this.id, this.pw).catch(
        (error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          alert(`[${errorCode}] ${errorMessage}`);
        }
      ).then(
        (user) => {
          
          thiz.$router.push('home');
        }
      );

    }
  }
}
</script>

<style>
</style>
