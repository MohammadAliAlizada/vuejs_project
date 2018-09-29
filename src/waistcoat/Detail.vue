<template>
   <div class="height animated fadeIn">

       <div class="card card-table">
           <div class="card-header" style="height:120px;background-color:#fff;border-bottom:none">
                 <div class="row">
                          <div class="col-md-12">
                              <h3>واسکت <span class="badge badge-primary badge-pill">{{id}}</span></h3>
                          </div>
                 </div>
                  <div class="row" style="margin-top:40px;">
                         
                          <div class="col-md-12">
             
        
          
                                    <div style="float:right;">
                                    <!-- <a  class="btn edit ng-star-inserted" style="margin-left:4px;">
                                        <i  class="fa fa-pencil" style="color:#fff;"></i>
                                    </a> -->
                                     <div class="row">
                                       <div class="col-md-6" ><edit :editwaistcoat="waitcoat"  :id="id" ></edit></div>
                                       <div class="col-md-6" style="padding:0px;padding-right:2px"> 
                                           <a  class="btn delete ng-star-inserted" @click="deleteWaistcoat">
                                            <i class="fa fa-trash" style="color:#fff;"></i>
                                           </a>
                                         </div>
                                     </div>
                                    

                                   
                                    </div>

                                    <div style="float:left">
                                    <a  class="btn edit ng-star-inserted" style="margin-left:4px;">
                                        <i  class="print icon" style="color:#fff;"></i>
                                        <strong style="color:#fff;margin-right:5px;">Print</strong>
                                    </a>

                                    
                                    </div>
                            </div>
                </div>
           </div>
           <div class="card-body" style="padding:0px;">
              <div class="row">
      <div class="col-md-6"><table  class="ui compact table" style="border-top:none;border-right:none;" >
            <thead style="background-color:#EEE">
              <tr>
                <th>مشخصات</th>
                <th >اندازه / دیزاین</th>
              </tr>
            </thead>

            <tbody >
              <tr >
                <td >قد</td>
                <td >{{waitcoat.height}} </td>
              </tr>
               <tr >
                <td >شانه</td>
                <td >{{waitcoat.shoulder}} </td>
              </tr>
               <tr >
                <td >بغل</td>
                <td >{{waitcoat.chest}} </td>
              </tr>
               <tr >
                <td >کمر</td>
                <td >{{waitcoat.waist}} </td>
              </tr>
               <tr >
                <td >سورین</td>
                <td >{{waitcoat.seat}}</td>
              </tr>
               <tr >
                <td >یخن</td>
                <td >{{waitcoat.neck}} </td>
              </tr>
               <tr >
                <td >قول</td>
                <td >{{waitcoat.armpit}}</td>
              </tr>
               <tr >
                <td >دیزاین یخن</td>
                <td >{{waitcoat.neckDesign}} </td>
              </tr>
               <tr >
                <td >دیزاین دامن</td>
                <td >{{waitcoat.skirtDesign}} </td>
              </tr>
               <tr >
                <td >دیزاین سینه</td>
                <td > {{waitcoat.breastDesign}} </td>
              </tr>
               <tr >
                <td >فرمایشات</td>
                <td >{{waitcoat.order}} </td>
              </tr>
              

             
            </tbody>
          </table></div>
      <div class="col-md-6">
          
          <table  class="ui compact table" style="border-top:none;border-left:none;">
            <thead style="background-color:#EEE">
              <tr>
                <th>تاریخ/پرداخت</th>
                <th >مقدار</th>
              </tr>
            </thead>

            <tbody >
               <tr >
                <td >تاریخ مراجعه</td>
                <td >{{waitcoat.start_date}} </td>
              </tr>
               <tr >
                <td >تاریخ تحویل</td>
                <td >{{waitcoat.end_date}} </td>
              </tr>

               <tr >
                <td >مجمموع</td>
                <td >{{waitcoat.total}}</td>
              </tr>

              <tr >
                <td >مقدار پرداخت شده</td>
                <td >{{waitcoat.received}} </td>
              </tr>
              
            
               <tr >
                <td >باقی</td>
                <td >{{waitcoat.minus}}</td>
              </tr>
              
               
               
             

             
            </tbody>
          </table>
          
          </div>
    </div>

           </div>
       </div>
        
   </div>
</template>
<script>
import Edit from './Editwaistcoat';
export default {
    data(){
      return{
        id : this.$route.params.waistId,
        // waitcoat : []
      }

    },
    computed : {
      customerProfile(){
        return this.$store.getters.customer;
      },
      waitcoat(){
        return this.$store.getters.mySelectedWaistcoat;
      }

      
    },
    components : {

      edit : Edit

    },
    created(){

      this.$store.commit("comSelectedWaistcoatId" , this.id);

     

    },

    mounted(){
      this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');

      this.$store.dispatch('getSelectedWaistcoat');
      // this.axios.get('/waistcoats/' + this.id)
      // .then((response) => {

      //   console.log(response.data.data);
      //   console.log(this.id);
      //   this.waitcoat = response.data.data;
     
      // })
      // .catch((error) => {
      //   console.log(error);
      // })
    },
    methods : {
      deleteWaistcoat(){
        this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
      this.axios.delete('/waistcoats/' + this.id)
      .then((response) => {

       
        console.log("deleted Successfully");
        this.$router.push('/order/' + this.customerProfile + '/waistcoat' );
       
      })
      .catch((error) => {
        console.log(error);
      })
      }
    }
}
</script>
<style>
th , td {
    text-align: right !important;
}
.btn.edit {
    background-color: #2d3fad;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.btn.delete {
    background-color: #2d3fad;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
/* p{
  color: #000 !important;
} */

</style>


