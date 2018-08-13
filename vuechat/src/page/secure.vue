<template>
    <div id="secure" class="sercurebody">
        <h1>유저 : {{this.$store.state.userId}}</h1>
        <p>
            와 미쳤다 졸라 더워
        </p>
        <button id="test" type="button" class="btn btn-info" v-on:click="toggleShow()">상담</button>
        <chat v-if="showModal" @close="showModal = false"></chat>
    </div>
</template>

<script>
//모달 창으로 채팅창 띄움
import chat from '../Chat.vue'

    export default {
        name: 'Secure',
        data() {            
            return {
                showModal:false,
            }
        },
        components:{
            chat
        },
        methods:{
            toggleShow()
            {
                this.showModal=!this.showModal
            }
        }
    }
</script>

<style>
body{
    text-align: center;
    background-color :#f6f6f6;
}
</style>
