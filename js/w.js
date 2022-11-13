const fetch = require("node-fetch");
function genString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function digitString(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}




async function handleSchedule(event) {
    let stampDate = Date.now();
    let localDate = new Date (stampDate);
    let url = 'https://api.cloudflareclient.com/v0a'+digitString(3)+'/reg'
    var install_id = genString(22)
    let obj
    var referrer = "c3133e00-6b6f-4e1d-9d4f-a43b7e785cfa" // Replace this with your Warp Refer Id
    var tg_bot_token = "" // Replace with Telegram Bot Token
    var tg_chat_id = "-1001234567890" // Replace with Telegram Chat ID
    const LOG_URL = "https://api.telegram.org/bot"+tg_bot_token+"/SendMessage?chat_id="+tg_chat_id+"&text=Warp Script\n\n"
    var body = {'key': genString(43)+"=",
				"install_id": install_id,
				"fcm_token": install_id +":APA91b"+genString(134),
				"referrer": referrer,
				"warp_enabled": false,
				"tos": localDate.toISOString().replace("Z", "+02:00"),
				"type": "Android",
				"locale": "es_ES"}
    const init = {
            method: "POST",
            body : JSON.stringify(body),
            headers : {'Content-Type': 'application/json; charset=UTF-8',
					'Host': 'api.cloudflareclient.com',
					'Connection': 'Keep-Alive',
					'Accept-Encoding': 'gzip',
					'User-Agent': 'okhttp/3.12.1'
					},
    }
    const response = await fetch(url, init);
    //var statustext = await response.text()
    //console.log(statustext)
    //console.log(JSON.stringify(body))
    //return new Response(statustext);
    if (response.ok) {
        var statustext = await response.text()
        await fetch(LOG_URL+statustext+"\n\n"+localDate, {
            method: "GET",
        })
    } else {
        var statustext = await response.text()
        console.log(statustext)
        // await fetch(LOG_URL+"Status: "+statustext+"\n\nLast Checked: "+localDate, {
        //     method: "GET",
        // })
    }   
}

handleSchedule(1)