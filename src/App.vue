<template>
  <div>
    <h1 className="person-list-heading">Lista de personas</h1>
    <button @click="mostrarFormulario = !mostrarFormulario" :class="{'button-toggle': mostrarFormulario, 'show': mostrarFormulario}">
      + AGREGAR NUEVA PERSONA
    </button>
    <FormularioPersona v-if="mostrarFormulario" @agregar-persona="agregarPersona" />
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
        { id: 4, nombre: 'Maria', apellido: 'Carvajal', edad: 30, numeroCedula: '12345678' },
        { id: 5, nombre: 'Jonathan', apellido: 'Muñoz', edad: 25, numeroCedula: '87654321' },
        { id: 6, nombre: 'DanielO', apellido: 'Torres', edad: 2, numeroCedula: '87654321' },
      ],
      siguienteIdPersona: 4,
      mostrarFormulario: false, 
    };
  },
  methods: {
  agregarPersona(persona) {
    persona.id = this.siguienteIdPersona++;
    this.personas.push(persona);
    this.mostrarFormulario = false;
    },
    eliminarPersona(id) {
      this.personas = this.personas.filter((persona) => persona.id !== id);
    },
  },
};
</script>

<style scoped>
.person-list-heading {
    font-size: 2rem;
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
  }
.button-toggle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #252fc0;
    border: none;
    border-radius: 0.25rem;
  }
  
  .button-toggle::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1rem;
  }
  
  .button-toggle.show::after {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  
  .button-toggle:hover {
    background-color: #0069d9;
  }
  
  .button-toggle:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
</style>