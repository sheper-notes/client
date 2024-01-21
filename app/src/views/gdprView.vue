<template>
    <div>
        <div>
            <h1>GDPR panel</h1>
            <div v-if="loading">Loading...</div>
            <div v-else>
                <h2>Account information</h2>
                <p style="color: #fff;">
                    {{ apiData}}
                </p>
            </div>
            <div v-if="boardsLoading">Loading...</div>
            <div v-else>
                <h2>Boards</h2>
                <ul style="color: #fff;">
                    <li v-for="item in boardsData" :key="item.id">{{ item.name }}<button @click="() => {$router.push('/export/'+ item.id)}">Export</button><p>{{ item.id}}</p></li>
                </ul>
            </div>  
            <button @click="deleteBoards()">Delete</button>
            <button @click="deleteAccount()" :disabled="canDeleteAccount">Delete Account</button>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: null,
      loading: true,
      boardsData: null,
      boardsLoading: true,
      canDeleteAccount: true,

    };
  },
  mounted() {
    this.fetchApiData();
    this.fetchBoards()
  },
  methods: {
    async fetchApiData() {
      try {
        const token = await this.$auth0.getAccessTokenSilently();
        console.log(token);
        const response = await fetch('http://localhost:5036/api/GDPR/account', {  
            method:'GET',
            headers: new Headers({
                'Authorization': 'Bearer '+token, 
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
        });
        const data = await response.json();
        this.apiData = data;
        console.log(this.apiData)
      } catch (error) {
        console.error('Error fetching API data', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchBoards() {
      try {
        const token = await this.$auth0.getAccessTokenSilently();
        const response = await fetch('http://localhost:5036/api/board/',
        {  
            method:'GET',
            headers: new Headers({
                'Authorization': 'Bearer '+token, 
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
        });
        const data = await response.json();
        this.boardsData = data;
      } catch (error) {
        console.error('Error fetching API data', error);
      } finally {
        this.boardsLoading = false;
      }
    },
    async deleteBoards() {
      try {
        const token = await this.$auth0.getAccessTokenSilently();
        const response = await fetch('http://localhost:5036/api/gdpr/all',
        {  
            method:'DELETE',
            headers: new Headers({
                'Authorization': 'Bearer '+ token, 
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
        });
        this.boardsData = null
        this.canDeleteAccount = false;
      } catch (error) {
        console.error('Error fetching API data', error);
      } finally {
        this.boardsLoading = false;
      }
    },
    async deleteAccount() {
      try {
        const token = await this.$auth0.getAccessTokenSilently();
        const response = await fetch('http://localhost:5036/api/gdpr/account',
        {  
            method:'DELETE',
            headers: new Headers({
                'Authorization': 'Bearer '+ token, 
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
        });
        const data = await response.json();
        this.boardsData = data;
      } catch (error) {
        console.error('Error fetching API data', error);
      } finally {
        this.boardsLoading = false;
      }
    },
  },
};
</script>

<style>

</style>