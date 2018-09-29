<template>
  <div class="container">
    
  <div class="row well">
      <div class="col-md-12">
          <div class="er">
               <div v-if="error1" class="alert alert-danger">
                    {{error1}}
                </div>

       

                <div v-if="errors.username || errors.password" class="alert alert-danger">
                    <li v-for="err in errors.username" :key="err">
                        {{err}}
                    </li>

                    <li v-for="err in errors.password" :key="err">
                        {{err}}
                    </li>
                </div>


          </div>
          
      </div>
  </div>

      <div class="row">
          
          <div class="col-md-4"></div>
          <div class="col-md-4">
              
        <div class="animated fadeIn">
            <div class="marj">
                     <h3>Tailor MIS</h3>
                      <div class="login">
                          
                          <form    v-on:submit.prevent="loginUser" action="#" method="get">
                                <h5>Login to your account</h5>
                
                                <div class="form-group">
                                    <input type="email"  v-model="username" placeholder="Email Address" class=" heigh form-control">
                                   
                                </div>
                             
                                
                                <div class="form-group">
                                    <input type="password" v-model="password" placeholder="Password" class=" heigh form-control">
                                </div>
                                

                                <div class="form-group">
                                    <input type="submit" id="btn1" class="btn btn-primary btn-block"  value="Login">
                                    <a href="">Forgot your password ?</a>
                                    
                                   

                                   
                                </div>
                                
                 
                            </form>
                           
                      </div>
                      <div class="fo">

                      </div>
                 </div>

        </div>
              
                  
          </div>
          <div class="col-md-4"></div>
      </div>
  </div>
</template>

<script>
class Errors{
    constructor(){
        this.errors = {};
    }

    get(field){
        if(this.errors[field]){
            return this.errors[field][0];

        }
    }

    record(errors){
        this.errors = errors.errors;
    }
}


    export default {
  data () {
    return {
     username : null ,
     
     password : null,
     error1 :null ,
     errors : [],
     show1 : false,
     show2 : false
    
    }
  },
 
  methods: {

      loginUser(){
          this.$store.dispatch('login');
         this.axios.post('/login' , {username : this.username ,  password : this.password})
          .then((response) => {
              console.log(response);
              
              this.$store.commit("loginSuccess" , response)
              this.$router.push({path :'/main'});
          })
          .catch( error => {
             
              if(error.response.data.error){
                  this.error1 = error.response.data.message;
                  console.log(error.response.data.message);
              }
             
            if (error.response.data.errors){
                  this.errors = error.response.data.errors;
                  console.log(error.response.data.errors);
             }
             
         
              
          });
      }
    
  
  },
  
  computed : {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login{
    
    padding-top: 40px;
    padding-left: 34px;
    padding-right: 40px;
    padding-bottom: 40px;
    position: relative;
    background: #fff;
    max-width: 320px;
    width: 100%;
    border: 1px solid #ebeff2;
    border-top: 4px solid #3f51b5;
    margin: 0 auto;
    
}
h3{
        margin-bottom: 30px;
        color: #495057;
        text-align: center;
        
}
#btn1{
        cursor: pointer;
    background: #3f51b5;
    width: 100%;
    border: 0;
    padding: 6px 15px;
    color: #fff;
    -webkit-transition: .3s ease;
    transition: .3s ease;
    
}
.row input{
    border-radius: 0px;
}
.heigh{
    outline: none;
    display: block;
    width: 100%;
    border: 1px solid rgba(0,0,0,.125);
    margin: 0 0 20px;
    padding: 5px 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: .3s ease;
    transition: .3s ease;
    font-size: 13px!important;
}
h5 {
    margin: 0 0 20px;
    color: #6c757d;
    font-size: 18px;
    font-weight: 300;
    line-height: 1;
    text-align: center;
}
a{
    color: #6c757d;
    text-decoration: none;
    font-size: 13px;
    
    
}

.er{
    height: 200px;
    
    width: 100%;
}

</style>
