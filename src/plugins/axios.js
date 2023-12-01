import axios from 'axios'
import { useUserStore } from '@/stores/user'

// -here
export const api = axios.create({
  baseURL: import.meta.env.VITE_API
})

export const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API
})

// 呼叫 axios ---> interceptors.request ---> 送出請求 ---> interceptors.response ---> 呼叫的地方
apiAuth.interceptors.request.use(config => {
  const $store = useUserStore()
  config.headers.authorization = 'Bearer ' + $store.token
  return config
})

// apiAuth.interceptors.response.use(成功時的 function, 失敗時的 function)
apiAuth.interceptors.response.use(res => {
  return res
}, error => {
  // 如果失敗的請求有回應
  if (error.response) {
    if (error.response.status === 401) {
      // if (!['/users/extend', '/users/login', '/users/logout'].includes(error.config.url)) {
      //   const $store = useUserStore()
      //   return apiAuth.patch('/users/extend').then(({ data }) => {
      //     $store.token = data.result
      //     error.config.headers.authorization = 'Bearer ' + $store.token
      //     return axios(error.config)
      //   }).catch(_ => {
      //     $store.CLEAR_USER
      //     return Promise.reject(error)
      //   })
      // }
    }
  }
  // 如果失敗的請求沒回應，回傳原本的錯誤到呼叫的地方
  return Promise.reject(error)
})
