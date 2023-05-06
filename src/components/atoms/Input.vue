<template>
    <div class="input-container">
      <label :for="name">{{ label }}</label>
      <input :type="type" :id="name" :name="name" :value="value" :placeholder="placeholder" :disabled="disabled" @input="$emit('input', $event.target.value)">
    </div>
  </template>
  
  <script>
  export default {
    name: 'Input',
    props: {
      label: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <style scoped>
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  input {
    padding: 5px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  label {
    margin-bottom: 5px;
    font-weight: bold;
    text-transform: capitalize;
  }
  </style>
  