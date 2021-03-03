import axios from 'axios'
import { EventItemModel } from '../types'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },

  async getEvent(id: any): Promise<EventItemModel> {
    const event = await apiClient.get('/events/' + id)
    return new EventItemModel(event.data)
  }
}
