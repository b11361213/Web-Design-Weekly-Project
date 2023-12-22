$link = 'https://gazette.nat.gov.tw/EG_FileManager/eguploadpub/eg026150/ch04/type3/gov30/num13/images/Eg01.pdf';
$link2 = 'https://www.etax.nat.gov.tw/etwmain/api/functions/etw212w/download/18a49929f0e00000c88d77d84d4a57bf/%E7%A9%BA%E7%99%BD%E6%9B%B8%E8%A1%A8(pdf%E4%B8%AD%E8%8B%B1%E4%B8%A6%E5%88%97).pdf';
$link3 = 'https://www.etax.nat.gov.tw/etwmain/etw212w/detail/18ad49bbcb20000031d7f1e06ad74269';

async function genImg($payload_url, $id) {
    const url = 'https://qrcode3.p.rapidapi.com/qrcode/text';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'bc0261d743msh8cae5bb166f6f18p170517jsn11fea8d7b200',
            'X-RapidAPI-Host': 'qrcode3.p.rapidapi.com'
        },
        body: JSON.stringify({
            data: `${$payload_url}`,
            image: {
                uri: 'https://github.com/b11361213/Web-Page-Design/blob/main/htdocs/image/konata3.gif?raw=true',
                modules: true
            },
            style: {
                module: {
                    color: 'gray',
                    shape: 'default'
                },
                inner_eye: { shape: 'default' },
                outer_eye: { shape: 'default' },
                background: {}
            },
            size: {
                width: 150,
                quiet_zone: 4,
                error_correction: 'L'
            },
            output: {
                filename: 'qrcode',
                format: 'png'
            }
        })
    };
    try {
        const response = await fetch(url, options);
        const result = await response.blob();
        const qrCodeUrl = URL.createObjectURL(result);
        
        const qrCodeImage = document.getElementById(`${$id}`);
        qrCodeImage.src = qrCodeUrl;

        // console.log(result);
    } catch (error) {
        console.error(error);
    }
}
genImg($link, 'qrcode1');
genImg($link2, 'qrcode2');
genImg($link3, 'qrcode3');