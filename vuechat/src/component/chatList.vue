<template>
    <div>
         <transition-group name="list" tag="ul">
            <li v-for="(todo,index) in this.storeMsg" v-bind:key="index" :class="[todo.cls]">
                <em v-if="todo.cls==='revM'"><strong><label>{{todo.sendId}}</label></strong></em>
                <span class="mesg">{{todo.msg}}</span>
            </li>
        </transition-group>
    </div>
</template>

<script>
//맵게터스 맵뮤테이션 사용
import {mapGetters, mapMutations} from 'vuex'

//채팅 메시지 생성해주는 컴포넌트
export default {
    
    
    //바뀔때마다 메시지 창 제일 아래로
  updated() {
    
    //var elem = this.$el.querySelector(".modal-body");
    var elem = this.$el
    elem.parentNode.scrollTop = elem.clientHeight
    },

    computed:{
        //스토어에 있는 메시지를 가져온다.
        ...mapGetters(['storeMsg'])
    }


}
</script>

<style>


    ul{
        list-style-type:none;
        padding-left:0px;
        margin-top:0;
        
    }

 
    .mesg{
        
        display: inline-block;
        vertical-align: middle;
        min-height: 40px;
        height: auto;
        max-width: 60%;
        width:auto;
        line-height: 40px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius:5px;
        word-break:break-all;
        
    }


    .sendM{
        text-align: right;
    }
    .revM{
        text-align: left;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }


</style>
