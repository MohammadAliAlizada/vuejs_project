<template>
  <div class="container">
      <h1>This is Sign up page</h1>

      <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
              <form>
                  <input type="text" v-model="name" placeholder="Enter Name" class="form-control">
                  <br>
                  <input type="email" v-model="email" placeholder="Enter Email" class="form-control">
                  <br>
                  <input type="password" v-model="password" placeholder="Enter Password" class="form-control">
                  <br>

                  <input type="submit" class="btn btn-primary btn-block" @click.prevent="registerUser">
              </form>
          </div>
          <div class="col-md-4"></div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
     name : null ,
     email : null ,
     password : null
    }
  },
 
  methods: {

      registerUser(){
         this.axios.post('/register' , {name : this.name , email:this.email , password : this.password})
          .then((response) => {
              console.log(response);
          })
          .catch((error) => {
              console.log(error);
          })
      }
    
  
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
