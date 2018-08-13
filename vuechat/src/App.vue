<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="getAuth" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
import {mapGetters,mapState} from 'vuex'

    //메인화면
    export default {
        name: 'App',
        
        // mounted() {
        //     if(!getAuth) {
        //         this.$router.replace({ name: "login" });
        //     }
        // },

        mounted() {
           
           //로그인이 안 되어있으면 로그인화면으로 이동
            if(!this.$store.state.auth) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            
            //로그인 화면으로 이동
            logout() {
                this.$store.commit("setAuth",false)
            }
        },
      
      computed:{
        ...mapGetters(['getAuth','getUserId']),
      }
    }
</script>
