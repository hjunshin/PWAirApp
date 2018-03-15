<template>
  <div class="box-btn">
    <md-button class="md-raised" v-on:click="google">GOOGLE</md-button>
    <md-button class="md-raised" v-on:click="facebook">FACEBOOK</md-button>
  </div>
</template>

<script>
export default {
  methods: {
    google: (event) => {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    },
    facebook: (event) => {

    }
  }
}
</script>

<style scoped>
  .box-btn{padding-top:1.429rem;}
</style>
