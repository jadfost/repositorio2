<template>
  <div class="lista-personas">
    <h2>Lista de personas</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Cédula</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="persona in personas" :key="persona.id">
          <td>{{ persona.nombre }}</td>
          <td>{{ persona.apellido }}</td>
          <td>{{ persona.edad }}</td>
          <td>{{ persona.numeroCedula }}</td>
          <td><button @click="eliminarPersona(persona.id)">Eliminar</button></td>
        </tr>
      </tbody>
      <p>Total de personas mayores de edad: {{ contadorAdultos }}</p>
      <p>Total de personas menores de edad: {{ contadorMenores }}</p>
    </table>
    
  </div>
</template>

<script>
export default {
  props: {
    personas: {
      type: Array,
      required: true,
    },
  },
  computed: {
    contadorAdultos() {
      return this.personas.filter((persona) => persona.edad >= 18).length;
    },
    contadorMenores() {
      return this.personas.filter((persona) => persona.edad < 18).length;
    },
  },
  methods: {
    eliminarPersona(id) {
      this.$emit("eliminar-persona", id);
    },
    actualizarPersonas(personas) {
      this.$emit("update:personas", personas);
    },
  },
};
</script>

<style scoped>
.lista-personas {
  margin-top: 2rem;
  color: black;
}
h2{
  display: flex;
  align-items: center;
  justify-content: center;
}

table {
  border-collapse: collapse;
  width: 50%;
  margin: auto;
}

th,
td {
  text-align: left;
  padding: 8px;
  color: black;
}

th {
  background-color: #666;
  color: rgb(0, 0, 0);
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

button {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>