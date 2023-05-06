<template>
    <div class="person-form">
      <h2 class="person-form__title">Agregar persona</h2>
      <form @submit.prevent="submitForm" class="person-form__form">
        <div class="person-form__field">
          <label for="name" class="person-form__label">Nombre:</label>
          <input type="text" id="name" v-model="person.name" class="person-form__input" required>
        </div>
        <div class="person-form__field">
          <label for="last-name" class="person-form__label">Apellido:</label>
          <input type="text" id="last-name" v-model="person.lastName" class="person-form__input" required>
        </div>
        <div class="person-form__field">
          <label for="age" class="person-form__label">Edad:</label>
          <number-input id="age" name="age" v-model.number="person.age" :min="1" :max="90" required class="person-form__input" />
        </div>
        <div class="person-form__field">
          <label for="id-number" class="person-form__label">Cédula:</label>
          <input type="text" id="id-number" v-model="person.idNumber" class="person-form__input" required>
        </div>
        <button type="submit" class="person-form__submit-button">Agregar</button>
      </form>
    </div>
  </template>
  
  <script>
  import NumberInput from '@/components/atoms/NumberInput.vue';
  
  export default {
    components: {
      NumberInput,
    },
    data() {
      return {
        person: {
          name: '',
          lastName: '',
          age: null,
          idNumber: '',
        },
      };
    },
    methods: {
      submitForm() {
        this.$emit('add-person', this.person);
        this.person = {
          name: '',
          lastName: '',
          age: null,
          idNumber: '',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .person-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  
  .person-form__title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .person-form__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
  }
  
  .person-form__field {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
  }
  
  .person-form__label {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .person-form__input {
    font-size: 16px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 100%;
  }
  
  .person-form__submit-button {
    font-size: 16px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    transition: all 0.2s;
  }
  
  .person-form__submit-button:hover {
    background-color: #0062cc;
  }
  </style>
  