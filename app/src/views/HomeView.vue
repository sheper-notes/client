<script setup>

</script>

<template>
  <div>
    <header class="HomeNavBar">
      <img src="@/assets/logo.svg" alt="">
      <a>Features</a>
      <a>Use cases</a>
      <a>Plans</a>
    </header>
    <div class="HomeBanner">
      <div class="TxtAndButtons">
        <h1 >Collaborate. Design.<br/>Present.</h1>
        <a class="SignUpEmail" href="">Sign up using Email</a>
        <a class="SignUpGoogle" href="">Sign up using Google</a>
      </div>
    </div>
    <div class="HomeFeatures">
      <h1>Features</h1>
      <div class="HomeFeaturesBox">

      </div>
      <div class="HomeFeatureCard">
        <img src="@/assets/test.jpg" alt="">
        <div>
          <h4>Present</h4>
          <p>Easily pitch ideas or present using the presentation features</p>
        </div>
      </div>
      <div class="HomeFeatureCard">
        <img src="@/assets/test.jpg" alt="">
        <div>
          <h4>Collaborate</h4>
          <p>Collaborate with a team in realtime</p>
        </div>
      </div>
      <div class="HomeFeatureCard">
        <img src="@/assets/test.jpg" alt="">
        <div>
          <h4>Design freely</h4>
          <p>Design using the built in tool suite or obtain components from the marketplace</p>
        </div>
      </div>
      <div class="HomeFeatureCard">
        <img src="@/assets/test.jpg" alt="">
        <div>
          <h4>Program behaviour</h4>
          <p>Program actions to use while creating or presenting</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;800&display=swap');  
.HomeNavBar{
    z-index: 2;
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    background-color: #fff;
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
    background-color: #fff;
    border-radius: 5px;
    text-decoration: none;
    color: black;
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

  .HomeFeatures {
    color: #000;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .HomeFeatureCard {
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 150px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 3px 12px 1px rgba(136, 136, 136, 0.25);
    margin: 20px
  }

  .HomeFeatureCard > img {
    height: 100%;
    margin-right: 10px;
    border-radius:  10px 0px 0px 10px; 
  }
</style>