<script setup>
import { userStore } from '@/stores/userStore';
</script>

<template>
    <section class="container mx-auto mt-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <!-- Loop through users in the store -->
            <div v-for="user in userStore.users" :key="user.id" class="bg-white shadow-lg rounded-lg p-4 flex gap-4">
                <!-- Image Section -->

                <img :src="user.thumbnail || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'"
                    alt="User" class="w-24 h-24 md:w-48 md:h-auto md:rounded-none  mx-auto" />

                <!-- Details Section -->
                <div class="flex-grow">
                    <div>
                        <label class="block text-gray-700 font-medium">Name</label>
                        <input type="text" class="w-full border border-gray-300 p-2 rounded" v-model="user.name"
                            placeholder="Enter name" />
                    </div>
                    <div class="mt-2">
                        <label class="block text-gray-700 font-medium">Location</label>
                        <input type="text" class="w-full border border-gray-300 p-2 rounded" v-model="user.location"
                            placeholder="Enter location" />
                    </div>
                    <div class="mt-2">
                        <label class="block text-gray-700 font-medium">Email Address</label>
                        <input type="text" class="w-full border border-gray-300 p-2 rounded" v-model="user.email"
                            placeholder="Enter email" />
                    </div>
                    <div class="mt-4 flex gap-2">
                        <router-link :to="'/userDetails/' + user.id" class="btn btn-sm btn-outline btn-primary flex items-center gap-1">
                            View
                        </router-link>
                        <button @click="userStore.deleteUser(user.id)" class="btn btn-sm btn-outline btn-error flex items-center gap-1">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
function deleteUser(userId) {
    // Add the logic to delete the user by ID
    console.log(`Delete user with ID: ${userId}`);
}
</script>
