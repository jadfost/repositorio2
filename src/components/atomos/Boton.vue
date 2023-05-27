<template>
  <button :class="clases" :disabled="deshabilitado" @click="manejarClick">
    {{ etiqueta }}
  </button>
</template>

<script>
export default {
  name: "Boton",
  props: {
    etiqueta: {
      type: String,
      required: true,
    },
    variante: {
      type: String,
      default: "primario",
      validator: (valor) => {
        return ["primario", "secundario", "exito", "peligro", "advertencia"].includes(valor);
      },
    },
    deshabilitado: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    clases() {
      return `btn btn-${this.variante}`;
    },
  },
  methods: {
    manejarClick() {
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

.btn-primario {
  background-color: #1976d2;
  color: #fff;
}

.btn-secundario {
  background-color: #e0e0e0;
  color: #424242;
}

.btn-exito {
  background-color: #4caf50;
  color: #fff;
}

.btn-peligro {
  background-color: #f44336;
  color: #fff;
}

.btn-advertencia {
  background-color: #ffc107;
  color: #fff;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>