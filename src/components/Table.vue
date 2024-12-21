<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { userStore } from '@/stores/userStore.js';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

// Pagination state
const currentPage = ref(1);
const pageSize = ref(7); // Number of rows per page

// Computed property for paginated data
const paginatedUsers = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  return userStore.users.slice(startIndex, endIndex);
});

// Total pages
const totalPages = computed(() => {
  return Math.ceil(userStore.users.length / pageSize.value);
});

// Change page
const goToPage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
</script>

<template>
  <section class="container-md py-12">
    <div class="max-w-5xl mx-auto overflow-x-auto px-4">
      <!-- Loader -->
      <div v-if="userStore.isLoading" class="flex justify-center py-8">
        <PulseLoader color="#4CAF50" size="8px" />
      </div>

      <!-- Table -->
      <table v-else class="table table-zebra w-full text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- No data -->
          <tr v-if="paginatedUsers.length === 0">
            <td colspan="5">No data available</td>
          </tr>
          <!-- Paginated rows -->
          <tr v-else v-for="(user, index) in paginatedUsers" :key="index">
            <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.location }}</td>
            <td>{{ user.email }}</td>
            <td class="flex justify-center items-center gap-2">
              <RouterLink
                :to="'/userDetails/' + user.id"
                class="btn btn-sm btn-outline btn-primary flex items-center gap-1"
              >
                <i class="pi pi-external-link"></i>
                View
              </RouterLink>

              <button class="btn btn-sm btn-outline btn-secondary flex items-center gap-1">
                <i class="pi pi-trash"></i>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination Controls -->
      <div class="flex justify-center items-center py-4 space-x-2">
        <button 
          class="btn btn-sm btn-outline" 
          :disabled="currentPage === 1" 
          @click="goToPage(currentPage - 1)">
          Previous
        </button>
        <span class="px-4">Page {{ currentPage }} of {{ totalPages }}</span>
        <button 
          class="btn btn-sm btn-outline" 
          :disabled="currentPage === totalPages || userStore.users.length === 0" 
          @click="goToPage(currentPage + 1)">
          Next
        </button>
      </div>
    </div>
  </section>
</template>
