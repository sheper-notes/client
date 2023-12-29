<template>
    <div class="LoginPage">
        <div class="LoginPanel">
            <button @click="login">Log in</button>
            <button @click="logout">Log out</button>
            <button @click="showToken">Show</button>

        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            login() {
                this.$auth0.loginWithRedirect({
                    screen_hint: 'signup',
                });
            },
            logout() {
                this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } });
            },
            async showToken() {
                console.log(this.$auth0.getAccessTokenSilently())
                //const otlk = await this.$auth0
                console.log(this.$auth0)
            }
        }
    };
</script>

<style lang="css" scoped>
    .LoginPage{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .LoginPanel {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 420px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 1px 6px 2px rgba(90, 90, 90, 0.25);
    }

    .LoginPanel > input[type="email"] {
        background-color: #F9FAFE;
        border-radius: 10px;
        border: 1px solid #E3E3E3;
    }

    input:focus{
        outline: none;
    }
</style>