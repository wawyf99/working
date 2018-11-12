<template>

  <div>
    <div id="header">iScroll</div>
    <div id="wrapper">
      <div id="scroller">
        <ul>
          <li><a href="javascript:myScroll.scrollToElement(document.querySelector('#scroller li:nth-child(10)'))">Scroll to element 10</a></li>
          <li>Pretty row 2</li>
          <li>Pretty row 3</li>
          <li>Pretty row 4</li>
          <li>Pretty row 5</li>
          <li>Pretty row 6</li>
          <li>Pretty row 7</li>
          <li>Pretty row 8</li>
          <li>Pretty row 9</li>
          <li><a href="javascript:myScroll.scrollToElement(document.querySelector('#scroller li:nth-child(25)'), null, null, true)">Center element 25 to screen</a></li>
          <li>Pretty row 11</li>
          <li>Pretty row 12</li>
          <li>Pretty row 13</li>
          <li>Pretty row 14</li>
          <li>Pretty row 15</li>
          <li>Pretty row 16</li>
          <li>Pretty row 17</li>
          <li>Pretty row 18</li>
          <li>Pretty row 19</li>
          <li>Pretty row 20</li>
          <li>Pretty row 21</li>
          <li>Pretty row 22</li>
          <li>Pretty row 23</li>
          <li>Pretty row 24</li>
          <li><a href="javascript:myScroll.scrollToElement(document.querySelector('#scroller li:nth-child(50)'), 1200, null, null, IScroll.utils.ease.elastic)">Scroll to the last element with elastic easing</a></li>
          <li>Pretty row 26</li>
          <li>Pretty row 27</li>
          <li>Pretty row 28</li>
          <li>Pretty row 29</li>
          <li>Pretty row 30</li>
          <li>Pretty row 31</li>
          <li>Pretty row 32</li>
          <li>Pretty row 33</li>
          <li>Pretty row 34</li>
          <li>Pretty row 35</li>
          <li>Pretty row 36</li>
          <li>Pretty row 37</li>
          <li>Pretty row 38</li>
          <li>Pretty row 39</li>
          <li>Pretty row 40</li>
          <li>Pretty row 41</li>
          <li>Pretty row 42</li>
          <li>Pretty row 43</li>
          <li>Pretty row 44</li>
          <li>Pretty row 45</li>
          <li>Pretty row 46</li>
          <li>Pretty row 47</li>
          <li>Pretty row 48</li>
          <li>Pretty row 49</li>
          <li>Pretty row 50</li>
        </ul>
      </div>
    </div>
  </div>

</template>
<style>
  @import '../assets/style/join.less';
</style>

<script>
  import { Alert, XDialog } from 'vux'
  import Global from "../utils/global";
  import ua from "../utils/userAgent";
  export default {
    name: 'Show',
    components: {
      Alert,
      XDialog
    },
    data () {
      return {
        uaSort: {
          webkitOverflowScrolling: '',
        },
        now: '',
        invitor: '',
        shareUrl: '',
        wxid : this.$route.query.wxid,
        city : '',
        background1:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        background2:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        background3:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        background4:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        name1 : '',
        name2 : '',
        name3 : '',
      }
    },
    created(){

      //document.getElementById('section').style.height = _h+"px";
    },
    methods:{

    },
    mounted(){

      let myScroll;

      loaded();

      function loaded () {
        myScroll = new IScroll('#wrapper', { mouseWheel: true, click: true });
        myScroll.scrollToElement(document.querySelector('#scroller li:nth-child(10)'));
      }

      document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
        capture: false,
        passive: false
      } : false);

    }
  }
</script>
