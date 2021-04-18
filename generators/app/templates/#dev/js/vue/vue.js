// Vue


Vue.config.devtools = true;

let app = new Vue({
  el: `.${lotteryName}`,
  data: {
    mobile: is_mob,

    // for bonus modal
    points: [50, 100, 1000, 3000, 5000],
    chosenBet: 0,

    // logged state
    isLogged: false,
    btnText: 'принять участие',
  },
  mounted() {

    // states
    if (hash === "logged") {
      this.isLogged = true;
    }

    // modals
    if (hash !== '' && hash !== 'logged' && hash !== 'rtl') {
      this.$modal.show('modal-' + hash);
    }

  },
  methods: {

    // modal
    beforeOpen: function beforeOpen() {
      document.querySelector('body').style.overflowY = 'hidden';
    },
    opened: function opened(e) {

      if(e.name === 'modal-win') {
        let chosenNumber = this.getRandom(0, this.points.length - 1);
        this.chosenBet = this.points[chosenNumber];
      }

    },
    closed: function closed() {},
    beforeClose: function beforeClose() {
      document.querySelector('body').style.overflowY = 'auto';
    },

    // states
    mainBtn: function() {
      if(!this.isLogged) {
        this.$modal.show('modal-enter');
      } else {
        this.btnText = 'сделать ставку';
      }
    },

    // helpers
    getRandom: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

  }
});

const myApp = app.$el;

