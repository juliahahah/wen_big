import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();
import { inject } from 'vue';

export const useUserStore = defineStore('user', () => {
    const userEmail_remember = ref(null)
    const userPhoto = ref(null)
    const userEmail = ref(null)
    const userName = ref(null)
    const userToken = ref('')
    const userAuth= ref('')
    const isLogin = ref(false)
    const verify = ref('')
    const emailCode = ref('')
    const newPwd = ref('')
    const rememberEmail = ref(false)
    const openPageLoading = ref(true)


    //SET DATA
    const SET_OPEN_PAGE_LOADING =()=> {
        openPageLoading.value = false
    }
    const SET_USER_EMAIL_REMEMBER = (email) => {
        userEmail_remember.value = email
    }
    const SET_USER_EMAIL = (email) => {
        userEmail.value = email
    }
    const SET_USER_NAME = (name) => {
        userName.value = name
    }
    const SET_USER_PHOTO =(photo) =>{
        userPhoto.value = `https://api.antqtech.com/Woodball_Test/photo/${photo}`
    }
    const SET_USER_AUTH =(auth) =>{
        userAuth.value = auth
    }
    const SET_VERIFY = (newVerify) => {
        verify.value = newVerify
    }
    const SET_EMAIL_CODE = (code) => {
        emailCode.value = code
    }
    const SET_NEW_PASSWORD = (Pwd) => {
        newPwd.value = Pwd
    }
    const SET_TOKEN = (token) => {
        userToken.value = token
        if (token.length > 10) {
            isLogin.value = true
        }
    }

    // 切換語言
    const locale = ref('tw')
    const SET_LOCALE =(lang) => {
        locale.value = lang
    }

    // 登出
    const CLEAR_USER = () => {
        isLogin.value = false
        userToken.value = ' '
        userPhoto.value = ''
        userAuth.value = ' '
        userName.value = ' '

    }
    

    const REGISTER_FINISH =() => {
    // 清除所有註冊用數據
    sessionStorage.clear();
    }

    return { 
        userEmail_remember,
        userEmail,
        userToken,
        userName,
        userPhoto,
        verify,
        emailCode,
        newPwd,
        isLogin,
        userAuth,
        openPageLoading,
        locale,

        SET_LOCALE,
        SET_USER_NAME,
        SET_USER_AUTH,
        SET_EMAIL_CODE,
        SET_NEW_PASSWORD,
        SET_VERIFY,
        SET_TOKEN,
        SET_USER_EMAIL,
        SET_USER_EMAIL_REMEMBER,
        SET_USER_PHOTO,
        SET_OPEN_PAGE_LOADING,
        CLEAR_USER ,
        REGISTER_FINISH,
        rememberEmail
    }
},
{
    persist: [
    {
            key: 'userEmail_remember', 
            paths: ['userEmail_remember'], 
        },
       
         {
            storage: sessionStorage,
            key: ' openPageLoading', 
            paths: ['openPageLoading'], 
        },
          {
            key: 'userPhoto', 
            paths: ['userPhoto'], 
        },
        {
            key: 'userToken', 
            paths: ['userToken'], 
        },
        {
            key: 'isLogin', 
            paths: ['isLogin'], 
        },
          {
            key: 'userAuth', 
            paths: ['userAuth'], 
        },
        {
            key: 'rememberEmail', 
            paths: ['rememberEmail'], 
        },
        {
            storage: sessionStorage,
            key: 'verify', 
            paths: ['verify'], 
        },
        {
            storage: sessionStorage,
            key: 'emailCode', 
            paths: ['emailCode'], 
        },
          {
            storage: sessionStorage,
            key: 'userEmail', 
            paths: ['userEmail'], 
        },
         {
            // storage: sessionStorage,
            key: 'userName', 
            paths: ['userName'], 
        },
      
        {
            key: 'isLogin', 
            paths: ['isLogin'], 
        },
        {
            key: 'locale', 
            paths: ['locale'], 
        },
    ]
})