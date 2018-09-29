<template>
  <div>
    <b-btn v-b-modal.modalPrevent variant="primary" class="btn btn-sm" > مشتری جدید</b-btn>
    <br>
    <!-- Main UI -->
   
    <!-- Modal Component -->
    <b-modal id="modalPrevent"
             ref="modal"
             title="مشتری جدید"
             :width=100
             @ok="handleOk"
             
             @cancel="clean"
             hide-footer
            hide-header-close
             button-size="sm"
             @shown="clearName"
             >
      <form @submit.stop.prevent="handleSubmit" style="padding:10px ">
            
                





               

                   <div class="form-group">
                      <label for="name">نام</label> <br>
                     

                      <div class="ui fluid icon input">
                        <input type="text" class="form-control" v-model="customer.name">
                        <i class="Small violet add user icon"></i>
                      </div>

                       <p><span>  {{errors.get('name')}}</span></p>
                  </div>


                  <div class="form-group">
                      <label for="lastname">تخلص</label> <br>
                     

                      <div class="ui fluid icon input">
                        <input type="text" class="form-control" v-model="customer.lastname">
                        <i class="Small violet users icon"></i>
                      </div>
                       <p><span>  {{errors.get('lastname')}}</span></p>
                  </div>

                  <div class="form-group">
                      <label for="phone">شماره تیلفون</label>  <br>
                      
                      <div class="ui fluid  icon input">
                        <input type="text" class="form-control" v-model="customer.phone">
                        <i class="Small violet tablet icon"></i>
                      </div>
                       <p><span>  {{errors.get('phone')}}</span></p>
                  </div>


                  





                 

      </form>
<div class="mini ui buttons" style="margin-right:10px;">
 
  <button class=" mini ui positive button rad" @click="handleOk">Save</button>
  <div class="or"></div>
   <button class=" mini ui button rad" @click="clean">Cancel</button>
</div>
    </b-modal>
  </div>
</template>

<script>
 import validate from 'validate.js';
class Errors{
    constructor(){
        this.errors = {};
    }

    get(field){
        if(this.errors[field]){

            return this.errors[field][0];

            // for(var i=0 ; i< this.errors[field].length ; i++){
            //     return this.errors[field][i];
            // }
            

        }
    }

    record(errors){
        this.errors = errors;
    }
}
export default {
  data () {
    return {
        customer : {
                name : '',
                lastname : '',
                phone : '' 
            },
            errors : new Errors()
   
    }
  },
  methods: {
    clearName () {
      this.customer.name = '',
      this.customer.lastname = '',
      this.customer.phone = ''
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
          const constraints = this.getConstraints();

           const errors =  validate(this.$data.customer , constraints);
      if (errors) {
        this.errors.record(errors);
               console.log(errors)
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
       this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
           this.axios.post('/customers' , this.$data.customer)
           .then((response) => {
               this.$router.push('/main');
               this.$store.dispatch('getCustomers');
                this.$refs.modal.hide();
                this.errors.record('');
           })
           .catch((error)=> {
               console.log(error);
           })
    },
    clean(){
         this.$refs.modal.hide()
         this.errors.record('');
    },
     getConstraints(){
            return{
                name : {
                    presence : true,
                    length : {
                        minimum : 3 ,
                        message : '^Must be at least 3 characters '
                    },
                  

                  
                },
                lastname : {
                    presence : true,
                    length : {
                        minimum : 3 ,
                        message : '^Must be at least 3 characters '
                    },
                 
                },
                phone : {
                    presence : true,
                   
            
                    length : {
                        minimum : 10 ,
                        message : 'Must be at least 10 characters '
                    }
                }
            }
        }
  }
}
</script>
<style>
p{
    color: #E32943;
    margin-left: 3px;
}
.marj{
    margin-top: 40px;
}

tr:hover {
     cursor: pointer;
}



</style>
