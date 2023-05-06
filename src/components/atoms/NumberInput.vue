<template>
    <div class="number-input">
      <label :for="name">{{ label }}</label>
      <input type="number" :id="name" :name="name" :value="value" :min="min" :max="max" :step="step" :disabled="disabled" @input="updateValue">
    </div>
  </template>
  
  <script>
  export default {
    name: 'NumberInput',
    props: {
      name: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      value: {
        type: Number,
        required: true
      },
      min: {
        type: Number,
        default: undefined
      },
      max: {
        type: Number,
        default: undefined
      },
      step: {
        type: Number,
        default: 1
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      updateValue(event) {
        const value = Number(event.target.value);
        this.$emit('input', value);
      }
    }
  };
  </script>
  