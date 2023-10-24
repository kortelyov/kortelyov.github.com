import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({ from: null, to: null, dates: [] }),
  actions: {
    updateSearch({ from, to, dates }) {
      console.log('updateSearch', from, to, dates)
      this.from = from
      this.to = to
      this.dates = dates
    }
  }
})
