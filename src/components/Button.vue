<template>
    <button class="button">
        {{ text }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CustomButton',
    props: {
        text: {
            type: String,
            required: false
        },
        action: {
            type: Function,
            required: false,
            // default: () => { }
        }
    }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.button {
    font-family: "Inter", sans-serif;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #2c2c2c;
    color: #fff;
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 100%;
    margin-top: 7.5%;
    transition: color 0.3s ease, transform 0.3s ease;
}

.button:hover {
    transform: scale(1.05);
}
</style>