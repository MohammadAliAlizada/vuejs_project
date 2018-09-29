<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        
      <div @click.prevent="goHome">
          <img class="navbar-brand-full" src="img/brand/tail.svg" width="120" height="60" alt="CoreUI Logo" >
        <img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
      </div>
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="d-md-down-none">
      
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
       <button id="m1" class="btn   btn-sm" @click.prevent="logout"><i class="cui-account-logout icons "></i> Logout</button>
      </b-navbar-nav>
      <!-- <AsideToggler class="d-none d-lg-block" /> -->
      <!-- <AsideToggler class="d-lg-none" mobile /> -->
    </AppHeader>
     <router-view></router-view>
   
  </div>
</template>

<script>

import { Header as AppHeader, SidebarToggler,  AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'



export default {
  name: 'full',
  components: {
    AsideToggler,
    AppHeader,

   
    TheFooter,
    Breadcrumb,
    
   

    SidebarToggler,
  

  },

  methods : {
    logout(){
            this.$store.commit('logOut');
            this.$router.push('/');
        },
    goHome(){
            this.$router.push('/main/list');
    }
  }
}
</script>
<style>
#m1{
  margin-right: 20px !important;
  background-color: #cc0000;
  color: #ffffff;
}
</style>
