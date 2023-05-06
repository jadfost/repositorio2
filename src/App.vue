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
        { id: 1, name: 'John', lastName: 'Doe', age: 30, idNumber: '12345678' },
        { id: 2, name: 'Jane', lastName: 'Doe', age: 25, idNumber: '87654321' },
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