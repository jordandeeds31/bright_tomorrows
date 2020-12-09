<template>
  <form action="https://www.paypal.com/cgi-bin/webscr" method="POST" class="text-center mt-7 bg-gray p-3 md:p-7">
    <input type="hidden" name="cmd" value="_xclick-subscriptions">
    <input type="hidden" name="business" value="treside@brighttomorrows.org">
    <input type="hidden" name="currency_code" value="USD">
    <input type="hidden" name="no_shipping" value="1">
    <input type="hidden" name="a3" v-model="amount">
    <input type="hidden" name="p3" value="1">
    <input type="hidden" name="t3" v-model="frequency">
    <input type="hidden" name="src" v-model="recurring">
    <input type="hidden" name="sra" value="1">
    <div>
      <label @click="setAmount(25)" :class="{'donate-form__option': true, 'bg-blue': amount === 25 }"><span>$25</span></label>
      <label @click="setAmount(50)" class="donate-form__option"><span>$50</span></label>
      <label @click="setAmount(100)" class="donate-form__option"><span>$100</span></label>
      <label @click="setAmount(500)" class="donate-form__option"><span>$500</span></label>
      <label class="donate-form__option"><input @click="selectedAmount='other'" type="text" v-model="customAmount" placeholder="Other" class="donate-form__other"></label>
    </div>
    <div class="mt-2">
      <input type="checkbox" name="recurring" v-model="recurring">
      <label>Make this payment</label>
      <select name="frequency" v-model="frequency" class="field--transparent" style="border-bottom: 2px solid black">
        <option value="W">Weekly</option>
        <option value="M">Monthly</option>
        <option value="Y">Yearly</option>
      </select>
    </div>
    <button class="mt-3 uppercase bg-orange px-3 py-1 rounded-full text-white font-bold">Donate <span v-if="amount">${{amount}}</span></button>
    <img src="~/assets/images/paypall.svg" class="image text-center mt-3">
  </form>
</template>

<script>
  export default {
    data() {
      return {
        selectedAmount: "50",
        recurring: false,
        frequency: 'M',
        customAmount: ''
      }
    },
    computed: {
      amount() {
        if (this.selectedAmount === 'other') {
          return this.customAmount
        }
        return this.selectedAmount
      }
    },
    methods: {
      setAmount(amount) {
        this.selectedAmount = amount
        this.customAmount = ""
      }
    }
  }
</script>

<style scoped>
  .image {
    width: 75px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  main form select, input[type=text], input[type=password], input[type=email], input[type=tel], input[type=url], textarea {
    border-radius: 0px;
    border: none;
  }

  .donate-form__option {
    @apply mr-1 bg-white px-3 mb-2;
    height: 55px;
    display: inline-flex;
    align-items: center;
    @apply cursor-pointer;
  }

  .donate-form__other {
    width: 50px;
    @apply pl-1;
    @apply cursor-pointer;
  }

</style>
