<template>
    <div style="color: #fff;">
        {{apiData}}
    </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: null,
      loading: true,
    };
  },
  mounted() {
    this.fetchApiData();
  },
  methods: {
    async fetchApiData() {
      try {
        const response = await fetch('http://localhost:5030/api/BoardObject/' + this.$route.params.id);
        const data = await response.json();
        this.apiData = data;
        console.log(this.apiData)
      } catch (error) {
        console.error('Error fetching API data', error);
      } finally {
        this.loading = false;
      }
    }
  },
};
</script>

<style>

</style>