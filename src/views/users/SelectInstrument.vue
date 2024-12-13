<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Button from "@/components/Button.vue";

export default defineComponent({
  name: 'SelectInstrument',
  components: {
    Button,
  },

  data() {
    return {
      user: {
        skillLevel: 5,
      },
    };
  },

  setup() {
    const instruments = ref<string[]>([]);
    const selectedInstrument = ref<{ id: number; name: string } | null>(null);

    const fetchInstruments = async () => {
      try {
        const response = await fetch('http://localhost:5029/api/Instrument/GetAll', {
          method: 'GET',
        });
        if (response.ok) {
          instruments.value = await response.json();
        } else {
          console.error('Failed to fetch instruments:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching instruments:', error);
      }
    };

    onMounted(fetchInstruments);

    return {
      instruments,
      selectedInstrument,
    };
  },

  methods: {
    async addInstrumentToUser(userId: number, instrumentName: string) {
      try {
        const url = `http://localhost:5029/api/Users/AddInstrumentToUser?userId=${userId}&instrumentName=${encodeURIComponent(instrumentName)}`;
        console.log("Request URL:", url);

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to add instrument: ${response.statusText}`);
        }

        console.log('Instrument added successfully');
      } catch (error) {
        console.error('Error in addInstrumentToUser:', error);
      }
    },



    submitInstrument() {
      const userId = 1;
      const instrumentName = this.selectedInstrument?.name;
      
      if (!instrumentName) {
        console.error('No valid instrument selected.');
        return;
      }

      this.addInstrumentToUser(userId, instrumentName);
    }

  },
});
</script>



<template>
  <div class="select-instrument">
    <form @submit.prevent="submitInstrument()">
      <div class="form-container">
        <h2>Select your main instrument</h2>
        <div class="form-group">
          <label for="instrument-select">Instrument</label>
          <select id="instrument-select" class="dropdown" v-model="selectedInstrument">
            <option v-for="instrument in instruments" :key="instrument.id" :value="instrument">
              {{ instrument.name }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="skill-slider">Skill level</label>
          <div class="slider-container">
            <span>Beginner</span>
            <input
                type="range"
                id="skill-slider"
                min="1"
                max="10"
                step="1"
                class="slider"
                v-model="user.skillLevel"
            />
            <span>Expert</span>
          </div>
        </div>

        <Button text="Submit"></Button>
      </div>
    </form>
  </div>
</template>


<style scoped>
.select-instrument {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
}

.form-container {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

h2 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #555;
}

.dropdown {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.slider-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.slider {
  flex: 1;
  margin: 0 1rem;
}

button {
  margin-top: 1rem;
}
</style>
