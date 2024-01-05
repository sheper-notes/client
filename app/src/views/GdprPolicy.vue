<template>
    <div style="color: #fff; margin-left: 20px;">
        <h1>GDPR</h1>
        <ul class="toc_list">
            <li><a href="#ADS">Account data storage</a></li>
            <ul class="toc_list">
                <li><a href="#ML">Manual login</a></li>
                <li><a href="#GL">Google login</a></li>
            </ul>
            <li><a href="#BDS">Board data storage</a></li>
            <li><a href="#DD">Data deletion</a></li>
            <li><a href="#DO">Data ownership</a></li>
            <li><a href="#SDC">Stop data collection</a></li>
        </ul>

        <h2 id="ADS">Account data storage</h2>
        <p>Account data is managed by a third party identity provider called <a href="https://auth0.com">Auth0</a></p>
        <h3 id="ML">Manual login</h3>
        <p>The manual login options allows a user to create an account using an email and password.<br/>Auth0 saves the following information for a user:</p>
        <code lang="json"> { "test": 1}</code>
        <h3 id="GL">Google login</h3>
        <p>The google login options allows a user to create an account using their google account.<br/>Auth0 saves the following information for a user:</p>
        <code lang="json"> { "test": 1}</code>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 id="BDS">Board data storage</h2>
        <p>To be able to use a board the following data is saved</p>
        <p>Board:</p>
        <code> 
            {<br/>
                &emsp;&emsp;"Id": 1,<br/>
                &emsp;&emsp;"Name": "Board Name",<br/>
                &emsp;&emsp;"Users": [<br/>
                &emsp;&emsp;&emsp;{<br/>
                    &emsp;&emsp;&emsp;&emsp;"UserId": "user-id"<br/>
                    &emsp;&emsp;&emsp;&emsp;"Role": "viewer"<br/>
                    &emsp;&emsp;&emsp;}<br/>
                    &emsp;&emsp;]<br/>
            }
        </code>
        <p>Board Object:</p>
        <code>
            {<br/>
                &emsp;&emsp;"Id": 1,<br/>
                &emsp;&emsp;"BoardId": 1,<br/>
                &emsp;&emsp;"Name": "Object Name",<br/>
                &emsp;&emsp;"X": 2,<br/>
                &emsp;&emsp;"Y": 56,<br/>
                &emsp;&emsp;"Width": 453,<br/>
                &emsp;&emsp;"Height": 53,<br/>
                &emsp;&emsp;"Color": "#ef05f0",<br/>
            }
        </code>
        <p>The following data of the models is encrypted</p>
        <p>Board > Name</p>
        <p>Board > Users > UserId</p>
        <p>Board Object > Name</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 id="DD">Data deletion</h2>
        <p>To delete data the <a href="data-management">data management page</a> it allows a user to delete their boards and delete their account</p>
        <h2 id="DO">Data ownership</h2>
        <p>To give the user ownership of their data the <a href="data-management">data management page</a> exists it allows a user to see all data collected and the ability to export said data</p>
        <h2 id="SDC">Stop data collection</h2>
        <p>Data collected is vital to the application function if a user wishes for the application to stop processing their data the actions in <a href="#DD">Data deletion</a> can be taken to remove the users data and account</p>
</div>
</template>

<script lang="js">

</script>

<style lang="css" scoped>

</style>