function csvConvert(str) { return str.split(',').map(x => x.trim()).filter(x => x); }

function players(obj) {
    let player_index = 12;
    let path_1 = "assets\\images\\baseball-player-1-sm.jpg";
    let path_2 = "assets\\images\\baseball-player-2-sm.jpg";

    let nickname_csv = "誰, 什麼, 我不知道, 為什麼, 因為, 明天, 今天, 我不管啦, 天啊, 三壘！！, 當然, 萬事夾";
    let position_csv = "一壘手, 二壘手, 三壘手, 左外野手, 中外野手, 投手, 捕手, 他是游擊手, 天啊是裁判, 我不知道！, 把球撿起來丟給, 萬事夾沒這個人";
    let number_csv = "22, 53, 12, 7, 42, 61, 57, 86, 99, 00, 00, 00";

    let nickname_list = csvConvert(nickname_csv);
    let position_list = csvConvert(position_csv);
    let number_list = csvConvert(number_csv);

    for (let index = 0; index < player_index; index++) {
        path = (index < (player_index / 2)) ? path_1 : path_2;

        $(`<div class="col-10 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-2 col-players d-flex justify-content-center m-3 shadow rounded-3">
            <div class="player text-center justify-content-center p-3">
                <img src="${path}" alt="player" class="img-fluid img-player m-1 rounded-2">
                <div class="position border-bottom mx-4 mt-1">${position_list[index]}</div>
                <div class="nickname fs-5 fw-bold mt-2">${nickname_list[index]}</div>
                <div class="number fs-3 fw-bold">${number_list[index]}</div>
            </div>
        </div>`).appendTo(obj)
    }
}

function make_codeblock() {
    let code_block = `
<div class="            col-10 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-2 col-players        // Colume breakpoint & Class name
                        d-flex justify-content-center       // Flex
                        m-3 shadow rounded-3">              // Margin, Padding... etc

    <div class="player  text-center justify-content-center  p-3">

        <img src="\${path}" alt="player" class="img-fluid img-player  m-1 rounded-2">
        <div class="position  border-bottom mx-4 mt-1">\${position_list[index]}</div>
        <div class="nickname  fs-5 fw-bold mt-2">\${nickname_list[index]}</div>
        <div class="number    fs-3 fw-bold">\${number_list[index]}</div>

    </div>

</div>`;

    // const shiki = require('shiki')

    // const t = shiki.loadTheme('assets/themes/palenight-italic.json')

    shiki
        .getHighlighter({
            theme: 'one-dark-pro',
            langs: ['html', 'js'],
        })
        .then(highlighter => {
            const code = highlighter.codeToHtml(`${code_block}`, { lang: 'html' })
            document.getElementById('output').innerHTML = code
        })
}

make_codeblock();