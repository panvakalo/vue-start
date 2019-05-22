import axios from 'axios'
import { BASE_URL } from '../globals'

export default {
  async login (credentials) {
    const url = `${BASE_URL}/login`
    try {
      return await axios.post(url, credentials).then(response => response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async logout () {
    const url = `${BASE_URL}/logout`
    try {
      return await axios.post(url)
    } catch (error) {
      console.log(error)
    }
  }
}
