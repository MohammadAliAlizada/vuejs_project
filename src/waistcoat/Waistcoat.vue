<template>
    <div class="height animated fadeIn">

       <div class="row">
                          <div class="col-md-12">
                              <div style="float:left" >
                               <new :id="CustomerProfile" :waistcoats="waistcoat"></new>
                              </div>
                          </div>
                 </div>
      <div v-if="!waistcoat.length">
          <!-- <div class="ui active centered inline loader" style="margin-top:300px;"></div> -->
          <h1>No Waistcoat Available</h1>
      </div>
    
       <div v-else style="height:600px;">
          <div class="row" style="margin-top:10px;margin-right:30px;">
            <b-card
            v-for="wa in waistcoat" :key="wa.id"
            
          img-src="./img/kkk.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          @click="goDetails(wa.id)">
      <div class="row">
        <div class="col-md-12">
          <p>تاریخ مراجعه: <span class="c">{{wa.start_date}}</span> </p>
          <p>تاریخ تحویل:<span class="c">{{wa.end_date}}</span></p>
          <p>حالت:<span class="c" style="margin-right:50px;">{{wa.isComplete}}</span></p>
          <span class="badge badge-primary">{{wa.id}}</span>
          <!-- <span class="badge badge-primary">3</span> -->
          
        </div>
      </div>
     <!-- <div slot="footer">
                
      </div> -->
   
  </b-card>
  

        </div>
       
        

       </div>
       <div class="row" style="margin-top:40px;margin-right:30px;" v-if="waistcoat.length ">
          <div class="col-md-12">
             <b-pagination size="md" :total-rows="pagination.total" v-model="pagination.current_page" :per-page="pagination.per_page" v-on:input="changePage(pagination.current_page)">
             </b-pagination>
          </div>
        </div>
     
    
    </div>
</template>
<script>
import New from './Newwaistcoat';
export default {
   data () {
    return {
      n : 1,
      currentPage : 1,
    
     
 
  
      
     
    }
  },
  components : {

    'new' : New

  },
    computed : {
      
       CustomerProfile(){
          return this.$store.getters.customer;
      },
      waistcoat(){
        return this.$store.getters.waistcoat;
      },
      pagination(){
        return this.$store.getters.waistcoatPagination;
      }
   
    },
    methods : {
      // /customers/2?page=1
       goDetails(id) {
         this.$router.push({ name: 'waistcoatdetail' , params : {waistId : id}});
        
         },

      changePage(pageNo){
             this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
             this.axios.get('customers/'+this.CustomerProfile +'?include=waistcoat&page='+pageNo)
             .then((response) => {
                 console.log(response.data.data.waistcoat.data);
              
                 this.$store.commit('updateWaistcoat' , response.data.data.waistcoat.data);

                 
             })

         
         }

    },

    mounted(){
       this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');

       this.$store.dispatch("getWaistcoats");
      
        // this.axios.get('/customers/'+ this.CustomerProfile + '? include=waistcoat'  )
        // .then((response) => {
            
        //     this.waistcoat = response.data.data.waistcoat.data;
        //     this.pagination = response.data.data.waistcoat.meta.pagination;
        //     console.log(response.data.data.waistcoat.data);
        //      console.log(response.data.data.waistcoat.meta.pagination);
          
            
           


        // })
        // .catch((error) => {
        //     console.log(error);
        // })
    
  
    
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


