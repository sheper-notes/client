<script>
export default {
        methods: {
            login() {
                this.$auth0.loginWithRedirect({
                });
            },
            signup() {
                this.$auth0.loginWithRedirect({
                    screen_hint: 'signup',
                });
            },
        }
    };
</script>

<template>
  <div>
    <header class="HomeNavBar">
      <img src="@/assets/logo.svg" alt="">

    </header>
    <div class="HomeBanner">
      <div class="TxtAndButtons">
        <h1 >Collaborate. Design.<br/>Present.</h1>
        <a class="SignUpEmail" @click="signup">Sign up</a>
        <a class="SignUpGoogle" @click="login">Login</a>
      </div>
    </div>
      
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;800&display=swap');  
.HomeNavBar{
    z-index: 2;
    width: calc(100vw - 20px);
    position: fixed;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    top: 0;
    background-color: #121212;
    box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.25);
  }

  .HomeBanner {
    width: 100%;
    height: 85vh;
    border-radius: 0px 0px 50px 50px;
    background: #EF36FF;
  }

  .HomeBanner > .TxtAndButtons {
    position: relative;
    top: 30%;
    width: 100%;
    margin: 0;
    text-align: center;
    color: #F9FAFE;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  .SignUpGoogle {
    padding: 10px;
    margin-left: 10px;
    background-color: #1E1F22;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .SignUpEmail {
    padding: 10px;
    margin-right: 10px;
    background-color: #790caf;
    border-radius: 5px;
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }


</style>