# whitelistBot

Please gib Send and Manage Messages permissions to bot app or it will gib u a free cookie.

Requirements:

    - Node.JS
    - Brain 😅

Setup:

    - Clone repository
    - Rename config.example.json to config.json
    - Replace token with bot token
    - Change config as your like:
        . "status": "online", // "online", "idle", "dnd", "invisible"
        . "activitiesName": "", // this will show as text, test it
        . "activitiesType": 0 // 0 -> playing, 1 -> streaming (Twitch only), 2 -> listening, 3 -> watching, 5 -> competing in
    - Run `npm install --no-optional eris`
    - Start with main.js

Known Issues:

    - Just none im incredible

Future Development:

    - Right I will update the code. SOON 👀 (instead of verify for whitelist then else the rest, i will change it to verify if message has web protocol and if the domain isn't whitelisted)
    - Subdomain verification

Contribution:

    - Fix my code thanks