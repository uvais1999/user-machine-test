<template>
<div class="m-10 p-10 bg-gray-400 rounded-[10px]">
    <div class="mb-5">
        <label for="search" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
        <input type="text" v-model="searchQuery" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
    </div>
    <div class="grid grid-cols-2 gap-5">
        <div v-for="user in filteredUsers">
            <a href="#" class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{user.name}}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{{ user.department.name }}</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">{{ user.destination.name }}</p>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  data(){
    return {
      searchQuery: '',
      users: [
        { id: 1, name: 'John', department: { id: 1, name: 'Marketing' },destination: { id: 1, name: 'Manager 1' } },
        { id: 2, name: 'Smith', department: { id: 2, name: 'Testing' },destination: { id: 2, name: 'QA' } },
        { id: 3, name: 'Johnson', department: { id: 3, name: 'Development 3' },destination: { id: 3, name: 'Laravel' } },
        { id: 4, name: 'Ajith', department: { id: 4, name: 'Sales' },destination: { id: 4, name: 'EDE' } }
      ]
    }
  },
  computed: {
    filteredUsers() {
      const query = this.searchQuery.toLowerCase();
      return this.users.filter(user => {
        return user.name.toLowerCase().includes(query) ||
               user.department.name.toLowerCase().includes(query) ||
               user.destination.name.toLowerCase().includes(query);
      });
    }
  },
  mounted() {
    console.log('WelcomeComponent has been mounted!');
  },
  methods:{

  }
}
</script>

<style scoped>


/* Add your styles here */
</style>
