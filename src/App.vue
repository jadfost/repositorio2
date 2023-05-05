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

