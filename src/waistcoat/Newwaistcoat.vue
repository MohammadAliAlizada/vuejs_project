<template>
  <div>
    <b-btn v-b-modal.modalPrevent size="sm" variant="primary" @click="waistcoatMapping"><i class="plus icon" style="margin-left:5px;"></i>واسکت جدید</b-btn>
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
                <input type="text"  v-model="waistcoat.height">
                <p class="er"><span>  {{errors.get('height')}}</span></p>
                </div>
                <div class="field">
                <label>شانه</label>
                <input type="text" v-model="waistcoat.shoulder">
                 <p class="er"><span>  {{errors.get('shoulder')}}</span></p>
                </div>

                <div class="field">
                <label>بغل</label>
                <input type="text" v-model="waistcoat.chest">
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
                    <input type="text"  v-model="waistcoat.waist">
                    <p class="er"><span>  {{errors.get('waist')}}</span></p>
                    </div>
                    <div class="field">
                    <label>سورین</label>
                    <input type="text" v-model="waistcoat.seat" >
                    <p class="er"><span>  {{errors.get('seat')}}</span></p>
                    </div>
                    <div class="field">
                        <label>یخن</label>
                    <input type="text"  v-model="waistcoat.neck">
                    <p class="er"><span>  {{errors.get('neck')}}</span></p>
                    
                        
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
                            <label>قول</label>
                            <input type="text" v-model="waistcoat.armpit">
                            <p class="er"><span>  {{errors.get('armpit')}}</span></p>
                            </div>
                             <div class="field">
                            <label>دیزاین یخن</label>
                            <sui-dropdown
                                    placeholder="دیزاین یخن"
                                    selection
                                    :options="neckDesigns"
                                    v-model="waistcoat.neckDesign"
                                />
                                <p class="er"><span>  {{errors.get('neckDesign')}}</span></p>
                               
                              
                            </div>
                             <div class="field">
                            <label>دیزاین دامن</label>
                            <sui-dropdown
                                    placeholder="دیزاین دامن"
                                    selection
                                    :options="skirtDesigns"
                                    v-model="waistcoat.skirtDesign"
                                />
                                <p class="er"><span>  {{errors.get('skirtDesign')}}</span></p>
                           
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
                            <label>دیزاین سینه</label>
                            <sui-dropdown
                                    placeholder="دیزاین سینه"
                                    selection
                                    :options="breastDesigns"
                                    v-model="waistcoat.breastDesign"
                                /> 
                            <p class="er"><span>  {{errors.get('breastDesign')}}</span></p>                       
                            </div>
                            <div class="field">
                            <label>حالت</label>
                            <sui-dropdown
                                    placeholder="حالت"
                                    selection
                                    :options="isCompletes"
                                    v-model="waistcoat.isComplete"
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
                            <textarea rows="2" v-model="waistcoat.order"></textarea>
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
                            <input type="text" v-model="waistcoat.total">
                            <p class="er"><span>  {{errors.get('total')}}</span></p>
                            </div>
                            <div class="field">
                            <label>رسید</label>
                            <input type="text" v-model="waistcoat.received">
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
                   <date-picker v-model="waistcoat.start_date"   color=#3f51b5></date-picker>
                   <p class="er"><span>  {{errors.get('start_date')}}</span></p>
               </div>
               <div class="col-md-6">
                   <date-picker v-model="waistcoat.end_date"  color=#3f51b5></date-picker>
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
  props : ['id' , 'waistcoats'],
  data () {
    return {
      
        
          isCompletes: [
              {text: 'تحت کار',value: 1},
              {text: 'آماده تحویل',value: 2}    
             ],
          
           neckDesigns : [
               {text : 'هفت' , value : 1},
               {text : 'گرد' , value : 2},
               {text : 'پاکستانی' , value : 3},
               {text : 'گول' , value : 4}
           ],
          
           skirtDesigns : [
               {text : 'راست' , value : 1},
               {text : 'گول'  , value : 2},
               {text : 'هفت'  , value : 3}
           ],
       
           breastDesigns : [
               {text : 'یک سینه ای'  , value : 1},
               {text : 'دوسینه ای' , value : 2}
           ],
        
       
        waistcoat : {
            customer_id : this.id,
            height : null ,
            shoulder : null ,
            chest : null ,
            waist : null ,
            seat : null ,
            neck : null ,
            armpit : null ,
            neckDesign : null ,
            skirtDesign : null ,
            breastDesign : null ,
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
         
         return this.waistcoat.minus = this.waistcoat.total - this.waistcoat.received
      },
      lastWaistcoat(){
          return this.$store.getters.lastWaistcoat;
      }

  },
  components: {
            datePicker: VuePersianDatetimePicker
        },
  methods: {
    waistcoatMapping(){

        this.waistcoat.height = this.lastWaistcoat.height;
        this.waistcoat.shoulder = this.lastWaistcoat.shoulder;
        this.waistcoat.chest = this.lastWaistcoat.chest;
        this.waistcoat.waist = this.lastWaistcoat.waist;

        this.waistcoat.seat = this.lastWaistcoat.seat;
        this.waistcoat.neck = this.lastWaistcoat.neck;
        this.waistcoat.armpit = this.lastWaistcoat.armpit;

        this.waistcoat.order = this.lastWaistcoat.order;


        if(this.lastWaistcoat.isComplete == "آماده تحویل"){
           
            this.waistcoat.isComplete = 1;
           
        }else{
          
            this.waistcoat.isComplete = 2;
        }


        if(this.lastWaistcoat.breastDesign == "یک سینه ای"){

            this.waistcoat.breastDesign = 1;     
        }
        else{

            this.waistcoat.breastDesign = 2;

        }

        if(this.lastWaistcoat.skirtDesign == "راست"){

            this.waistcoat.skirtDesign = 1;

        }else if(this.lastWaistcoat.skirtDesign == "گول"){

            this.waistcoat.skirtDesign = 2;

        }else{

            this.waistcoat.skirtDesign = 3;
        }






        if(this.lastWaistcoat.neckDesign == "هفت"){

            this.waistcoat.neckDesign = 1;

        }else if(this.lastWaistcoat.neckDesign == "گرد"){

            this.waistcoat.neckDesign = 2;

        }else if(this.lastWaistcoat.neckDesign == "پاکستانی"){

            this.waistcoat.neckDesign  = 3;
        }else{

            this.waistcoat.neckDesign = 4;
        }
       


        

    },
   
    clearName () {
        
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
          const constraints = this.getConstraints();

           const errors =  validate(this.$data.waistcoat , constraints);
      if (errors) {
        this.errors.record(errors);
               console.log(errors)
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
       this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
           this.axios.post('/waistcoats' , this.$data.waistcoat)
           .then((response) => {
               
                this.$store.dispatch('getWaistcoats');
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
                height : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                shoulder : {
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
                neck : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                armpit : {
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
                breastDesign : {
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
