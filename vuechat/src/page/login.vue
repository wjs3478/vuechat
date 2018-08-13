<template>
    <div id="login">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Please Sign In</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" placeholder="ID" name="userid" v-model="input.userid" type="text" autofocus>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" name="password" v-model="input.password" type="password" value="">
                                </div>
                                
                                <!-- Change this to a button or input when using this as a form -->
                                <button type="button" v-on:click="login()">Login</button>
                                <!-- <a href="index.html" class="btn btn-lg btn-success btn-block">Login</a> -->
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    //로그인 화면 뷰
    export default {
        //컴포넌트 이름 지정
        name: 'login',
        data() {
            return {
                input: {
                    userid: "",
                    password: ""
                }
            }
        },
        methods: {
            //로그인 시 이름 패스워드가 공백이 아니면, 스토어에 저장 후 페이지 이동
            login() {
                if(this.input.userid != "" && this.input.password != "") {
                    
                        this.$store.commit("setUserId",this.input.userid)
                        this.$store.commit("setAuth",true)
                        this.$router.replace({ name: "secure" })
                } else {
                    console.log("망함")
                }
            }
        }
    }
</script>