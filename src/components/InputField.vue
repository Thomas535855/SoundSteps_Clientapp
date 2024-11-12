<template>
    <div>
      <input class="inputField" :type="type" :required="required" @input="updateInput" :placeholder='"Enter text"' />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'InputField',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      required: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      updateInput(event: Event) {
        const input = event.target as HTMLInputElement;
        this.$emit('update:modelValue', input.value);
      }
    }
  });
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  
  .inputField {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #ffffff;
    color: #333;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  
  .inputField::placeholder {
    color: #ccc;
  }
  </style>
  