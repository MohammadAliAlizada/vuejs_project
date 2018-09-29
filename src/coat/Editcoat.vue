<template>
  <div>
    <a  v-b-modal.modalPrevent class="btn edit ng-star-inserted" style="margin-left:4px;" @click="mycoat" >
        <i  class="fa fa-pencil" style="color:#fff;"></i>
      </a>
    <b-modal 
         
           id="modalPrevent"
             ref="modal"
             title=" واسکت جدید "
             :width=300
             @ok="handleOk"
             centered 
             fadeIn
             @cancel="clean"
            
            
             button-size="sm"
             @shown="clearName"
              >
       <b-container fluid  style="padding:0px;">
           <form @submit.stop.prevent="handleSubmit" style="padding:10px ">
          <!-- first row -->
           <div class="row">
               <div class="col-md-12">
                   <div class="ui mini width form">
            <div class="fields">
                <div class="field">
                <label>قد</label>
                <input type="text"  v-model="coat.coat_length">
                <p class="er"><span>  {{errors.get('coat_length')}}</span></p>
                </div>
                <div class="field">
                <label>شانه</label>
                <input type="text" v-model="coat.coat_shoulder">
                 <p class="er"><span>  {{errors.get('coat_shoulder')}}</span></p>
                </div>

                <div class="field">
                <label>بغل</label>
                <input type="text" v-model="coat.chest">
                <p class="er"><span>  {{errors.get('chest')}}</span></p>
                </div>
                </div>
            </div>
               </div>
           </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="ui mini width form">
               <div class="fields">
                    <div class="field">
                    <label>کمر</label>
                    <input type="text"  v-model="coat.waist">
                    <p class="er"><span>  {{errors.get('waist')}}</span></p>
                    </div>
                    <div class="field">
                    <label>سورین</label>
                    <input type="text" v-model="coat.seat" >
                    <p class="er"><span>  {{errors.get('seat')}}</span></p>
                    </div>
                    <div class="field">
                        <label>آستین</label>
                    <input type="text"  v-model="coat.arm_length">
                    <p class="er"><span>  {{errors.get('arm_length')}}</span></p>
                    
                        
                    </div>
                </div>
            </div>
                </div>
            </div>
           <div class="row">
               <div class="col-md-12">
                    <div class="ui mini width form">
                    <div class="fields">
                            <div class="field">
                            <label>بازو</label>
                            <input type="text" v-model="coat.arm_round">
                            <p class="er"><span>  {{errors.get('arm_round')}}</span></p>
                            </div>
                             <div class="field">
                            <label>دیزاین یخن</label>
                            <sui-dropdown
                                    placeholder="دیزاین یخن"
                                    selection
                                    :options="neckDesigns"
                                    v-model="coat.neckDesign"
                                />
                                <p class="er"><span>  {{errors.get('neckDesign')}}</span></p>
                               
                              
                            </div>
                             <div class="field">
                            <label>دیزاین دوکمه</label>
                            <sui-dropdown
                                    placeholder="دوکمه"
                                    selection
                                    :options="buttons"
                                    v-model="coat.button"
                                />
                                <p class="er"><span>  {{errors.get('button')}}</span></p>
                           
                            </div>
                        </div>
                    </div>
               </div>
           </div>

           <div class="row">
               <div class="col-md-12">
                    <div class="ui mini width form">
                    <div class="fields">
                             <div class="field">
                            <label>چاک کرتی</label>
                            <sui-dropdown
                                    placeholder="چاک"
                                    selection
                                    :options="chaaks"
                                    v-model="coat.chaak"
                                /> 
                            <p class="er"><span>  {{errors.get('chaak')}}</span></p>                       
                            </div>
                             <div class="field">
                            <label>دیزاین دامن</label>
                            <sui-dropdown
                                    placeholder="دیزاین دامن"
                                    selection
                                    :options="skirtDesigns"
                                    v-model="coat.skirtDesign"
                                /> 
                            <p class="er"><span>  {{errors.get('skirtDesign')}}</span></p>                       
                            </div>
                            <div class="field">
                            <label>حالت</label>
                            <sui-dropdown
                                    placeholder="حالت"
                                    selection
                                    :options="isCompletes"
                                    v-model="coat.isComplete"
                                />
                            <p class="er"><span>  {{errors.get('isComplete')}}</span></p>
                            </div>
                           
                        </div>
                    </div>
               </div>
           </div>
           <div class="row">
               <div class="col-md-12">
                   <div class="ui form">
                       <label>فرمایشات</label>
                       
                        <div class="field">
                            <textarea rows="2" v-model="coat.order"></textarea>
                        </div>
                    </div>
               </div>
           </div>


           <div class="row">
               <div class="col-md-12">
                    <div class="ui mini width form" style="margin-top:30px;">
                    <div class="fields">
                            <div class="field">
                            <label>مجموع</label>
                            <input type="text" v-model="coat.total">
                            <p class="er"><span>  {{errors.get('total')}}</span></p>
                            </div>
                            <div class="field">
                            <label>رسید</label>
                            <input type="text" v-model="coat.received">
                            <p class="er"><span>  {{errors.get('received')}}</span></p>
                            </div>  
                            <div class="field">
                            <label>باقی</label>
                            <input type="text"  v-model="min" readonly>
                            </div>   
                        </div>
                    </div>
               </div>
           </div>

           <div class="row" style="margin-top:15px;">
               <div class="col-md-6">
                   <date-picker v-model="coat.start_date"   color=#3f51b5></date-picker>
                   <p class="er"><span>  {{errors.get('start_date')}}</span></p>
               </div>
               <div class="col-md-6">
                   <date-picker v-model="coat.end_date"  color=#3f51b5></date-picker>
                   <p class="er"><span>  {{errors.get('end_date')}}</span></p>
               </div>
           </div>


            

        
      </form>
      
       </b-container>
       <div slot="modal-footer" class="w-100">
       
         <div class="mini ui buttons" style="margin-right:10px;">
 
  <button class=" mini ui positive button rad" @click="handleOk" >Save</button>
  <div class="or"></div>
   <button class=" mini ui button rad"  @click="clean" >Cancel</button>
</div>
       </div>
    </b-modal>
  </div>
</template>

<script>
import validate from 'validate.js';
 import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
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
  props : [ 'id','editcoat'],
  data () {
    return {
      
        
          isCompletes: [
              {text: 'تحت کار',value: 1},
              {text: 'آماده تحویل',value: 2}    
             ],
          
           neckDesigns : [
               {text : 'هفت' , value : 1},
               {text : 'بالا' , value : 2},
               {text : 'آرشال' , value : 3},
             
           ],
          
           skirtDesigns : [
               {text : 'راست' , value : 1},
               {text : 'گول'  , value : 2},
            
           ],
       
           chaaks : [
               {text : 'بدون چاک'  , value : 1},
               {text : 'یک چاک' , value : 2},
               {text : 'دو چاک' , value : 3}
           ],

           buttons : [
               {text : 'یک دوکمه ای'  , value : 1},
               {text : 'دو دوکمه ای' , value : 2},
               {text : 'سه دوکمه ای' , value : 3}
           ],
        
       
        coat : {
            customer_id : null,
            coat_length : null ,
            coat_shoulder : null ,
            chest : null ,
            waist : null ,
            seat : null ,
            arm_length : null ,
            arm_round : null ,
            neckDesign : null ,
            button : null,
            chaak : null,
            skirtDesign : null ,
            order : null ,
            total : null ,
            received : null ,
            minus : null ,
            isComplete : null,
            start_date : null ,
            end_date : null

        },
        errors : new Errors()
   
    }
  },
  watch : {

  },
  computed : {
      min(){
         
         return this.coat.minus = this.coat.total - this.coat.received
      },
      

  },
  components: {
            datePicker: VuePersianDatetimePicker
        },
  methods: {
    mycoat(){
        this.coat.customer_id = this.editcoat.customer_id;

        this.coat.coat_length = this.editcoat.coat_length;
        this.coat.coat_shoulder = this.editcoat.coat_shoulder;
        this.coat.chest = this.editcoat.chest;
        this.coat.waist = this.editcoat.waist;

        this.coat.seat = this.editcoat.seat;
        this.coat.arm_length = this.editcoat.arm_length;
        this.coat.arm_round = this.editcoat.arm_round;

        this.coat.order = this.editcoat.order;


        if(this.editcoat.isComplete == "تحت کار"){
           
            this.coat.isComplete = 1;
           
        }else{
          
            this.coat.isComplete = 2;
        }


        
        if(this.editcoat.neckDesign == "هفت"){
            this.coat.neckDesign = 1;
        }else if (this.editcoat.neckDesign == "بالا") {
            this.coat.neckDesign = 2;
        } else {
            this.coat.neckDesign = 3;    
        }
        


        if(this.editcoat.button == "یک دوکمه ای"){

            this.coat.button = 1;

        }else if(this.editcoat.button == "دو دوکمه ای"){

            this.coat.button = 2;

        }else{

            this.coat.button = 3;
        }






        if(this.editcoat.chaak == "بدون چاک"){

            this.coat.chaak = 1;

        }else if(this.editcoat.chaak == "یک چاک"){

            this.coat.chaak = 2;

        }else{

            this.coat.chaak = 3;
        }



        if(this.editcoat.skirtDesign == "راست"){

            this.coat.skirtDesign = 1;

        }else{

            this.coat.skirtDesign = 2;
        }


        this.coat.start_date = this.editcoat.start_date;
        this.coat.end_date = this.editcoat.end_date;
       


        

    },
   
    clearName () {
        
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
          const constraints = this.getConstraints();

           const errors =  validate(this.$data.coat , constraints);
      if (errors) {
        this.errors.record(errors);
               console.log(errors)
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
       this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
           this.axios.patch('/coat/'+ this.id , this.$data.coat)
           .then((response) => {
               
                console.log(response);
                this.$store.dispatch('getSelectedCoat');
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
                coat_length : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                coat_shoulder : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                chest : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                waist : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                seat : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                arm_length : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                arm_round : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                neckDesign : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    }
                },
                button : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    }
                },
                chaak : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    }
                },
                skirtDesign: {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    }
                },
                isComplete: {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    }
                },
                total : {
                     presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }

                },
                received : {
                     presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                start_date : {
                     presence : {
                        message : '^ تاریخ موجود نیست'
                    },

                },
                end_date : {
                    presence : {
                        message : '^ تاریخ موجود نیست'
                    },
                }

            }
        }
  }
}
</script>
<style>
#modalPrevent___BV_modal_header_{
   padding: 10px !important;
  background-color: #f5f7fa;

}
.modal-header .close {
    padding: 1rem;
    margin: -1rem auto -1rem 0rem;
}

#modalPrevent___BV_modal_footer_{
   padding: 8px !important;
  background-color: #f5f7fa;

}
input{
border-radius: 4px !important;
}
input{
    text-align: center !important;
    border-radius: 1px !important;
    float:left;
}
.vpd-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
    z-index: 9999;
}
.modal-body {
    position: relative;
    -webkit-box-flex: 1;
    max-height: 439px;
    overflow-y: auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    /* padding: 1rem; */
}
.ui.selection.dropdown {
    min-width: 140px !important;
}

.ui.dropdown>.text {
    margin-left: 40px;
}
.ui.dropdown .menu>.item {
  color: #6c757d !important
}
.ui.selection.dropdown .menu>.item {
    text-align: center;
}
.er{
    color: #cc0000;
}
</style>
