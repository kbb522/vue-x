<template>
  <div>
    <overlay :show="isshow" :click="overlayClick"></overlay>
    <transition name="modal">
      <div :class="isshow ? 'dt-picker '+isclass : 'dt-picker'">
        <div class="dt-picker-content">
          <div class="dt-picker-t">请选择<span class="dt-picker-finish" @click="finish">完成</span></div>
          <div class="picker-inner">
            <div class="picker-items-col">
              <div class="picker-wrapper" id="year-box"
                   @touchstart="touchStart"
                   @touchmove="touchMove"
                   @touchend="touchEnd">
                <div v-for="item,index in years" class="picker-item">{{ item }}</div>
              </div>
            </div>
            <div class="picker-items-col divider">
              年
            </div>
            <div class="picker-items-col">
              <div class="picker-wrapper" id="month-box"
                   @touchstart="touchStart"
                   @touchmove="touchMove"
                   @touchend="touchEnd">
                <div v-for="item,index in months" class="picker-item">{{ item<10?('0'+item):item }}</div>
              </div>
            </div>
            <div class="picker-items-col divider">
              月
            </div>
            <div class="picker-items-col">
              <div class="picker-wrapper" id="day-box"
                   @touchstart="touchStart"
                   @touchmove="touchMove"
                   @touchend="touchEnd">
                <div v-for="item,index in days" class="picker-item">{{ item<10?('0'+item):item }}</div>
              </div>
            </div>
            <div class="picker-items-col divider">
              日
            </div>
            <div class="picker-items-col" v-if="time">
              <div class="picker-wrapper"
                   @touchstart="touchStart"
                   @touchmove="touchMove"
                   @touchend="touchEnd">
                <div v-for="item,index in hours" class="picker-item">{{ item<10?('0'+item):item }}</div>
              </div>
            </div>
            <div class="picker-items-col divider" v-if="time">
              时
            </div>
            <div class="picker-items-col" v-if="time">
              <div class="picker-wrapper"
                   @touchstart="touchStart"
                   @touchmove="touchMove"
                   @touchend="touchEnd">
                <div v-for="item,index in minutes" class="picker-item">{{ item<10?('0'+item):item }}</div>
              </div>
            </div>
            <div class="picker-items-col divider" v-if="time">
              分
            </div>
            <div class="picker-center-highlight"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { Overlay } from '@/components/overlay'
  export default {
    components: {
      Overlay
    },
    props: {
      iclass: {
        type: String,
        default: 'dt-picker-show-half'
      },
      show: {
        type: Boolean,
        default: false
      },
      time: {
        type: Boolean,
        default: false
      },
      dtime: {
        type: String,
        default: function () {
          let _d = new Date()
          let _year = _d.getFullYear(),
              _month = _d.getMonth()+ 1,
              _day = _d.getDay();
          return _year + '-' + _month + '-' + _day
        }
      }
    },
    data: function () {
      return {
        isshow: this.show,
        isclass: this.iclass,
        n: this.per,
        defaultTime: this.dtime,
        years: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        minutes: [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
      }
    },
    methods: {
      x: function (id) {
        return document.getElementById(id);
      },
      overlayClick: function () {
        this.isshow = false
      },
      open: function () {
        let _this = this;
        _this.isshow = true;
        let _date = _this.defaultTime.split('-');
        console.log(_date);
        let _yearIndex = _this.years.indexOf(parseInt(_date[0],10));
        let _monthIndex = _this.months.indexOf(parseInt(_date[1],10));
        let _dayIndex = _this.days.indexOf(parseInt(_date[2],10));
        console.log(_yearIndex, _monthIndex, _dayIndex);
        _this.x('year-box').style.transform = 'translate3d(0, ' + ((3-_yearIndex)*32) + 'px,0)';
        _this.x('year-box').setAttribute("diff",(3-_yearIndex)*32);
        _this.x('month-box').style.transform = 'translate3d(0, ' + ((3-_monthIndex)*32) + 'px,0)';
        _this.x('month-box').setAttribute("diff",(3-_monthIndex)*32);
        _this.x('day-box').style.transform = 'translate3d(0, ' + ((3-_dayIndex)*32) + 'px,0)';
        _this.x('day-box').setAttribute("diff",(3-_dayIndex)*32);

        _this.x('year-box').getElementsByClassName("picker-item")[_yearIndex].className = 'picker-item picker-selected';
        _this.x('month-box').getElementsByClassName("picker-item")[_monthIndex].className = 'picker-item picker-selected';
        _this.x('day-box').getElementsByClassName("picker-item")[_dayIndex].className = 'picker-item picker-selected';

      },
      close: function () {
        this.isshow = false
      },
      finish: function (e) {
        this.close();
        let _selected = e.currentTarget.parentNode.nextElementSibling.getElementsByClassName("picker-selected");
        let s = '',arr1=[],arr2=[];
        for (let i = 0; i < _selected.length; i++){
          if( i < 3 ) {
            arr1.push(_selected[i].innerHTML);
          }else{
            arr2.push(_selected[i].innerHTML);
          }
        }
        if(_selected.length == 3) {
          s = arr1.join('-');
        }else if(_selected.length == 5){
          s = arr1.join('-')+' '+arr2.join(":");
        }else{
          s = '请选择正确的时间';
        }
        console.log(s);
        this.$parent.$data.datetime = s;
      },
      touchStart: function (e) {
        let _y = e.targetTouches[0].pageY,
          _this = this,
          _target = e.currentTarget;
        _target.setAttribute("y",_y);
        let isDiff = _target.getAttribute("diff");
        if(!isDiff && isDiff != "0"){
          _target.setAttribute("diff",0);
          console.log("aa");
        }


        //_this.diff = _this.diff?_this.diff:0
      },
      touchMove: function (e) {
        let _y = e.targetTouches[0].pageY,
          _this = this,
          _target = e.currentTarget;
        let _dataY = parseInt(_target.getAttribute("y"),10);
        let _diff = parseInt(_target.getAttribute("diff"),10);
        let _per = _y - _dataY + _diff;
        //console.log('move:'+_per);
        //e.target.style.left = _per + '%';
        //e.target.parentElement.nextElementSibling.innerHTML = _per;
        //e.target.nextElementSibling.style.width = _per + '%';

        e.currentTarget.style.transform = 'translate3d(0, ' + (_per) + 'px,0)';
      },
      touchEnd: function (e) {
        let _this = this,
          _y = e.changedTouches[0].pageY,
          _h = e.target.offsetHeight,
          _target = e.currentTarget;
        let _dataY = parseInt(_target.getAttribute("y"),10);
        let _diff = parseInt(_target.getAttribute("diff"),10);
        //console.log(_diff);
        let n = Math.floor((_y - _dataY)/_h),
          enddiff = 0;
        let _list = e.currentTarget.getElementsByClassName("picker-item");
        enddiff = n * _h + _diff;

        if (enddiff > 96) {
          enddiff = 96 ;
        }
        if(enddiff < Math.abs(_list.length - 4)*-_h){
          enddiff = Math.abs(_list.length - 4)*-_h;
        }

        //console.log(enddiff);
        _target.setAttribute("diff",enddiff);
        _target.style.transform = 'translate3d(0, ' + (enddiff) + 'px,0)';


        for (let i = 0; i < _list.length ; i++){
          _list[i].className = 'picker-item';
        }
        _target.getElementsByClassName("picker-item")[3-(enddiff/32)].className = 'picker-item picker-selected';
      }

    }
  }
</script>


<style lang="less">
  @import './DatetimePicker.less';
</style>
