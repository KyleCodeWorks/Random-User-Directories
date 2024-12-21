// userStore.js
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
const toast = useToast();

export const userStore = reactive({
  users: [],
  isLoading: false,
  deleteUser(id) {
    try {
      const confirm = window.confirm("Are you sure you want to delete this user?");
      if (confirm) {
        // Find the index of the user to delete
        const userIndex = this.users.findIndex((user) => user.id === id);

        if (userIndex !== -1) {
          // Remove the user from the array
          this.users.splice(userIndex, 1);

          // Display success message
          toast.success('User Deleted Successfully');
        } else {
          toast.error('User Not Found');
        }
      }
    } catch (error) {
      console.error("Error deleting user", error);
      toast.error('User Not Deleted');
    }
  }
})

export function addUser(newUser) {
  userStore.users.push(newUser);
}