<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  created(){
   
    // get parameter for url
    const teamId = this.$route.params.teamId;

    // find that id team 
    const selectedTeam = this.teams.find(team => team.id == teamId);

    // get team members 
    const members = selectedTeam.members;

    const selectedMembers = [];

    // find each user in the user 
    for (const member of members) {

      const selectedUser = this.users.find(user => user.id == member);
      this.selectedMembers.push(selectedUser);
  }

  // assign to current component property 
  this.teamName = selectedTeam.name;
  this.members = selectedMembers;
}
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>