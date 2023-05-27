<template>
  <div>
    <FormularioPersona @agregar-persona="agregarPersona" />
    <ListaPersonas :personas="personas" @eliminar-persona="eliminarPersona" />
  </div>
</template>

<script>
import FormularioPersona from '@/components/moleculas/FormularioPersona.vue';
import ListaPersonas from '@/components/organismos/ListaPersonas.vue';

export default {
  components: {
    FormularioPersona,
    ListaPersonas,
  },
  data() {
    return {
      personas: [
        { id: 1, nombre: 'Maria', apellido: 'Carvajal', edad: 30, numeroCedula: '12345678' },
        { id: 2, nombre: 'Jonathan', apellido: 'Muñoz', edad: 25, numeroCedula: '87654321' },
        { id: 3, nombre: 'Daniel', apellido: 'Torres', edad: 2, numeroCedula: '87654321' },
      ],
      siguienteIdPersona: 4,
    };
  },
  methods: {
    agregarPersona(persona) {
      persona.id = this.siguienteIdPersona++;
      this.personas.push(persona);
    },
    eliminarPersona(id) {
      this.personas = this.personas.filter((persona) => persona.id !== id);
    },
  },
};
</script>