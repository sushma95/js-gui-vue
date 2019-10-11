
const averagefunc = (x, y, z) => { return (x+y+z)/3 }

const average = new Vue({
  el: '#average',
  data: {
    num1: 6,
    num2: 2,
    num3: 2
  },
  computed: {
    average1: function () {
      const i = parseInt(this.num1)
      const j = parseInt(this.num2)
      const k = parseInt(this.num3)
      return `The average is ${averagefunc(i, j, k)}.`
    }
  }
})