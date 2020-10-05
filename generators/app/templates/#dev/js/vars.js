// Vars
// =====================================================================================================================


let lotteryName     = '<%= project %>',
    html            = document.querySelector('html'),
    body            = document.querySelector('body'),
    ltr             = document.getElementById('ltr'),
    rtl             = document.getElementById('rtl'),
    wrapper         = document.querySelector(`.${lotteryName}-wrapper`),
    hash            = location.search.replace(/\?/, ""),
    hashArray       = location.pathname.split('/'),
    pageType        = hashArray[hashArray.length - 1].split('.')[0],
    isRtl           = hashArray[hashArray.length - 1].split('.')[0] === "rtl",
    direction       = false;
