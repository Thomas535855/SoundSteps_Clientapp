<script lang="ts">
import { defineComponent } from 'vue';
import Button from "@/components/Button.vue";

export default defineComponent({
  name: 'CreateInstrument',
  components: {
    Button,
  },
  data() {
    return {
      instrumentName: '',
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async createInstrument() {
      if (!this.instrumentName) {
        this.errorMessage = "Please enter an instrument name.";
        return;
      }

      try {
        const response = await fetch('http://soundsteps.api:5029/api/Instrument/Create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: this.instrumentName }),
        });

        if (response.ok) {
          this.successMessage = "Instrument created successfully!";
          this.instrumentName = '';
        } else {
          const errorData = await response.json();
          this.errorMessage = `Failed to create instrument: ${errorData.Message}`;
        }
      } catch (error) {
        this.errorMessage = 'An unexpected error occurred. Please try again later.';
      }
    },
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="title">Create a new instrument</h1>

      <div class="input-group">
        <input
            v-model="instrumentName"
            type="text"
            placeholder="Instrument Name"
            class="input"
        />
      </div>

      <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
      <div class="success-message" v-if="successMessage">{{ successMessage }}</div>

      <Button text="Create" @click="createInstrument"></Button>
    </div>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  background-size: cover;
}

.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
  padding: 3%;
  height: auto;
  min-height: 50%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  margin-bottom: 1.5em;
  font-size: 1.5em;
}

.input-group {
  margin-bottom: 1.5em;
}

.input {
  width: 100%;
  padding: 0.75em;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.error-message {
  color: red;
  margin-bottom: 1em;
}

.success-message {
  color: green;
  margin-bottom: 1em;
}
</style>