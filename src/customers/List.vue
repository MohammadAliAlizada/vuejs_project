<template>
   
        <div class="height">
            <div class="animated fadeIn">

               <div v-if="!customers.length">
                   <div class="ui active centered inline loader" style="margin-top:300px;"></div>
               </div>
          
           
                <div v-else>
                    <div class="card card-table">
                    <div class="card-header" style="height:120px;background-color:#fff;border-bottom:none" >
                      <div class="row">
                          <div class="col-md-12">
                              <h3>مشتری ها</h3>
                          </div>
                      </div>
                     <div class="row" style="margin-top:20px;">
                          <div class="col-md-12">
                              <div class="float-right"><button class="btn btn-primary btn-sm">اضافه کردن فیلتر</button></div>
                             <div class="float-left"><model></model></div>
                             
                          </div>
                     </div>
                    </div>
                    <div class="card-body" style="padding:0px;">
                         <!-- <div class="float-right text-right" style="margin-bottom:10px;" ><input type="text" class="form-control" style="border-radius:0;float:right" placeholder="جستجو..."></div> -->
                         <table class="ui compact striped table " style="margin-top:-2px;border:none;">
                            
                            <thead >
                                <th>آی دی</th>
                                <th>اسم</th>
                                <th>تخلص</th>
                                <th>شماره تیلفون</th>
                                

                            </thead>
                            <tbody >
                                <template v-if="!customers.length">
                                    <tr>
                                        <td colspan="5" class="text-center">NO Customers Available</td>
                                        
                                    </tr>

                                </template>
                                <template v-else>
                                    <tr v-for="customer in customers" :key="customer.id"  @click="goCustomerProfile(customer.id)">
                                        <td>{{customer.id}}</td>
                                        <td>{{customer.name}}</td>
                                        <td>{{customer.lastName}}</td>
                                        <td>{{customer.phoneNumber}}</td>
                                        
                                    </tr>
                                    

                                </template>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer" style="height:60px;background-color:#fff;">
                      
                     

                    
                         <!-- <div >
                             <div v-for="pageNo in paginations.total_pages" :key="pageNo"> 
                                 
                                 <div v-if="pageNo==paginations.current_page">
                                      <a @click="changePage(pageNo)" href="#" class="btn btn-primary">First Page</a>

                                 </div>
                                 <div v-if="pageNo!=paginations.current_page && pageNo!=paginations.total_pages">

                                     <a @click="changePage(pageNo)" href="#" class="pagination-link">{{pageNo}}</a>

                                 </div>

                                 <div v-if="pageNo==paginations.total_pages">
                                     <a @click="changePage(pageNo)" href="#" class="btn btn-primary">LastPage Page</a>

                                 </div>

                             </div>
                         </div> -->

                         

  <b-pagination size="md" :total-rows="paginations.total" v-model="paginations.current_page" :per-page="paginations.per_page" v-on:input="changePage(paginations.current_page)">
    </b-pagination>
                     
                      
                    </div>
                </div>

                
            
                </div>
        </div>
        
        </div>
        
    
</template>
<script>
import Modal from './Modal.vue';

export default {
    data(){
        return{
           
            currentPage: 1
        }
    },
    components : {
        'model' : Modal,
       

    },
    created(){
   
    this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
   


        this.$store.dispatch('getCustomers');

    },
    computed : {
        customers(){
            return  this.$store.getters.customers;
        },
        totalRow(){
            return this.$store.getters.customers.length
        },
        paginations(){
            return this.$store.getters.customerPagination;
        }
    },
    methods : {
         goCustomerProfile(id) {
         this.$router.push({ name: 'order' , params : {id : id}});
        
         },
         changePage(pageNo){
             this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
             this.axios.get('customers?page='+pageNo)
             .then((response) => {
                 console.log(response.data.data);
                 this.$store.commit('updateCustomer' , response.data.data);
             })

         
         }
    }
}
</script>
<style scoped>
th{
 /* padding: 10px !important; */
}
tr{
    border: none;
   
}
th , td{
     /* padding-right:40px !important; */
     text-align: right !important;
     padding-right: 50px !important;
}
</style>


 