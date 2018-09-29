<template>
  <div>
    <b-btn v-b-modal.modalPrevent size="sm" variant="primary" @click="pantMapping"><i class="plus icon" style="margin-left:5px;"></i>پتلون جدید</b-btn>
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
                <label>قد پتلون</label>
                <input type="text"  v-model="pant.pant_length">
                <p class="er"><span>  {{errors.get('pant_length')}}</span></p>
                </div>
                <div class="field">
                <label>کمر</label>
                <input type="text" v-model="pant.waist">
                 <p class="er"><span>  {{errors.get('waist')}}</span></p>
                </div>

                <div class="field">
                <label>سورین</label>
                <input type="text" v-model="pant.seat">
                <p class="er"><span>  {{errors.get('seat')}}</span></p>
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
                    <label>زانو</label>
                    <input type="text"  v-model="pant.knee">
                    <p class="er"><span>  {{errors.get('knee')}}</span></p>
                    </div>
                    <div class="field">
                    <label>پاچه</label>
                    <input type="text" v-model="pant.cuff" >
                    <p class="er"><span>  {{errors.get('cuff')}}</span></p>
                    </div>
                    <div class="field">
                        <label>فاق</label>
                    <input type="text"  v-model="pant.zep_ber_fly">
                    <p class="er"><span>  {{errors.get('zep_ber_fly')}}</span></p>
                    
                        
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
                            <label>پت</label>
                            <input type="text" v-model="pant.thigh">
                            <p class="er"><span>  {{errors.get('thigh')}}</span></p>
                            </div>
                             <div class="field">
                            <label>پلیت</label>
                            <sui-dropdown
                                    placeholder="پلیت"
                                    selection
                                    :options="palets"
                                    v-model="pant.palet"
                                />
                                <p class="er"><span>  {{errors.get('palet')}}</span></p>
                               
                              
                            </div>
                             <div class="field">
                            <label>پاچه</label>
                            <sui-dropdown
                                    placeholder="دیزاین پاچه"
                                    selection
                                    :options="pachas"
                                    v-model="pant.pacha"
                                />
                                <p class="er"><span>  {{errors.get('pacha')}}</span></p>
                           
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
                            <label>حالت</label>
                            <sui-dropdown
                                    placeholder="حالت"
                                    selection
                                    :options="iscompletes"
                                    v-model="pant.iscomplete"
                                />
                            <p class="er"><span>  {{errors.get('iscomplete')}}</span></p>
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
                            <textarea rows="2" v-model="pant.orders"></textarea>
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
                            <input type="text" v-model="pant.total">
                            <p class="er"><span>  {{errors.get('total')}}</span></p>
                            </div>
                            <div class="field">
                            <label>رسید</label>
                            <input type="text" v-model="pant.received">
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
                   <date-picker v-model="pant.start_date"   color=#3f51b5></date-picker>
                   <p class="er"><span>  {{errors.get('start_date')}}</span></p>
               </div>
               <div class="col-md-6">
                   <date-picker v-model="pant.end_date"  color=#3f51b5></date-picker>
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
 
  data () {
    return {
      
        
          iscompletes: [
              {text: 'تحت کار',value: 1},
              {text: 'آماده تحویل',value: 2}    
             ],
          
           palets : [
               {text : 'بدون پلیت' , value : 1},
               {text : 'یک پلیت' , value : 2},
               {text : 'دو پلیت' , value : 3},
              
           ],
          
           pachas : [
               {text : 'ساده' , value : 1},
               {text : 'پاکتی'  , value : 2},
            
           ],
       
          
        
       
        pant : {
            customer_id : null,
            pant_length : null ,
            waist : null ,
            seat : null ,
            knee : null ,
            cuff : null ,
            zep_ber_fly : null ,
            thigh : null ,
            palet : null ,
            pacha : null ,
            orders : null ,
            total : null ,
            received : null ,
            minus : null ,
            iscomplete : null,
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
         
         return this.pant.minus = this.pant.total - this.pant.received
      },
      lastpant(){
          return this.$store.getters.lastPant;
      }

  },
  components: {
            datePicker: VuePersianDatetimePicker
        },
  methods: {
    pantMapping(){
        this.pant.customer_id = this.lastpant.customer_id;
        this.pant.pant_length = this.lastpant.pant_length;
        this.pant.waist = this.lastpant.waist;
        this.pant.seat = this.lastpant.seat;
        this.pant.knee = this.lastpant.Knee;

        this.pant.cuff = this.lastpant.cuff;
        this.pant.zep_ber_fly = this.lastpant.zepberfly;
        this.pant.thigh = this.lastpant.thigh;


        this.pant.orders = this.lastpant.order;


      


        

        if(this.lastpant.palet == "بدون پلیت"){

            this.pant.palet = 1;

        }else if(this.lastpant.skirtDesign == "یک پلیت"){

            this.pant.palet = 2;

        }else{

            this.pant.palet = 3;
        }






        if(this.lastpant.pacha == "ساده"){

            this.pant.pacha = 1;

        }else{

            this.pant.pacha = 2;
        }
       


        

    },
   
    clearName () {
        
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
          const constraints = this.getConstraints();

           const errors =  validate(this.$data.pant , constraints);
      if (errors) {
        this.errors.record(errors);
               console.log(errors)
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
       this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
           this.axios.post('/pants' , this.$data.pant)
           .then((response) => {
               
                this.$store.dispatch('getPants');
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
                pant_length : {
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
                knee : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                cuff : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                zep_ber_fly : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                thigh : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                palet : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    }
                },
                pacha : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    }
                },
              
                iscomplete: {
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
