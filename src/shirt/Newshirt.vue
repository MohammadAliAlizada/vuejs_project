<template>
  <div>
    <b-btn v-b-modal.modalPrevent size="sm" variant="primary" @click="shirtMapping"><i class="plus icon" style="margin-left:5px;"></i>یخن قاق جدید</b-btn>
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
                <input type="text"  v-model="shirt.shirt_length">
                <p class="er"><span>  {{errors.get('shirt_length')}}</span></p>
                </div>
                <div class="field">
                <label>شانه</label>
                <input type="text" v-model="shirt.shirt_shoulder">
                 <p class="er"><span>  {{errors.get('shirt_shoulder')}}</span></p>
                </div>

                <div class="field">
                <label>آستین</label>
                <input type="text" v-model="shirt.sleeve">
                <p class="er"><span>  {{errors.get('sleev')}}</span></p>
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
                    <label>بغل</label>
                    <input type="text"  v-model="shirt.chest">
                    <p class="er"><span>  {{errors.get('chest')}}</span></p>
                    </div>
                    <div class="field">
                    <label>کمر</label>
                    <input type="text" v-model="shirt.waist" >
                    <p class="er"><span>  {{errors.get('waist')}}</span></p>
                    </div>
                    <div class="field">
                        <label>سورین</label>
                    <input type="text"  v-model="shirt.seat">
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
                            <label>بازو</label>
                            <input type="text" v-model="shirt.shirt_arm">
                            <p class="er"><span>  {{errors.get('shirt_arm')}}</span></p>
                            </div>
                             <div class="field">
                            <label>دیزاین یخن</label>
                            <sui-dropdown
                                    placeholder="دیزاین یخن"
                                    selection
                                    :options="neckDesigns"
                                    v-model="shirt.neckDesign"
                                />
                                <p class="er"><span>  {{errors.get('neckDesign')}}</span></p>
                               
                              
                            </div>
                             <div class="field">
                            <label>دیزاین آستین</label>
                            <sui-dropdown
                                    placeholder="دیزاین دامن"
                                    selection
                                    :options="sleeveDesigns"
                                    v-model="shirt.sleeveDesign"
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
                            <label>دیزاین دامن</label>
                            <sui-dropdown
                                    placeholder="دیزاین سینه"
                                    selection
                                    :options="skirtDesigns"
                                    v-model="shirt.skirtDesign"
                                /> 
                            <p class="er"><span>  {{errors.get('skirtDesign')}}</span></p>                       
                            </div>
                            <div class="field">
                            <label>حالت</label>
                            <sui-dropdown
                                    placeholder="حالت"
                                    selection
                                    :options="isCompletes"
                                    v-model="shirt.iscomplete"
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
                            <textarea rows="2" v-model="shirt.orders"></textarea>
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
                            <input type="text" v-model="shirt.total">
                            <p class="er"><span>  {{errors.get('total')}}</span></p>
                            </div>
                            <div class="field">
                            <label>رسید</label>
                            <input type="text" v-model="shirt.received">
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
                   <date-picker v-model="shirt.start_date"   color=#3f51b5></date-picker>
                   <p class="er"><span>  {{errors.get('start_date')}}</span></p>
               </div>
               <div class="col-md-6">
                   <date-picker v-model="shirt.end_date"  color=#3f51b5></date-picker>
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
      
        
          isCompletes: [
              {text: 'تحت کار',value: 1},
              {text: 'آماده تحویل',value: 2}    
             ],
          
           neckDesigns : [
               {text : 'چپه یخن' , value : 1},
               {text : 'پاکستانی' , value : 2},
             
           ],
          
           sleeveDesigns : [
               {text : 'ساده' , value : 1},
               {text : 'کفدار'  , value : 2},
             
           ],
       
           skirtDesigns : [
               {text : 'راست'  , value : 1},
               {text : 'گول' , value : 2}
           ],
        
       
        shirt : {
            customer_id : null,
            shirt_length : null ,
            shirt_shoulder : null ,
            sleeve : null ,
            chest : null ,
            waist : null ,
            seat : null ,
            shirt_arm : null ,
            neckDesign : null ,
            sleeveDesign : null ,
            skirtDesign : null , 
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
         
         return this.shirt.minus = this.shirt.total - this.shirt.received
      },
      lastShirt(){
          return this.$store.getters.lastShirt;
      },
      myId(){
          return this.$store.getters.customer;
      }

  },
  components: {
            datePicker: VuePersianDatetimePicker
        },
  methods: {
    shirtMapping(){
        this.shirt.customer_id = this.myId;
        this.shirt.shirt_length = this.lastShirt.shirt_length;
        this.shirt.shirt_shoulder = this.lastShirt.shirt_shoulder;
        this.shirt.sleeve = this.lastShirt.sleeve;
        this.shirt.chest = this.lastShirt.chest;
        this.shirt.waist = this.lastShirt.waist;

        this.shirt.seat = this.lastShirt.seat;
        this.shirt.shirt_arm = this.lastShirt.shirt_arm;
     

        this.shirt.orders = this.lastShirt.orders;


        if(this.lastShirt.iscomplete == "آماده تحویل"){
           
            this.shirt.iscomplete = 1;
           
        }else{
          
            this.shirt.iscomplete = 2;
        }


        if(this.lastShirt.neckDesign == "چپه یخن"){

            this.shirt.neckDesign = 1;     
        }
        else{

            this.shirt.neckDesign = 2;

        }

        if(this.lastShirt.skirtDesign == "راست"){

            this.shirt.skirtDesign = 1;

        }else{

            this.shirt.skirtDesign = 2;
        }






        if(this.lastShirt.sleeveDesign == "ساده"){

            this.shirt.sleeveDesign = 1;

        }else{

            this.shirt.sleeveDesign = 2;
        }
       


        

    },
   
    clearName () {
        
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
          const constraints = this.getConstraints();

           const errors =  validate(this.$data.shirt , constraints);
      if (errors) {
        this.errors.record(errors);
               console.log(errors)
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
       this.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
           this.axios.post('/shirts' , this.$data.shirt)
           .then((response) => {
               
                this.$store.dispatch('getShirts');
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
                shirt_length : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                shirt_shoulder : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    },
                     numericality: {
                        message : '^قیمت مورد نظر باید عدد باشد'
                    }
                },
                sleeve : {
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
                shirt_arm : {
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
                sleeveDesign : {
                    presence : {
                        message : '^ قیمت موجود نیست'
                    }
                },
                skirtDesign: {
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
