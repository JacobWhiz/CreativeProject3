new Vue({
  el: '#app',
  data() {
    return {
      info: null
    }
  },
  methods: {
    d100() {
      axios
        .get('http://roll.diceapi.com/json/d100')
        .then(response => (this.info = response.data.dice))
    },
    d20() {
      axios
        .get('http://roll.diceapi.com/json/d20')
        .then(response => (this.info = response.data.dice))
    },
    d12() {
      axios
        .get('http://roll.diceapi.com/json/d12')
        .then(response => (this.info = response.data.dice))
    },
    d10() {
      axios
        .get('http://roll.diceapi.com/json/d10')
        .then(response => (this.info = response.data.dice))
    },
    d8() {
      axios
        .get('http://roll.diceapi.com/json/d8')
        .then(response => (this.info = response.data.dice))
    },
    d6() {
      axios
        .get('http://roll.diceapi.com/json/d6')
        .then(response => (this.info = response.data.dice))
    },
    d4() {
      axios
        .get('http://roll.diceapi.com/json/d4')
        .then(response => (this.info = response.data.dice))
    },
    d2() {
      axios
        .get('http://roll.diceapi.com/json/d2')
        .then(response => (this.info = response.data.dice))
    },
  }
})
