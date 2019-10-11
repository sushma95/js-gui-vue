
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
      const i = parseFloat(this.num1)
      const j = parseFloat(this.num2)
      const k = parseFloat(this.num3)
      return `The average is ${averagefunc(i, j, k)}.`
    }
  }
})