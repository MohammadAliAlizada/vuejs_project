<template>
    <div>
        <h1>This is home page</h1>

    <a href="" @click.prevent="logout" class="btn btn-primary">Logout</a>
    	
    </div>
</template>
<script>
export default {

    methods : {
        logout(){
            this.$store.commit('logOut');
            this.$router.push('/');
        }
    }
    
}
</script>
<style>

</style>


