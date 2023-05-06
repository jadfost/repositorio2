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