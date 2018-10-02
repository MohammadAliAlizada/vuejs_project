<template>
   <div class="height animated fadeIn">

       <div class="card card-table">
           <div class="card-header" style="height:120px;background-color:#fff;border-bottom:none">
                 <div class="row">
                          <div class="col-md-12">
                              <h3>پیراهن وتنبان <span class="badge badge-primary badge-pill">{{id}}</span></h3>
                          </div>
                 </div>
                  <div class="row" style="margin-top:40px;">
                         
                          <div class="col-md-12">
             
        
          
                                    <div style="float:right">
                                    <a  class="btn edit ng-star-inserted" style="margin-left:4px;">
                                        <i  class="fa fa-pencil" style="color:#fff;"></i>
                                    </a>

                                    <a  class="btn delete ng-star-inserted" @click="deleteShirt">
                                        <i class="fa fa-trash" style="color:#fff;"></i>
                                    </a>
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
                <td >{{shirt.shirt_length }} </td>
              </tr>
               <tr >
                <td >شانه</td>
                <td >{{shirt.shirt_shoulder }} </td>
              </tr>
               <tr >
                <td >آستین</td>
                <td >{{shirt.sleeve }} </td>
              </tr>
               <tr >
                <td >بغل</td>
                <td >{{shirt.chest }} </td>
              </tr>
               <tr >
                <td >کمر</td>
                <td >{{shirt.waist }} </td>
              </tr>
               <tr >
                <td >سورین</td>
                <td >{{shirt.seat }} </td>
              </tr>
               <tr >
                <td >بر بازو</td>
                <td >{{shirt.shirt_arm }} </td>
              </tr>
               <tr >
                <td >دیزاین یخن</td>
                <td >{{shirt.neckDesign }} </td>
              </tr>
               <tr >
                <td >دیزاین آستین</td>
                <td >{{shirt.sleeveDesign }} </td>
              </tr>
               <tr >
                <td >دیزاین دامن</td>
                <td >{{shirt.skirtDesign }} </td>
              </tr>
               <tr >
                <td >فرمایشات</td>
                <td >{{shirt.orders }} </td>
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
                <td >{{shirt.startDate}} </td>
              </tr>
               <tr >
                <td >تاریخ تحویل</td>
                <td >{{shirt.endDate}} </td>
              </tr>
               <tr >
                <td >مجمموع</td>
                <td >{{shirt.total }} </td>
              </tr>
                 <tr >
                <td >مقدار پرداخت شده</td>
                <td >{{shirt.received }} </td>
              </tr>
              
            
               <tr >
                <td >باقی</td>
                <td >{{shirt.minus}} </td>
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
export default {
    data(){
      return{
        id : this.$route.params.shirtId
      }

    },
    computed : {
        shirt(){
            return this.$store.getters.mySelectedShirt;
        },
        customerProfile(){
          return this.$store.getters.customer;
        }
      
    },
    created(){

        this.$store.commit("comSelectedShirtId" , this.id);

    },
    mounted(){
        this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
        this.$store.dispatch('getSelectedShirt');
   },
   methods : {
     deleteShirt(){
        this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
            this.axios.delete('/shirts/' + this.id)
            .then((response) => {

            
              console.log("deleted Successfully");
              this.$router.push('/order/' + this.customerProfile + '/shirt' );
            
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


