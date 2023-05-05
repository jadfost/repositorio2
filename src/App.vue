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
export default {
  data() {
    return {
      personas: [
        { nombre: "Juan", apellido: "Pérez", edad: 25, cedula: "12345678" },
        { nombre: "María", apellido: "González", edad: 17, cedula: "23456789" },
        { nombre: "Pedro", apellido: "Sánchez", edad: 35, cedula: "34567890" }
      ],
      nuevoNombre: "",
      nuevoApellido: "",
      nuevaEdad: null,
      nuevaCedula: ""
    };
  },
  methods: {
    agregarPersona() {
      if (!this.nuevoNombre || !this.nuevoApellido || !this.nuevaEdad || !this.nuevaCedula) {
        alert("Todos los campos son obligatorios");
        return;
      }
      const persona = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevaEdad,
        cedula: this.nuevaCedula
      };
      this.personas.push(persona);
      this.nuevoNombre = "";
      this.nuevoApellido = "";
      this.nuevaEdad = null;
      this.nuevaCedula = "";
    },
    eliminarPersona(index) {
      this.personas.splice(index, 1);
    }
  },
  computed: {
    mayoresEdad() {
      return this.personas.filter(persona => persona.edad >= 18).length;
    },
    menoresEdad() {
      return this.personas.filter(persona => persona.edad < 18).length;
    }
  }
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

