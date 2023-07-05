This project consists of a discord token grabber working by injecting a modified core.asar file in the discord client which is then listening to the client's requests to discord's api and reading the user's token.
<br>
Please note the token cannot directly be sent to the discord webhook (discord blocks requests to their webhook from their client) therefore it has to be sent to a server (flywer.xyz in this case) which is redirecting the token to a webhook (feel free to make your own server if you don't trust mine).
<br>
This method currently works on mac OS and Windows (in 2023)
