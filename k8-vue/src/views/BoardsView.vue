<template lang="">
    <div>
        <div class="leftBar">
            <div class="UserName">User name</div>
            <div class="SearchBar">Search Bar</div>
            <template v-for="item in boards">
                <a :href="'editor/' + item.id"> {{item.name}}</a>
            </template>
        </div>
        <div class="mainView">
            <div class="topBar"></div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      boards: null,
      error: null,
    }
  },
  async created() {
    const boards = await fetch("https://localhost:7236/api/Board")
    const data = await boards.json()
    this.boards = data
  },
  methods: {
    
  }
}
</script>
<style lang="css">
    .leftBar {
        position: fixed;
        width: 220px;
        height: 100vh;
        border-right: 1px solid #E1E1E1;
        display: flex;
        flex-direction: column;
    }

    .mainView {
        position: fixed;
        width: calc(100vw - 220px);
        left: 220px;
        height: 100vh;
        border-right: 1px solid #E1E1E1;
    }

    .UserName {
        width: 100%;
        height: 40px;
    }

    .SearchBar{
        width: 100%;
        height: 30px;
        border-bottom: 1px solid #E1E1E1;
    }

    .BoardItem {

    }

    .topBar {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #E1E1E1;
    }
</style>