<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import { userStore, addUser } from '@/stores/userStore.js';

// holds the info of each user fetch by api
const user = ref({
    name: '',
    location: '',
    email: '',
    thumbnail: ''
});

//for uniqueID
let idCounter = 1;

const fetchUser = (async () => {
    try {
        // const response = await axios.get('https://devnorth-ais-tadeco.anflocor.com/db/api.php');
        // const userInfo = response.data;
        const response = await axios.get('https://randomuser.me/api/');
        const userInfo = response.data.results[0];

        // Add fetched user details to `user`
        const newUser = {
            id: idCounter++, // Incremental ID
            name: `${userInfo.name.first} ${userInfo.name.last}`,
            location: `${userInfo.location.city}, ${userInfo.location.country}`,
            email: userInfo.email,
            thumbnail: userInfo.picture.large
        };

        user.value = newUser; // Update the current user
        addUser(newUser); // Add the user to the users array

        console.log('All Users:', userStore.users);
    } catch (error) {
        console.error("Error Fetching User", error);
    }
});
</script>

<template>
    <section>
        <div class="hero bg-base-200 min-h-[70vh] py-12">
            <div class="hero-content flex flex-col items-center text-center">
                <div class="max-w-2xl w-full mx-auto flex flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
                    <!-- Avatar -->
                    <div class="avatar">
                        <div class="w-32 h-32 sm:w-48 sm:h-48 rounded-xl shadow-lg">
                            <img
                                :src="user.thumbnail || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'" />
                        </div>
                    </div>
                    <!-- User Details -->
                    <div class="text-center space-y-2">
                        <p class="text-xl sm:text-2xl font-semibold text-neutral">{{ user.name || 'Lorem Ipsum' }}</p>
                        <p class="text-sm sm:text-base text-neutral/70">{{ user.location || 'Lorem Ipsum' }}</p>
                        <p class="text-sm sm:text-base text-neutral/70">{{ user.email || 'Lorem Ipsum' }}</p>
                    </div>
                    <!-- Button -->
                    <button @click="fetchUser" class="btn btn-primary mt-4 sm:mt-6 px-4 sm:px-6 py-2">Fetch
                        user</button>
                </div>
            </div>
        </div>
    </section>


</template>