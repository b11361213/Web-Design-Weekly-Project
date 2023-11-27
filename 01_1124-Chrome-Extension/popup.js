chrome.tabs.query({currentWindow: true, active: true, lastFocusedWindow: true}, function(tabs) {
    tabs.forEach(function(tab) {
        tabID = tab.id;
        tabTitle = tab.title;
        tabURL = tab.url;
        
        document.getElementById('titleText').innerText = tabTitle;
        document.getElementById('urlText').innerText = tabURL;

        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: "http://jindo.dev.naver.com/collie",
            width: 180,
            height: 180,
            colorDark : "#29393D",
            colorLight : "#AFD5D2",
            correctLevel : QRCode.CorrectLevel.H
        });

        qrcode.clear(); // clear the code.
        qrcode.makeCode(tabURL); // make another code.
        // [GitHub - davidshimjs/qrcodejs: Cross-browser QRCode generator for javascript](https://github.com/davidshimjs/qrcodejs)
        

        document.getElementById('titleText').onclick = function() {
            navigator.clipboard.writeText(tabTitle);
            document.getElementById('title').innerText = 'Tab title copied';
            function recover() { document.getElementById('title').innerText = 'Tab title'; }
            setTimeout(recover, 450);
        }
        document.getElementById('urlText').onclick = function() {
            navigator.clipboard.writeText(tabURL);
            document.getElementById('url').innerText = 'Tab URL copied!!';
            function recover() { document.getElementById('url').innerText = 'Tab URL'; }
            setTimeout(recover, 450);
        }
        document.getElementById('qrcode').onclick = function() {
            navigator.clipboard.writeText(`[${tabTitle}](${tabURL})`);
        }


        // console.log('Tab ID: ', tab.id);
        // console.log('Tab Title: ', tab.title);
        // console.log('Tab URL: ', tab.url);
    });
});