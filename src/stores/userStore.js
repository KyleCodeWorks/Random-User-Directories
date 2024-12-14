// userStore.js
import { reactive } from 'vue'

export const userStore = reactive({
  users: [],
})

export function addUser(newUser) {
  userStore.users.push(newUser);
}