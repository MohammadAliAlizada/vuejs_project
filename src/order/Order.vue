<template>
   <div class="app-body" style="margin-right:-10px;">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
       
      </AppSidebar>
      <main class="main">
        
        <div class="container-fluid">
         
          <router-view></router-view>
        </div>
      </main>
    
    </div>
</template>
<script>
import nav from '@/_nav1'
import {  Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader,  SidebarNav} from '@coreui/vue'
export default {
   components: {
    AppSidebar,
    SidebarForm,
    SidebarFooter,
    SidebarHeader,
    SidebarNav,
    
  },
  data () {
    return {
      nav: [
    {
      title: true,
      name: 'پروفایل مشتری',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'پروفایل مشتری',
      url: '/order/'+ this.$route.params.id + '/profile',
      icon: 'flaticon-man-user',
    },
    {
      title: true,
      name: 'لباس',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'لباس',
      url: '/order/'+ this.$route.params.id + '/cloth',
      icon: 'flaticon-shirt-2',
    },
    {
      title: true,
      name: 'واسکت',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'واسکت',
      url: '/order/' + this.$route.params.id + '/waistcoat',
      icon: 'flaticon-waistcoat'
    },
    {
      title: true,
      name: 'کرتی',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    
    {
      name: 'کرتی',
      url: '/order/' + this.$route.params.id + '/coat',
      icon: 'flaticon-blouse'
    },

    {
      title: true,
      name: 'پتلون',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    
    {
      name: 'پتلون',
      url: '/order/' + this.$route.params.id + '/pant',
      icon: 'flaticon-pants'
    },

    {
      title: true,
      name: 'یخن قاق',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    
    {
      name: 'یخن قاق',
      url: '/order/' + this.$route.params.id + '/shirt',
      icon: 'flaticon-polo-shirt'
    }],
      id : this.$route.params.id
      // id : this.$route.params.id
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    },
   
  },
  created(){
          this.$store.commit("Comcustomer"  , this.id);
  },
   mounted(){
    
       

        

    },

    
   

    
}
</script>

