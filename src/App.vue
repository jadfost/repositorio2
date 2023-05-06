<template>
  <div>
    <PersonForm @add-person="addPerson" />
    <PersonList :persons="persons" @remove-person="removePerson" />
  </div>
</template>

<script>
import PersonForm from '@/components/molecules/PersonForm.vue';
import PersonList from '@/components/organisms/PersonList.vue';

export default {
  components: {
    PersonForm,
    PersonList,
  },
  data() {
    return {
      persons: [
        { id: 1, name: 'Maria', lastName: 'Carvajal', age: 30, idNumber: '12345678' },
        { id: 2, name: 'Jonathan', lastName: 'Muñoz', age: 25, idNumber: '87654321' },
        { id: 2, name: 'Daniel', lastName: 'Torres', age: 2, idNumber: '87654321' },
      ],
      nextPersonId: 3,
    };
  },
  methods: {
    addPerson(person) {
      person.id = this.nextPersonId++;
      this.persons.push(person);
    },
    removePerson(id) {
      this.persons = this.persons.filter((person) => person.id !== id);
    },
  },
};
</script>