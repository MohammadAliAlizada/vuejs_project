import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

const auth = {
    headers: {Authorization:'Bearer ' + localStorage.getItem('token')} 
}


import {getLocalUser}  from "./helpers/auth";
import { stat } from 'fs';
import { runInThisContext } from 'vm';
   
    

const user = getLocalUser();




Vue.use(Vuex, axios , VueAxios);
export const store = new Vuex.Store({

    state : {
    
      currentUser : user,
      CustomerProfileId : '' ,

      customer : [] ,
    

      isLoggedIn : !!user,
      isLoading : false,
      authError : null,
      customers : [],
      customerPagination : [],
      waistcoat : [],
      waistcoatPagination : [],
      lastWaistcoat : [] ,
      SelectedWaistcoatId : '',
      mySelectedWaistcoat : [],
    // This is coat part variables

      coats : [] ,
      coatPagination : [] ,
      lastCoat : [],
      SelectedCoatId : '',
      mySelectedCoat : [],
    //  This is pant part
      
      pants : [] ,
      pantPagination : [],
      lastPant : [],
      SelectedPantId : '',
      mySelectedPant : []
      


    
     
      
    } ,

    getters : {

        isLoading(state){
            return state.isLoading;
        },
        isLoggedIn(state){
            return  state.isLoggedIn;
        },
        currentUser(state){
            return state.currentUser;
        },
        authError(state){
            return state.authError;
        },
        customers(state){
            return state.customers;
        },
        customerPagination(state){

            return state.customerPagination;

        },
        CustomerProfileId(state){

            return state.CustomerProfileId;

        },
        customerId(state){
            return state.customerId;
        },
        side(state){
            return state.side;
        },
        customer(state){
            return state.customer;

        },
        waistcoat(state){
            return state.waistcoat;
        },
        waistcoatPagination(state){
            return state.waistcoatPagination;
        },
        lastWaistcoat(state){
            return state.lastWaistcoat;
        },
        SelectedWaistcoatId(state){
            return state.SelectedWaistcoatId;
        },
        mySelectedWaistcoat(state){
            return state.mySelectedWaistcoat;
        },
        // coat part getters

        coats(state){
            return state.coats;
        },
        coatPagination(state){
            return state.coatPagination;
        },
        lastCoat(state){
            return state.lastCoat;
        },
        SelectedCoatId(state){
            return state.SelectedCoatId;
        },
        mySelectedCoat(state){
            return state.mySelectedCoat;
        },
        // pant part getters

        pants(state){
            return state.pants;
        },
        pantPagination(state){
            return state.pantPagination;
        },
        lastPant(state){
            return state.lastPant;
        },
        SelectedPantId(state){
            return state.SelectedPantId;
        },
        mySelectedPant(state){
            return state.mySelectedPant;
        }

       
       
       
    } ,

    mutations : {
       login(state){
           state.isLoading = true;
           state.authError = null;

       },
       loginSuccess(state , payload){
           state.authError = null;
           state.isLoggedIn = true;
           state.isLoading = false;
           state.currentUser = payload.data.access_token
           localStorage.setItem("token" , state.currentUser);
       },
       loginFailed(state , payload){
           state.isLoading = false;
           state.authError = payload.error;

       },
       logOut(state){
           localStorage.removeItem("token");
           state.isLoggedIn = false;
           state.currentUser = null;
       },
       updateCustomer(state , payload){
           state.customers = payload;
       },
       Comcustomer(state , payload){
           state.customer = payload;
       },
       Comcoat(state , payload){
           state.coat = payload;
       },
       Comwaistcoat(state , payload){
           state.waistcoat = payload;
       },
       Compant(state , payload){
           state.pant = payload ;
       },
       Comclot(state , payload ){
           state.clot = payload;
       },
       updatePagination(state , payload){
           state.customerPagination = payload;
       },
       CustomerProfile(state  , payload){
           state.CustomerProfileId = payload;
       },
       updateWaistcoat(state , payload){
           state.waistcoat = payload;
       },
       updateWaistcoatPagination(state , payload){
           state.waistcoatPagination = payload;
       },
       updateLastWaistcoat(state , payload){
           state.lastWaistcoat = payload;
       },
       comSelectedWaistcoatId(state , payload){
           state.SelectedWaistcoatId = payload;
       },
       SelectedWaistcoat(state , payload){
           state.mySelectedWaistcoat = payload;
       },

    //    coat part mutation

       updateCoat(state , payload){
           state.coats = payload;
       },
       updateCoatPagination(state , payload){
           state.coatPagination = payload;
       },
       updateLastCoat(state , payload){
           state.lastCoat = payload;
       },
       comSelectedCoatId(state, payload){
           state.SelectedCoatId = payload;
       },
       SelectedCoat(state, payload){
           state.mySelectedCoat = payload;
       },

    //    pant part mutation

       updatePant(state , payload){
           state.pants = payload;
       },
       updatePantPagination(state,payload){
           state.pantPagination = payload;
       },
       updateLastPant(state , payload){
           state.lastPant = payload;
       },
       comSelectedPantId(state , payload){
           state.SelectedPantId = payload;
       },
       SelectedPant(state ,payload){
           state.mySelectedPant = payload;
       }

      

     
       
      
    

      
    } ,

    actions : {
        login(context){
            context.commit("login");
        },
        getCustomers(context){
             axios.get('/customers')
             .then((response)=>{
                
                 context.commit('updateCustomer' , response.data.data);
                 context.commit('updatePagination' , response.data.meta.pagination);
                 console.log(response.data.data);
                 console.log(response.data.meta.pagination)

             })
             .catch((error)=> {
                 console.log(error);
             })
        },

        // This is the Waistcoat part
        getWaistcoats(context){
            axios.get('/customers/'+ this.state.customer + '? include=waistcoat' )
             .then((response)=>{
                
                 context.commit('updateWaistcoat' , response.data.data.waistcoat.data);
                 context.commit('updateWaistcoatPagination' , response.data.data.waistcoat.meta.pagination);
                 console.log(response.data.data.waistcoat.data);
                 console.log(response.data.data.waistcoat.meta.pagination);

                 if (response.data.data.waistcoat.data.length > 0) {
                     
                    console.log(response.data.data.waistcoat.data[0]);
                    context.commit('updateLastWaistcoat' , response.data.data.waistcoat.data[0]);
                 }

             })
             .catch((error)=> {
                 console.log(error);
             })
        },
        getSelectedWaistcoat(context){
            axios.get('/waistcoats/' + this.state.SelectedWaistcoatId)
                .then((response) => {

                    console.log(response.data.data);

                    context.commit('SelectedWaistcoat' , response.data.data);
                
                })
                .catch((error) => {
                    console.log(error);
                })
        },

        // This is the Coat Part

        getCoats(context){

            axios.get('/customers/'+ this.state.customer + '? include=coats')
            .then((response)=> {


            context.commit("updateCoat" , response.data.data.coats.data);
            context.commit("updateCoatPagination" , response.data.data.coats.meta.pagination);
            console.log(response.data.data.coats.data);
            console.log(response.data.data.coats.meta.pagination);

            if (response.data.data.coats.data.length > 0) {
                     
                console.log(response.data.data.coats.data[0]);
                context.commit('updateLastCoat' , response.data.data.coats.data[0]);
             }
          
            
            })
            .catch((error)=>{
                console.log(error);
            })

        },
       
        getSelectedCoat(context){
            axios.get('/coat/' + this.state.SelectedCoatId)
                .then((response) => {

                    console.log(response.data.data);

                    context.commit('SelectedCoat' , response.data.data);
                
                })
                .catch((error) => {
                    console.log(error);
                })
        },

        // This is the Pant Part


        getPants(context){
            axios.get('/customers/'+ this.state.customer + '? include=pant'  )
            .then((response) => {
                
               
                context.commit("updatePant" ,response.data.data.pant.data );
                context.commit("updatePantPagination" ,response.data.data.pant.meta.pagination );
                console.log(response.data.data.pant.data);
                console.log(response.data.data.pant.meta.pagination);
            
                
                if (response.data.data.pant.data.length > 0) {
                     
                    console.log(response.data.data.pant.data[0]);
                    context.commit('updateLastPant' , response.data.data.pant.data[0]);
                 }


            })
            .catch((error) => {
                console.log(error);
            })
    
        },
        getSelectedPant(context){
            axios.get('/pants/' + this.state.SelectedPantId)
                .then((response) => {

                    console.log(response.data.data);

                    context.commit('SelectedPant' , response.data.data);
                
                })
                .catch((error) => {
                    console.log(error);
                })
        }

       

    }
});