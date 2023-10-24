import { defineStore } from 'pinia'
import airports from '@/assets/airports.json'

export const useAirportsStore = defineStore('airports', {
  actions: {
    searchByTerm(term) {
      return airports.filter((airport) => airport.name.toLowerCase().includes(term.toLowerCase()))
    }
  }
})
