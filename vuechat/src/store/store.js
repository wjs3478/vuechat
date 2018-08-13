import Vue from 'vue'
import Vuex from 'vuex'

//vuex 사용
Vue.use(Vuex)

//전역변수, 메시지 저장하는 곳
const storage={
    fetch(){
        const arr=[];
        
        return arr;
    }
}

//웹소켓 열기
// let ws = new WebSocket('ws://10.1.12.232:7070', 'example-chat');
let ws = new WebSocket('ws://127.0.0.1:7070', 'example-chat');

//웹소켓 연결됐을때 메소드
ws.onopen = function () {

    console.log("연결됐다")
    //ws.send("안녕")

    // let obj={
    //     type:'login',
    //     agentid:7878,
    //     name:'가나'}
        
    //     ws.send(JSON.stringify(obj));
}

//메시지 왔을 때 메소드
ws.onmessage = function (evt) {

    console.log("받았다")
    //console.log(evt)
    let parse_obj=JSON.parse(evt.data)
    console.log(parse_obj)
    //state.todoMessage.push(evt.data)
    //store.state.todoMessage.push(evt)
    store.state.todoMessage.push(parse_obj)
    
    console.log("여기서 오류야?")
    if(document.visibilityState == "hidden"){
        console.log("왜냐 왜")
        notify()
    }
        
    //ws.send(evt)
}

//웹소켓 끊겼을때
ws.onclose = function () {

    console.log("연결끊김")
}


//웹소켓 연결 확인 및 연결
function wsConnect(){
    if(ws.readyState!=1)
            {
                    ws.close()
                    ws = new WebSocket('ws://127.0.0.1:7070', 'example-chat');
                    // ws = new WebSocket('ws://10.1.12.232:7070', 'example-chat');
            }
}


//브라우저 알림 표시
function notify() {
    //브라우저 지원 여부 확인
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // 권한 있는지 확인, 있으면 아래의 알림 보냄
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("메세지가 도착했습니다.");
    }
  
    // 권한이 없을경우
    else if (Notification.permission !== 'denied') {
        //권한요청
      Notification.requestPermission(function (permission) {
        // 만약 허용해주면 메세지 보냄
        if (permission === "granted") {
          var notification = new Notification("메세지가 도착했습니다.");
        }
      });
    }
  
    // At last, if the user has denied notifications, and you 
    // want to be respectful there is no need to bother them any more.
  }


//vuex store 정의
export const store=new Vuex.Store({

    //스테이트 적용
    state:{
        headerText:'나 미만 잡ㅋㅋㅋ',
        todoMessage:storage.fetch(),
        auth:false,
        userId:''        
    },

    //게터
    getters:{
        storeMsg(state){
            return state.todoMessage
        },
        getAuth(state){
            console.log("이게 먼저?")
            return state.auth
        },
        getUserId(state){
            return state.userId
        }

    }

    //뮤테이션
    ,mutations:{

        //메시지 추가
        addMsg(state,obj){
            state.todoMessage.push(obj)
            wsConnect()
            ws.send(JSON.stringify(obj))
        },

        
        //스테이트 값 저장
        setAuth(state,bol){
            state.auth=bol
        },

        //스테이트 값 저장
        setUserId(state,id){
            state.userId=id
        }

    }

});
