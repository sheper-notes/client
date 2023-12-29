<template lang="">
    <div>
        <header class="HomeNavBar">
                <img src="@/assets/logo.svg" alt="">
                <a>Log out</a>
            </header>
        <div class="mainView">
            <div class="SettingsPanel">
                <h1>{{ settings.name}}</h1>
                <div class="scrollable-list">
                    <ul>
                        <template v-for="item in settings.members">
                            <li>
                                <span>{{item.name}}</span>
                                <div>
                                    <select name="" id="">
                                        <option value="">Viewer</option>
                                        <option value="">Editor</option>
                                        <option value="">Owner</option>
                                    </select>
                                    <button>Remove</button>
                                </div>
                            </li>
                        </template>
                </ul>
                </div>
                
            </div>
            
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
    this.settings = {
        name: "Simons board",
        members: [
            { name: "Simoncox2003@gmail.com", role: 1, id: "id"},
            { name: "Simoncox2003@gmail.com", role: 1, id: "id"},
            { name: "Simoncox2003@gmail.com", role: 1, id: "id"},
            { name: "Simoncox2003@gmail.com", role: 1, id: "id"},
            { name: "Simoncox2003@gmail.com", role: 1, id: "id"},
            { name: "Simoncox2003@gmail.com", role: 1, id: "id"},
            { name: "Simoncox2003@gmail.com", role: 1, id: "id"},
            { name: "Simoncox2003@gmail.com", role: 1, id: "id"},
            { name: "Simoncox2003@gmail.com", role: 1, id: "id"},
            { name: "Simoncox2003@gmail.com", role: 1, id: "id"},
            { name: "Simoncox2003@gmail.com", role: 1, id: "id"},
        ]
    }
    console.log(this.boards)
  },
  methods: {
    
  }
}
</script>
<style lang="css">
    .mainView {
        position: fixed;
        top: 80px;
        width: calc(100vw - 20vw);
        height: auto;
        padding-left: 10vw;
        padding-right: 10vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between baseline;
        flex-shrink: 0;
    }

    .SettingsPanel {
        background-color: #121212;
        width: 100%;
        height: fit-content;
        padding-bottom: 10px;
        border-radius: 10px;
    }

    .SettingsPanel > h1 {
        padding: 10px;
        margin: 0;
        color: #F9FAFE;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }
    
    .scrollable-list {
      width: 100%;
      height: 200px;
      overflow-y: scroll;

    }
    .scrollable-list > ul {
        padding-left: 0;
    }

    /* Style list items */
    .scrollable-list li {
      list-style: none;
      display: flex;
      justify-content: space-between;
      padding: 8px;
      border-bottom: 1px solid #eee;
    }

    .scrollable-list li > span{
        color: #fff;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
</style>