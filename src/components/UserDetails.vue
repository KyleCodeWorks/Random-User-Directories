<script setup>
import { computed } from 'vue';
import { userStore } from '@/stores/userStore';
import { useRoute } from 'vue-router';

// Access the route params
const route = useRoute();
const userId = route.params.id;

// Fetch the user from the store
const user = computed(() =>
  userStore.users.find((u) => u.id === parseInt(userId))
);
</script>

<template>

    <!-- Picture Section -->
    <div class="w-48 h-48 sm:w-48 sm:h-48 rounded-xl shadow-lg">
      <img
        :src="user.thumbnail || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'"
        class="w-full h-full object-cover" />
    </div>

    <!-- Details Section -->
    <div class="w-2/3 bg-white shadow p-4">
      <div class="grid grid-cols-2 gap-4">
        <!-- Name Fields -->
        <div>
          <label class="block text-gray-700">Name</label>
          <input
            type="text"
            class="w-full border border-gray-300 p-2 rounded"
            v-model="user.name"
            placeholder="Enter name" />
        </div>
        <div>
          <label class="block text-gray-700">Location</label>
          <input
            type="text"
            class="w-full border border-gray-300 p-2 rounded"
            v-model="user.location"
            placeholder="Enter location" />
        </div>
        <div>
          <label class="block text-gray-700">Email Address</label>
          <input
            type="text"
            class="w-full border border-gray-300 p-2 rounded"
            v-model="user.email"
            placeholder="Enter email" />
        </div>
      </div>
    </div>
</template>
