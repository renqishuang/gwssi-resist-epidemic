import axios from 'axios';
//http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data && response.data.code === 401) {
        if (sessionStorage.getItem('userType') == '1') {
          // RootMain.$router.replace('/?type=1')
        }else{
          // RootMain.$router.replace('/?type=2')
        }
      }
      return response
  },
  error => {
    return Promise.reject(error)
  }
)