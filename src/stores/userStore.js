// userStore.js
import { reactive } from 'vue'

export const userStore = reactive({
  users: [],
  isLoading: false,
})

export function addUser(newUser) {
  userStore.users.push(newUser);
}