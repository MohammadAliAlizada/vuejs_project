<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  // CoreUI Icons Set
  @import '~@coreui/icons/css/coreui-icons.min.css';
  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome.scss';
  /* Import Simple Line Icons Set */
  $simple-line-font-path: '~simple-line-icons/fonts/';
  @import '~simple-line-icons/scss/simple-line-icons.scss';
  /* Import Flag Icons Set */
  @import '~flag-icon-css/css/flag-icon.min.css';
  /* Import Bootstrap Vue Styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
  // Import Main styles for this application
  @import 'assets/scss/style';

  @import 'assets/font/flaticon.css';

    @import 'assets/font/bootstrap.css';

     @import 'assets/font/table.css';

    



   


 
    

  
</style>
<style>
.button{
    background-color: #3F51B5 !important;
    color: #FFF !important;
   
}
.rad{
    border-radius: 2px !important;
}
.height{
  min-height: 830px;
}
@media screen and (min-width: 992px) {
 .navbar-toggler:not(:disabled):not(.disabled) {
    
    display: none;
}
}


</style>

