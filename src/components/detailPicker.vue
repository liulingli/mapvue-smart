<template>
  <picker mode="multiSelector" :value="dateTime" @change="changeDateTime" @columnchange="changeDateTimeColumn" :range="dateTimeArray">
     <view class="tui-picker-detail">{{dateTimeArray[0][dateTime[0]]}}-{{dateTimeArray[1][dateTime[1]]}}-{{dateTimeArray[2][dateTime[2]]}} {{dateTimeArray[3][dateTime[3]]}}:{{dateTimeArray[4][dateTime[4]]}}</view>
  </picker>
</template>

<script>
  import { dateTimePicker, getMonthDay } from '../utils/dateTimePicker.js'
  export default {
    data () {
      return {
        date: '2018-10-01',
        time: '12:00',
        dateTimeArray: null,
        dateTime: null,
        startYear: 2000,
        endYear: 2050
      }
    },
    created () {
      // 获取完整的年月日 时分秒，以及默认显示的数组
      let obj = dateTimePicker(this.startYear, this.endYear)
      // 精确到分的处理，将数组的秒去掉
      obj.dateTimeArray.pop()
      obj.dateTime.pop()

      this.dateTime = obj.dateTime
      this.dateTimeArray = obj.dateTimeArray
    },
    methods: {
      changeDateTime (event) {
        this.dateTime = event.mp.detail.value
      },
      changeDateTimeColumn (event) {
        let arr = this.dateTime
        let dateArr = this.dateTimeArray

        arr[event.mp.detail.column] = event.mp.detail.value
        dateArr[2] = getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]])
        this.dateTimeArray = dateArr
        this.dateTime = arr
      }
    }
  }
</script>

<style scoped>
 .tui-picker-detail{
   font-size:16px;
 }
</style>
