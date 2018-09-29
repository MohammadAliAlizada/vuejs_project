<template>
   <div class="height animated fadeIn">

       <div class="card card-table">
           <div class="card-header" style="height:120px;background-color:#fff;border-bottom:none">
                 <div class="row">
                          <div class="col-md-12">
                              <h3>پتلون <span class="badge badge-primary badge-pill">{{id}}</span></h3>
                          </div>
                 </div>
                  <div class="row" style="margin-top:40px;">
                         
                          <div class="col-md-12">
             
        
          
                                    <div style="float:right">
                                    <!-- <a  class="btn edit ng-star-inserted" style="margin-left:4px;">
                                        <i  class="fa fa-pencil" style="color:#fff;"></i>
                                    </a>

                                    <a  class="btn delete ng-star-inserted" @click="deletePant">
                                        <i class="fa fa-trash" style="color:#fff;"></i>
                                    </a>
                                    <edit></edit> -->



                                    <div class="row">
                                       <div class="col-md-6" ><edit :id="id" :editpant="pant"></edit></div>
                                       <div class="col-md-6" style="padding:0px;padding-right:2px"> 
                                           <a  class="btn delete ng-star-inserted" @click="deletePant">
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
                <td >قد پتلون</td>
                <td >{{pant.pant_length}} </td>
              </tr>
               <tr >
                <td >کمر</td>
                <td >{{pant.waist}} </td>
              </tr>
               <tr >
                <td >سورین</td>
                <td >{{pant.seat}}  </td>
              </tr>
               <tr >
                <td >زانو</td>
                <td >{{pant.Knee}}  </td>
              </tr>
               <tr >
                <td >پاچه</td>
                <td >{{pant.cuff}}  </td>
              </tr>
               <tr >
                <td >فاق</td>
                <td >{{pant.zepberfly}}  </td>
              </tr>
               <tr >
                <td >پت</td>
                <td >{{pant.thigh}} </td>
              </tr>
               <tr >
                <td >پلیت</td>
                <td >{{pant.palet}} </td>
              </tr>
               <tr >
                <td >پاچه</td>
                <td >{{pant.pacha}}  </td>
              </tr>
               <tr >
                <td >فرمایشات</td>
                <td >{{pant.order}}  </td>
              </tr>
             

             
            </tbody>
          </table></div>
      <div class="col-md-6"><table  class="ui compact table" style="border-left:none;border-top:none;">
            <thead style="background-color:#EEE">
              <tr>
                <th>تاریخ/پرداخت</th>
                <th >دیزاین</th>
              </tr>
            </thead>

            <tbody >
                 <tr >
                <td >تاریخ مراجعه</td>
                <td >{{pant.startDate}}  </td>
              </tr>
               <tr >
                <td >تاریخ تحویل</td>
                <td >{{pant.endDate}}  </td>
              </tr>
               <tr >
                <td >مجموع</td>
                <td >{{pant.total}}  </td>
              </tr>
               <tr >
                <td >رسید</td>
                <td >{{pant.received}}  </td>
              </tr>
               <tr >
                <td >باقی</td>
                <td >{{pant.minus}}  </td>
              </tr>
               <tr >
                <td >حالت</td>
                <td > <span class="badge badge-primary badge-pill" style="padding:5px;">{{pant.isComplete}}</span> </td>
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
import Edit from './Editpant'
export default {
    data(){
      return{
        id : this.$route.params.pantId
      }

    },
    computed : {
      pant(){
        return this.$store.getters.mySelectedPant;
      }
      
    },
    created(){
      this.$store.commit("comSelectedPantId" , this.id);
    },
    mounted(){
      this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');

      this.$store.dispatch('getSelectedPant');
    },
    components : {
      edit : Edit
    },
    methods : {
      deletePant(){
         this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
            this.axios.delete('/pants/' + this.id)
            .then((response) => {

            
              console.log("deleted Successfully");
              this.$router.push('/order/' + this.customerProfile + '/pant' );
            
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


