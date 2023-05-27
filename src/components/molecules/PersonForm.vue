<template>
  <div class="formulario-persona">
    <h2 class="formulario-persona__titulo">Agregar persona</h2>
    <form @submit.prevent="enviarFormulario" class="formulario-persona__formulario">
      <div class="formulario-persona__campo">
        <label for="nombre" class="formulario-persona__etiqueta">Nombre:</label>
        <input type="text" id="nombre" v-model="persona.nombre" class="formulario-persona__entrada" required>
      </div>
      <div class="formulario-persona__campo">
        <label for="apellido" class="formulario-persona__etiqueta">Apellido:</label>
        <input type="text" id="apellido" v-model="persona.apellido" class="formulario-persona__entrada" required>
      </div>
      <div class="formulario-persona__campo">
        <label for="edad" class="formulario-persona__etiqueta">Edad:</label>
        <input id="edad" name="edad" v-model.number="persona.edad" class="formulario-persona__entrada" />
      </div>
      <div class="formulario-persona__campo">
        <label for="cedula" class="formulario-persona__etiqueta">Cédula:</label>
        <input type="text" id="cedula" v-model="persona.numeroCedula" class="formulario-persona__entrada" required>
      </div>
      <button type="submit" class="formulario-persona__boton-submit">Agregar</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import CampoNumerico from '@/components/atoms/NumberInput.vue';

export default {
  components: {
    CampoNumerico,
  },
  data() {
    return {
      persona: {
        nombre: '',
        apellido: '',
        edad: '',
        numeroCedula: '',
      },
    };
  },
  methods: {
    enviarFormulario() {
      this.$emit('agregar-persona', this.persona);
      this.persona = {
        nombre: '',
        apellido: '',
        edad: '',
        numeroCedula: '',
      };
    },
  },
};
</script>
  
<style scoped>
.formulario-persona {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.formulario-persona__titulo {
  font-size: 24px;
  margin-bottom: 10px;
}

.formulario-persona__formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.formulario-persona__campo {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
}

.formulario-persona__etiqueta {
  font-size: 16px;
  margin-bottom: 5px;
}

.formulario-persona__entrada {
  font-size: 16px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
}

.formulario-persona__boton-submit {
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

.formulario-persona__boton-submit:hover {
  background-color: #0062cc;
}
</style>