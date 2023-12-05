<template lang="">
    <div>
        <header class="HomeNavBar">
                <img src="@/assets/logo.svg" alt="">
                <a>Log out</a>
            </header>
        <div class="mainView">

            <template v-for="item in boards">
                <div class="BoardItem">
                    <p> {{item.name}}</p>
                    <span>Role: Role</span>
                    <div>
                        <a class="Open">Open</a>
                        <a class="Settings">Settings</a>
                    </div>
                </div>
            </template>
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
    //const boards = await fetch("https://localhost:7236/api/Board")
    //const data = await boards.json()
    //this.boards = data
    this.boards = [
        {id: "1", name: "Test board"},
        {id: "1", name: "Test board"},
        {id: "1", name: "Test board"},
        {id: "1", name: "Test board"},
        {id: "1", name: "Test board"},
        {id: "1", name: "Test board"},
        {id: "1", name: "Test board"},

    ]
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


    .BoardItem {
        width: 256px;
        padding-bottom: 15px;
        flex: none;
        margin: 16px;
        border-radius: 10px;
        background-color: #121212;
    }

    .BoardItem > div > .Open {
        background-color: #EF36FF;
        width: 40%;
        border-radius: 6px;
        padding: 5px;
        display: block;
        text-align: center;    
        color: #000;
        font-family: Inter;
        font-size: 0.8rem;
        font-style: normal;
        font-weight: 400;
    }

    .BoardItem > div > .Settings {
        background-color: #8c8c8d;
        width: 40%;
        border-radius: 6px;
        padding: 5px;
        display: block;
        text-align: center;    
        color: #000;
        font-family: Inter;
        font-size: 0.8rem;
        font-style: normal;
        font-weight: 400;
    }

    .BoardItem > div {
        display: flex;
        justify-content: space-evenly;
    }

    .BoardItem > p {
        color: #fff;
        font-family: Inter;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 400;
    }

    .HomeNavBar > a {
        height: 43px;
        background-color: #EF36FF; 
        border-radius: 5px;  
        padding-left: 10px;
        padding-right: 10px;     
        line-height: 43px;
        text-align: center;    
        color: #000;
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
    }
</style>