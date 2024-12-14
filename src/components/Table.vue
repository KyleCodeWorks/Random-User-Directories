<script setup>
import { userStore } from '@/stores/userStore.js';
</script>

<template>
    <section class="container-md py-12">
        <div class="max-w-5xl mx-auto overflow-x-auto px-4">
            <table class="table table-zebra w-full text-center">
                <!-- Head -->
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
                    <tr v-if="userStore.users.length === 0">
                        <td colspan="5">No data available</td>
                    </tr>
                    <tr v-else v-for="(user, index) in userStore.users" :key="index">
                        <td>{{ index + 1}}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.location }}</td>
                        <td>{{ user.email }}</td>
                        <td class="flex justify-center items-center gap-2">
                            <button class="btn btn-sm btn-outline btn-primary flex items-center gap-1">
                                <i class="pi pi-external-link"></i>
                                View
                            </button>
                            <button class="btn btn-sm btn-outline btn-secondary flex items-center gap-1">
                                <i class="pi pi-trash"></i>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
