import { defineStore } from 'pinia'

export const useCourseStore = defineStore('courses', {
  state: () => ({
    courses: []
  }),
  actions: {
    async fetchCourses() {
      const response = await fetch('../locales/es.json')
      this.courses = await response.json()
    }
  }
})