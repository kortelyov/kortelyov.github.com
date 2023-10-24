import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({ from: '', to: '', dates: [] }),
  actions: {
    updateSearch({ from, to, dates }) {
      console.log('updateSearch', from, to, dates)
      this.from = from
      this.to = to
      this.dates = dates
    }
  }
})
