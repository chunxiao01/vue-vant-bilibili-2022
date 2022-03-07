import axios from "axios"

const request = (config) => {
  const instance = axios.create({
    baseURL: "",
    timeout: 5000
  })

  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (err) => {
      console.log(err)
    }
  )

  instance.interceptors.response.use(
    (res) => {
      return res
    },
    (err) => {
      console.log(err)
    }
  )

  return instance(config)
}

export { request }
