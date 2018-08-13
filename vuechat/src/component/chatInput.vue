<template>
    <div>
        <input type="text" v-model="newMsg" v-on:keyup.enter="addMessage">
        <span class="addContainer" v-on:click="addMessage">
            <i class="fas fa-plus addbtn"></i>
        </span>
    </div>
</template>

<script>



export default {
    data(){
        return{
            newMsg:""
        }
    },

    methods:{
        // enter나 클릭시 실행, 메시지 전송
        addMessage(){
            
            let obj={
                type:'msg',
                cls:'sendM',
                sendId:this.$store.state.userId
                ,msg : this.newMsg}

            //스토어에 있는 addmsg 메소드 실행
            this.$store.commit('addMsg',obj)
            
            this.clearInput()
            
        },
        //텍스트 박스 클리어
        clearInput(){
            this.newMsg=""
        }
    }
}
</script>