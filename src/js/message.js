function message() {
    let messageArr = {
        user1: {name: "Александр Антоноич", desc: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem", date: "13/04/2018", time: "14:02", buy: "info__buy-active", online: ""},
        user2: {name: "Александр Антоноич", desc: "lorem", date: "13/04/2018", time: "14:02", buy: "", online: ""},
        user3: {name: "Александр Антоноич", desc: "lorem", date: "13/04/2018", time: "14:02", buy: "", online: ""},
        user4: {name: "Александр Антоноич", desc: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem", date: "13/04/2018", time: "14:02", buy: "", online: "info__user-online"},
        user5: {name: "Александр Антоноич", desc: "lorem", date: "13/04/2018", time: "14:02", buy: "info__buy-active", online: ""},
        user6: {name: "Александр Антоноич", desc: "lorem", date: "13/04/2018", time: "14:02", buy: "", online: ""},
        user7: {name: "Александр Антоноич", desc: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem", date: "13/04/2018", time: "14:02", buy: "", online: ""},
        user8: {name: "Александр Антоноич", desc: "lorem", date: "13/04/2018", time: "14:02", buy: "", online: "info__user-online"}
    };

    const wrap = document.querySelector('.info__items');

    for(let key in messageArr) {
        let html = createMes(messageArr[key].name, messageArr[key].desc, messageArr[key].date, messageArr[key].time, messageArr[key].buy, messageArr[key].online);
        
        wrap.insertAdjacentHTML('afterbegin', html);
    }

    function createMes(name, desc, date, time, buy, online) {
        return `
        <div class="info__item">
            <div class="info__checkbox">
                <input id="info__check" type="checkbox"/>
                <label for="info__check"></label>
            </div>
            <div class="info__user ${online}">
                <img src="/icons/user.svg" alt="user">
            </div>
            <div class="info__name">
                <div class="info__full">
                    ${name}
                </div>
                <div class="info__buy ${buy}">
                    <img src="/icons/shop.svg" alt="buy">
                </div>
            </div>
            <div class="info__text">
                ${desc}
            </div>
            <div class="info__time">
                <div class="info__date">${date}</div>
                <div class="info__hours">${time}</div>
            </div>
        </div>
        `
    }
}

export default message;