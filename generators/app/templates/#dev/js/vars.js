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
    is_rtl           = hashArray[hashArray.length - 1].split('.')[0] === 'rtl' || hash === 'rtl',
    direction       = false;

let is_opera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
    is_Edge = navigator.userAgent.indexOf("Edge") > -1,
    is_chrome = !!window.chrome && !is_opera && !is_Edge,
    is_explorer = typeof document !== "undefined" && !!document.documentMode && !is_Edge,
    is_firefox = typeof window.InstallTrigger !== "undefined",
    is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    is_mob = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
