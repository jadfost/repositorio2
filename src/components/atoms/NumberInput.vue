<template>
  <div class="campo-numerico">
    <label :for="name">{{ label }}</label>
    <input type="number" :id="name" :name="name" :value="value" :min="min" :max="max" :step="step" :disabled="deshabilitado" @input="actualizarValor">
  </div>
</template>

<script>
export default {
  name: 'CampoNumerico',
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
    deshabilitado: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    actualizarValor(evento) {
      const valor = Number(evento.target.value);
      this.$emit('input', valor);
    }
  }
};
</script>
