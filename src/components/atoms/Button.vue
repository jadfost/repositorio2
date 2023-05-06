<template>
    <button :class="classes" :disabled="disabled" @click="handleClick">
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    name: "Button",
    props: {
      label: {
        type: String,
        required: true,
      },
      variant: {
        type: String,
        default: "primary",
        validator: (value) => {
          return ["primary", "secondary", "success", "danger", "warning"].includes(value);
        },
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      classes() {
        return `btn btn-${this.variant}`;
      },
    },
    methods: {
      handleClick() {
        this.$emit("click");
      },
    },
  };
  </script>
  
  <style scoped>
  .btn {
    display: inline-block;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  .btn-primary {
    background-color: #1976d2;
    color: #fff;
  }
  
  .btn-secondary {
    background-color: #e0e0e0;
    color: #424242;
  }
  
  .btn-success {
    background-color: #4caf50;
    color: #fff;
  }
  
  .btn-danger {
    background-color: #f44336;
    color: #fff;
  }
  
  .btn-warning {
    background-color: #ffc107;
    color: #fff;
  }
  
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  