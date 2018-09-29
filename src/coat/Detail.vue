<template>
   <div class="height animated fadeIn">

       <div class="card card-table">
           <div class="card-header" style="height:120px;background-color:#fff;border-bottom:none">
                 <div class="row">
                          <div class="col-md-12">
                              <h3>کرتی <span class="badge badge-primary badge-pill">{{id}}</span></h3>
                          </div>
                 </div>
                  <div class="row" style="margin-top:40px;">
                         
                          <div class="col-md-12">
             
        
          
                                    <div style="float:right">
                                    <!-- <a  class="btn edit ng-star-inserted" style="margin-left:4px;">
                                        <i  class="fa fa-pencil" style="color:#fff;"></i>
                                    </a> -->


                                    <!-- <a  class="btn delete ng-star-inserted" @click="deleteCoat">
                                        <i class="fa fa-trash" style="color:#fff;"></i>
                                    </a> -->

                                     <div class="row">
                                       <div class="col-md-6" ><edit :id="id" :editcoat="coat"></edit></div>
                                       <div class="col-md-6" style="padding:0px;padding-right:2px"> 
                                           <a  class="btn delete ng-star-inserted" @click="deleteCoat">
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
      <div class="col-md-6"><table  class="ui compact table" style="border-top:none;border-right:none;border-bottom:none;" >
            <thead style="background-color:#EEE">
              <tr>
                <th>مشخصات</th>
                <th >اندازه</th>
              </tr>
            </thead>

            <tbody >
              <tr >
                <td >قد</td>
                <td >{{coat.coat_length}} </td>
              </tr>
               <tr >
                <td >شانه</td>
                <td >{{coat.coat_shoulder}} </td>
              </tr>
               <tr >
                <td >بغل</td>
                <td >{{coat.chest}}</td>
              </tr>
               <tr >
                <td >کمر</td>
                <td >{{coat.waist}} </td>
              </tr>
               <tr >
                <td >سورین</td>
                <td >{{coat.seat}} </td>
              </tr>
               <tr >
                <td >آستین</td>
                <td >{{coat.arm_length}} </td>
              </tr>
               <tr >
                <td >بر بازو</td>
                <td >{{coat.arm_round}} </td>
              </tr>
               <tr >
                <td >دیزاین یخن</td>
                <td >{{coat.neckDesign}} </td>
              </tr>
               <tr >
                <td >دیزاین دوکمه</td>
                <td >{{coat.button}} </td>
              </tr>
               <tr >
                <td >چاک کرتی</td>
                <td >{{coat.chaak}} </td>
              </tr>
               <tr >
                <td >دیزاین دامن</td>
                <td >{{coat.skirtDesign}} </td>
              </tr>
               <tr >
                <td >فرمایشات</td>
                <td >{{coat.order}} </td>
              </tr>
              

             
            </tbody>
          </table></div>
      <div class="col-md-6"><table  class="ui compact table" style="border-left:none;border-top:none;">
            <thead style="background-color:#EEE">
              <tr>
                <th>تاریخ/پرداخت</th>
                <th >مقدار</th>
              </tr>
            </thead>

            <tbody >
                 <tr >
                <td >تاریخ مراجعه</td>
                <td >{{coat.start_date}} </td>
              </tr>
               <tr >
                <td >تاریخ تحویل</td>
                <td >{{coat.end_date}} </td>
              </tr>
               <tr >
                <td >مجموع </td>
                <td >{{coat.total}} </td>
              </tr>
               <tr >
                <td >رسید</td>
                <td >{{coat.received}} </td>
              </tr>
               <tr >
                <td >باقی</td>
                <td >{{coat.minus}} </td>
              </tr>
               <tr >
                <td >حالت</td>
                <td ><span class="badge badge-primary badge-pill" style="padding:5px;">{{coat.isComplete}}</span> </td>
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
import Edit from './Editcoat';
export default {
    data(){
      return{
        id : this.$route.params.coatId
      }

    },
    computed : {
      selectedcoatid(){
        return this.$store.getters.SelectedCoatId;
      },
      coat(){
        return this.$store.getters.mySelectedCoat;
      },
      customerProfile(){
        return this.$store.getters.customer;
      }
      
    },
    components : {
      edit : Edit
    },
   
    
    created(){
      this.$store.commit("comSelectedCoatId" , this.id);
    },
    mounted(){
      console.log(this.customerProfile);
       this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');

      this.$store.dispatch('getSelectedCoat');
    },
    methods : {
      
      deleteCoat(){
            this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
            this.axios.delete('/coat/' + this.id)
            .then((response) => {

            
              console.log("deleted Successfully");
              this.$router.push('/order/' + this.customerProfile + '/coat' );
            
            })
            .catch((error) => {
              console.log(error);
            })
      }
    },

  
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


