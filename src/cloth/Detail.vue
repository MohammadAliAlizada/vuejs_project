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

                                    <a  class="btn delete ng-star-inserted">
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
                <td >61900 </td>
              </tr>
               <tr >
                <td >شانه</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >آستین</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >کمر</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >بازو</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >بند دست</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >بر بازو</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >بر شانه</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >کمر</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >دور باسن</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >یخن</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >دور بازو</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >جیب</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >شانه</td>
                <td >61900 </td>
              </tr>

             
            </tbody>
          </table></div>
      <div class="col-md-6"><table  class="ui compact table" style="border-left:none;border-top:none;">
            <thead style="background-color:#EEE">
              <tr>
                <th>مشخصات</th>
                <th >دیزاین</th>
              </tr>
            </thead>

            <tbody >
                 <tr >
                <td >بر شانه</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >کمر</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >دور باسن</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >یخن</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >دور بازو</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >جیب</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >شانه</td>
                <td >61900 </td>
              </tr>
             

             
            </tbody>
          </table>
          
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
                <td >1395/4/4 </td>
              </tr>
               <tr >
                <td >تاریخ تحویل</td>
                <td >1395/6/3 </td>
              </tr>
                 <tr >
                <td >مقدار پرداخت شده</td>
                <td >61900 </td>
              </tr>
               <tr >
                <td >مجمموع</td>
                <td >61900 </td>
              </tr>
            
               <tr >
                <td >باقی</td>
                <td >0 </td>
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
        id : this.$route.params.clothId
      }

    },
    computed : {
      
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


