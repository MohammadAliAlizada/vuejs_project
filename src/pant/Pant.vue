<template>
    <div class="height animated fadeIn">

       <div class="row">
                          <div class="col-md-12">
                              <div style="float:left" >
                               <!-- <button class="btn btn-primary" ><i class="plus icon" style="margin-left:5px;"></i>پتلون جدید</button> -->
                               <new></new>
                              </div>
                          </div>
                 </div>
      <div v-if="!pants.length">
          <!-- <div class="ui active centered inline loader" style="margin-top:300px;"></div> -->
          <h1>No Pant Available</h1>
      </div>
       
       <div v-else style="height:600px;">
          <div class="row" style="margin-top:10px;margin-right:30px;">
            <b-card
            v-for="pant in pants" :key="pant.id"
            
          img-src="./img/pant1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          @click="goDetails(pant.id)">
      <div class="row">
        <div class="col-md-12">
          <p>تاریخ مراجعه: <span class="c">{{pant.startDate}}</span> </p>
          <p>تاریخ تحویل:<span class="c">{{pant.endDate}}</span></p>
          <p>حالت:<span class="c" style="margin-right:50px;">{{pant.isComplete}}</span></p>
          <span class="badge badge-primary">{{pant.id}}</span>
          <!-- <span class="badge badge-primary">3</span> -->
          
        </div>
      </div>
     <!-- <div slot="footer">
                
      </div> -->
   
  </b-card>
  

        </div>
       
        

       </div>
       <div class="row" style="margin-top:50px;margin-right:30px;" v-if="pants.length ">
          <div class="col-md-12">
             <b-pagination size="md" :total-rows="pagination.total" v-model="pagination.current_page" :per-page="pagination.per_page" v-on:input="changePage(pagination.current_page)">
             </b-pagination>
          </div>
        </div>
     
    
    </div>
</template>
<script>
import New from './Newpant'
export default {
   data () {
    return {
   
 
  
      
     
    }
  },
  components : {
      new : New
  },
    computed : {
      
       CustomerProfile(){
          return this.$store.getters.customer;
      },
      pants(){

          return this.$store.getters.pants;
      },
      pagination(){
          return this.$store.getters.pantPagination;
      },
     
   
    },
    methods : {
      
       goDetails(id) {
         this.$router.push({ name: 'pantdetail' , params : {pantId : id}});
        
         },

      changePage(pageNo){
             this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
             this.axios.get('customers/'+this.CustomerProfile +'?include=pant&page='+pageNo)
             .then((response) => {
                 console.log(response.data.data.pant.data);
                 
                 this.$store.commit("updatePant" , response.data.data.pant.data);

                 
             })

         
         }

    },

    mounted(){
       this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');

       this.$store.dispatch("getPants");
       
  
    
    },



}
</script>
<style scoped>
.mb-2{
  margin-right: 15px;
  margin-bottom: 20px !important;
  max-width: 190px !important;
  min-height: 200px !important;
  box-shadow: 1px 1px 5px -2px;
  cursor: pointer;
  padding-bottom: 0px;
  
  
}
.mb-2 .card-footer{
  background-color: #f5f5f5;
  
}
p{
  color:#6c757d !important;

}
.c{
  margin-right: 15px;
}
.card-img-top {
  max-height: 160px;
}
/* .badge{
  padding: 5px;
} */
</style>


