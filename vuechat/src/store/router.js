import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "../page/login.vue"
import SecureComponent from "../page/secure.vue"


//뷰라우터 사용
Vue.use(Router)

//라우터 설정
export const router= new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        }
    ]
})