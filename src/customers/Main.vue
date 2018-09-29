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
import nav from '@/_nav'
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
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  },

    
}
</script>

