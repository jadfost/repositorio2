<template>
  <div class="person-list">
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
        <tr v-for="person in persons" :key="person.id">
          <td>{{ person.name }}</td>
          <td>{{ person.lastName }}</td>
          <td>{{ person.age }}</td>
          <td>{{ person.idNumber }}</td>
          <td><button @click="removePerson(person.id)">Eliminar</button></td>
        </tr>
      </tbody>
      <p>Total de personas mayores de edad: {{ adultsCount }}</p>
      <p>Total de personas menores de edad: {{ minorsCount }}</p>
    </table>
    
  </div>
</template>

<script>
export default {
  props: {
    persons: {
      type: Array,
      required: true,
    },
  },
  computed: {
    adultsCount() {
      return this.persons.filter((person) => person.age >= 18).length;
    },
    minorsCount() {
      return this.persons.filter((person) => person.age < 18).length;
    },
  },
  methods: {
    removePerson(id) {
      this.$emit("remove-person", id);
    },
    updatePersons(persons) {
      this.$emit("update:persons", persons);
    },
  },
};
</script>

<style scoped>
.person-list {
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