<template>

  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div id="modaldrag" class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <h3>채팅방1
                <button type="button" v-on:click="$emit('close')" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </h3>
              
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <chatList></chatList>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <chatInput></chatInput>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
//채팅창 만들기
import chatList from './component/chatList.vue'
import chatInput from './component/chatInput.vue'

// var mycmp={
//   template:'<div>sadasd</div>'
// }

// new Vue({
//   el:'',
//   components:{
//     'my-cmp':mycmp
//   }
// });

export default {
  components:{
    chatList,
    chatInput,
  },
  //처음 그려질때 소켓 연결
  mounted() {
    

  }
}
</script>

<style>


input{
border-style: groove;
width:200px;
}

button{
border-style: groove;
}

.shadow{
box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}


.modal-mask {
  /* position: relative; */
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, .5); */
  display: table;
  transition: opacity .3s ease;
  /* -webkit-user-drag: element; */
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  height: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: rgb(113, 145, 194);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-user-drag: element;
  
}

.modal-header h3 {
  margin-top: 0;
  text-align: center;
  color: #70e0ae;
}

.modal-body {
  height: 400px;
  margin: 20px 0;
  overflow:auto;
  
}

.modal-footer{
  text-align: center;
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>
