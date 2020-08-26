const products = [
    {
        "id": "backpack1",
        "category": "backpack",
        "flag": "Новинка",
        "sale": false,
        "name": "Городской рюкзак №1",
        "oldprice": 2100,
        "newprice": 1690,
        "img": "../img/promo__item--01.png",
        "size": "34x25x14",
        "description": "Три вместительных кармана один из них на молнии, ремешках-стяжках",
        "pictures": ["../img/avatar.png","../img/photo.png","../img/avatar.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон"
    },
    {
        "id": "backpack2",
        "category": "backpack",
        "flag": "Новинка",
        "sale": false,
        "name": "Городской рюкзак №2",
        "oldprice": 2100,
        "newprice": 1690,
        "img": "../img/promo__item--01.png",
        "size": "34x25x14",
        "description": "Три вместительных кармана один из них на молнии, ремешках-стяжках",
        "pictures": ["../img/photo.png","../img/avatar.png","../img/photo.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон"
    },
    {
        "id": "backpack3",
        "category": "backpack",
        "flag": "Старинк",
        "sale": false,
        "name": "Городской рюкзак №3",
        "oldprice": 2100,
        "newprice": 1690,
        "img": "../img/promo__item--01.png",
        "size": "34x25x14",
        "description": "Три вместительных кармана один из них на молнии, ремешках-стяжках",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png" ],
        "material": "Полиуретан/Нейлон"
    },
    {
        "id": "backpack4",
        "category": "backpack",
        "flag": "Новинка",
        "sale": false,
        "name": "Рюкзак mini №1",
        "oldprice": 2900,
        "newprice": 2100,
        "img": "../img/promo__item--01.png",
        "size": "24*12*29",
        "description": "Три наружных кармана один из них на молнии Одно основное большое отделение, три внутренних кармана, одно из них на молнии",
        "pictures": ["../img/photo.png","../img/avatar.png","../img/photo.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон"
    },
    {
        "id": "backpack5",
        "category": "backpack",
        "flag": "-20%",
        "sale": true,
        "name": "Рюкзак mini №2",
        "oldprice": 2900,
        "newprice": 2100,
        "img": "../img/promo__item--01.png",
        "size": "24*12*29",
        "description": "Три наружных кармана один из них на молнии Одно основное большое отделение, три внутренних кармана, одно из них на молнии",
        "pictures": ["../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон"
    },
    {
        "id": "backpack6",
        "category": "backpack",
        "flag": "Новинка",
        "sale": false,
        "name": "Рюкзак mini №3",
        "oldprice": 2900,
        "newprice": 2100,
        "img": "../img/promo__item--01.png",
        "size": "24*12*29",
        "description": "Три наружных кармана один из них на молнии Одно основное большое отделение, три внутренних кармана, одно из них на молнии",
        "pictures": ["../img/photo.png","../img/avatar.png","../img/photo.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон"
    },
    {
        "id": "backpack7",
        "category": "backpack",
        "flag": "Новинка",
        "sale": false,
        "name": "Рюкзак большой №1",
        "oldprice": 3500,
        "newprice": 2450,
        "img": "../img/promo__item--01.png",
        "size": "32*24*14",
        "description": "Ортопедическая спинка и лямки два основных больших отделения, два карман один из них на молнии",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон"
    },
    {
        "id": "backpack8",
        "category": "backpack",
        "flag": "Новинка",
        "sale": false,
        "name": "Рюкзак большой №2",
        "oldprice": 3500,
        "newprice": 2450,
        "img": "../img/promo__item--01.png",
        "size": "32*24*14",
        "description": "Ортопедическая спинка и лямки два основных больших отделения, два карман один из них на молнии",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон"
    },
    {
        "id": "backpack9",
        "category": "backpack",
        "flag": "Новинка",
        "sale": false,
        "name": "Рюкзак большой №3",
        "oldprice": 3500,
        "newprice": 2450,
        "img": "../img/promo__item--01.png",
        "size": "32*24*14",
        "description": "Ортопедическая спинка и лямки два основных больших отделения, два карман один из них на молнии",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон"
    },
    {
        "id": "bags1",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Сумка на одно плечо-рюкзак №1",
        "oldprice": 2450,
        "newprice": 1650,
        "img": "../img/promo__item--01.png",
        "size": "18x6x31",
        "description": "Четыре наружных кармана два из них на молнии Два основных больших отделения, карман на молнии",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags2",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Сумка на одно плечо-рюкзак №2",
        "oldprice": 2450,
        "newprice": 1650,
        "img": "../img/promo__item--01.png",
        "size": "18x6x31",
        "description": "Четыре наружных кармана два из них на молнии Два основных больших отделения, карман на молнии",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags3",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Сумка на одно плечо-рюкзак №3",
        "oldprice": 2450,
        "newprice": 1650,
        "img": "../img/promo__item--01.png",
        "size": "18x6x31",
        "description": "Четыре наружных кармана два из них на молнии Два основных больших отделения, карман на молнии",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags4",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Сумка на пояс-бананка №1",
        "oldprice": 2290,
        "newprice": 1490,
        "img": "../img/promo__item--01.png",
        "size": "39*11*15",
        "description": "Одно основное большое отделение, один внутренний карман на молнии Регулируемый ремень 80-110см",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags5",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Сумка на пояс-бананка №2",
        "oldprice": 2290,
        "newprice": 1490,
        "img": "../img/promo__item--01.png",
        "size": "39*11*15",
        "description": "Одно основное большое отделение, один внутренний карман на молнии Регулируемый ремень 80-110см",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags6",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Сумка small №1",
        "oldprice": 2500,
        "newprice": 1590,
        "img": "../img/promo__item--01.png",
        "size": "28*18*13",
        "description": "Одно основное большое отделение, три внутренних кармана, одно из них на молнии Лямка на плечо",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags7",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Сумка small №2",
        "oldprice": 2500,
        "newprice": 1590,
        "img": "../img/promo__item--01.png",
        "size": "28*18*13",
        "description": "Одно основное большое отделение, три внутренних кармана, одно из них на молнии Лямка на плечо",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags8",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Сумка small №3",
        "oldprice": 2500,
        "newprice": 1590,
        "img": "../img/promo__item--01.png",
        "size": "28*18*13",
        "description": "Одно основное большое отделение, три внутренних кармана, одно из них на молнии Лямка на плечо",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags9",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Сумка big №1",
        "oldprice": 2800,
        "newprice": 1890,
        "img": "../img/promo__item--01.png",
        "size": "38*26*13",
        "description": "Одно основное большое отделение, три внутренних кармана, одно из них на молнии Лямка на плечо",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags10",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Сумка big №2",
        "oldprice": 2800,
        "newprice": 1890,
        "img": "../img/promo__item--01.png",
        "size": "38*26*13",
        "description": "Одно основное большое отделение, три внутренних кармана, одно из них на молнии Лямка на плечо",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags11",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Сумка big №3",
        "oldprice": 2800,
        "newprice": 1890,
        "img": "../img/promo__item--01.png",
        "size": "38*26*13",
        "description": "Одно основное большое отделение, три внутренних кармана, одно из них на молнии Лямка на плечо",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags12",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Сумка клатч",
        "oldprice": 2290,
        "newprice": 1690,
        "img": "../img/promo__item--01.png",
        "size": "28*18*7",
        "description": "Одно основное отделение Цепочка на плечо (металл)",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags13",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Клатч №1",
        "oldprice": 2290,
        "newprice": 1690,
        "img": "../img/promo__item--01.png",
        "size": "25*17",
        "description": "Два основных большых отделения, три кармана, два их них на молнии Регулируемый ремень на плечо",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags14",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Клатч №2",
        "oldprice": 2290,
        "newprice": 1690,
        "img": "../img/promo__item--01.png",
        "size": "25*17",
        "description": "Два основных большых отделения, три кармана, два их них на молнии Регулируемый ремень на плечо",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags15",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Клатч №3",
        "oldprice": 2290,
        "newprice": 1690,
        "img": "../img/promo__item--01.png",
        "size": "25*17",
        "description": "Два основных большых отделения, три кармана, два их них на молнии Регулируемый ремень на плечо",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "bags16",
        "category": "bags",
        "flag": "Новинка",
        "sale": false,
        "name": "Радужный клатч-сумка",
        "oldprice": 2200,
        "newprice": 1390,
        "img": "../img/promo__item--01.png",
        "size": "28*18*7",
        "description": "Одно основное отделение, три кармана цепочка на плечо (металл)",
        "pictures": ["../img/photo.png","../img/photo.png","../img/photo.png","../img/avatar.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "purse1",
        "category": "purse",
        "flag": "Новинка",
        "sale": false,
        "name": "Портмоне №1",
        "oldprice": 1790,
        "newprice": 890,
        "img": "../img/avatar.png",
        "size": "20x10x3",
        "description": "Два основных отделения, множество кормашков под карточки-визитки, карман под молнией для мелочи.",
        "pictures": ["../img/avatar.png","../img/photo.png","../img/photo.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "purse2",
        "category": "purse",
        "flag": "Новинка",
        "sale": false,
        "name": "Портмоне №2",
        "oldprice": 1790,
        "newprice": 890,
        "img": "../img/avatar.png",
        "size": "20x10x3",
        "description": "Два основных отделения, множество кормашков под карточки-визитки, карман под молнией для мелочи.",
        "pictures": ["../img/avatar.png","../img/photo.png","../img/photo.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "purse3",
        "category": "purse",
        "flag": "Новинка",
        "sale": false,
        "name": "Кошлёк №1",
        "oldprice": 1590,
        "newprice": 690,
        "img": "../img/avatar.png",
        "size": "20x10x3",
        "description": "Три основных отделения, множество отделений под карточки-визитки, карман под молнией для мелочи.",
        "pictures": ["../img/avatar.png","../img/photo.png","../img/photo.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "purse4",
        "category": "purse",
        "flag": "Новинка",
        "sale": false,
        "name": "Кошлёк №2",
        "oldprice": 1590,
        "newprice": 690,
        "img": "../img/avatar.png",
        "size": "20x10x3",
        "description": "Три основных отделения, множество отделений под карточки-визитки, карман под молнией для мелочи.",
        "pictures": ["../img/avatar.png","../img/photo.png","../img/photo.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    },
    {
        "id": "purse5",
        "category": "purse",
        "flag": "Новинка",
        "sale": false,
        "name": "Кошлёк №3",
        "oldprice": 1590,
        "newprice": 690,
        "img": "../img/avatar.png",
        "size": "20x10x3",
        "description": "Три основных отделения, множество отделений под карточки-визитки, карман под молнией для мелочи.",
        "pictures": ["../img/avatar.png","../img/photo.png","../img/photo.png","../img/photo.png","../img/photo.png" ],
        "material": "Полиуретан/Нейлон",
    }
]

