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
        