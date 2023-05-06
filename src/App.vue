<template>
  <div class="container">
    <h1 class="title">Lista de personas</h1>
    <form class="add-form" @submit.prevent="agregarPersona">
        <h2>Agregar persona</h2>
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nuevoNombre" required>
        </div>
        <div class="form-group">
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" v-model="nuevoApellido" required>
        </div>
        <div class="form-group">
          <label for="edad">Edad:</label>
          <input type="number" id="edad" v-model="nuevaEdad" required>
        </div>
        <div class="form-group">
          <label for="cedula">Cédula:</label>
          <input type="text" id="cedula" v-model="nuevaCedula" required>
        </div>
        <button type="submit" class="btn-add">Agregar</button>
    </form>
    <div class="summary">
        <h2>Resumen</h2>
        <p>Mayores de edad: {{ mayoresEdad }}</p>
        <p>Menores de edad: {{ menoresEdad }}</p>
    </div>
    <div class="card">
      <ul class="list">
        <li v-for="(persona, index) in personas" :key="index" class="list-item">
          <div class="list-item-content">
            <h3>{{ persona.nombre }} {{ persona.apellido }}</h3>
            <p>Edad: {{ persona.edad }} años</p>
            <p>Cédula: {{ persona.cedula }}</p>
          </div>
          <button @click="eliminarPersona(index)" class="btn-delete">Eliminar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import personas from './components/personas.js';

  export default {
    data() {
      return personas.data();
    },
    methods: personas.methods,
    computed: personas.computed
  };
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
}

.title {
  margin-bottom: 20px;
  text-align: center;
  color: #0077CC;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
}

.list {
  list-style: none;
  padding: 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}

.list-item-content {
  flex-grow: 1;
}

.btn-delete {
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.btn-add {
  background-color: #0077CC;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #0b0b0b;
}

.form-group input[type="text"],
.form-group input[type="number"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group input:focus {
  outline: none;
  border-color: #0077CC;
}
</style>