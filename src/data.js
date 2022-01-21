function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

let Sci_Fi = importAll(require.context('./img/Sci_Fi', false, /\.(png|jpe?g|svg)$/));
let Action = importAll(require.context('./img/Action', false, /\.(png|jpe?g|svg)$/));
let Sitcoms = importAll(require.context('./img/Sitcoms', false, /\.(png|jpe?g|svg)$/));
let Romantic = importAll(require.context('./img/Romantic', false, /\.(png|jpe?g|svg)$/));
let K_Drama = importAll(require.context('./img/K-Drama', false, /\.(png|jpe?g|svg)$/));

let img = (Obj) => {
    let arr = []
    let id = 0

    for (let elem in Obj) {
        id++
        let url = elem.substring(0, elem.length - 4)
        arr = [...arr, { id: id, image: Obj[elem].default, url }]
    }
    return arr
}


console.log(img(Sci_Fi))

export const Data = {
    Sci_Fi: img(Sci_Fi),
    Action: img(Action),
    Sitcoms: img(Sitcoms),
    Romantic: img(Romantic),
    K_Drama: img(K_Drama)
}
