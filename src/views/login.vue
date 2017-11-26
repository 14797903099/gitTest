<template>
  <div>
      <div @longtap="handleTap">长按时间</div> 
      <div>
        <el-button @click="handToRouter">vue测试页</el-button>
        <el-button></el-button>
        <el-button></el-button>
        <el-button></el-button>
        <el-button></el-button>
      </div>
    <el-row>
      <el-col>
        <div>欢迎来到登录页</div>
         <el-button @click="handleRest">请求接口</el-button> 
         <div v-for="(x, i) in data" :key="i">
          <span v-if="x.show">
            {{x.name}}
          </span>
          <button @click="handleClick(i)">按钮</button>
     <div> <div @longtap="handleTap()" style="padding: 10px;"><div>长按时间</div></div> </div>
          
        </div>

      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>
          <el-input v-model="userName" placeholder="请输入账号"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>
          <el-input type="password" v-model="passWord" placeholder="请输入密码"></el-input>
        </div>
      </el-col>
    </el-row>
     <el-row>
      <el-col>
        <div>
         
          <el-button @click="login">登录</el-button>
          <el-button @click="handleCilck">测试</el-button>
          <el-button @click="handleBack">返回vue 历史上一页</el-button>
        </div>
        <el-tree
		  ref="tree"
		  :data="data3"
		  show-checkbox
		  node-key="id"
		  check-strictly
		  default-expand-all
		  @check-change="handleCheckChange"
		>
		</el-tree>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <home :testColor="{
        color: 'green',
        fontSize: '40px'
      }" color="yellow"></home>
      </el-col>
    </el-row>
    <vue-q-art ></vue-q-art>
    <div>测试store {{count}}</div>
    <el-button @click="handleStateChange">改变vue状态值</el-button>   
  </div>
</template>
<script>
import Home from './home.vue'
import Http from './../api/api.js'
import VueQArt from 'vue-qart'

export default {
  components: {
    Home,
    VueQArt
  },
  data () {
    return {
      config: {
          value: 'https://www.baidu.com',
          imagePath: '../assets/logo.png',
          filter: 'color',
          size: 500
        },
        downloadButton: true,
      data: [
        {id:1,name:'z',show: true},
        {id:2,name:'y',show: true}
      ],
      userName:'',
      passWord:'',
      project: 1,
      data3: [{
        id: 1,
        label: '一级 2',
        disabled: true,
        children: [{
          id: 3,
          label: '二级 2-1',
          children: [{
            id: 4,
            label: '三级 3-1-1'
          }, {
            id: 5,
            label: '三级 3-1-2',
            disabled: true
          }]
        }, {
          id: 2,
          label: '二级 2-2',
          disabled: true,
          children: [{
            id: 6,
            label: '三级 3-2-1'
          }, {
            id: 7,
            label: '三级 3-2-2',
            disabled: true
          }]
        }]
      }]
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    handleStateChange () {
      this.$store.commit('increment', 'Vuex状态值发生改变了！！！')
      console.log()
      // console.log('值变了')
    },
    handToRouter () {
      this.$router.push({name: 'SET'})
    },
    handleRest() {
      // Http.getData().then(data => {
      //   console.log(data.data.HeWeather5)
      // })
      // console.log(Http.getData())
      // console.log(this)
      // this.$http.jsonp('http://typhoon.zjwater.gov.cn/Api/TyphoonList/2017').then(data =>{}, res=>{
    
      // });
      let params = {city: '杭州',key:'5ed6fc16bc1f459ea11f9166daad17b4'}
      this.$http.get('v5/forecast', {params}).then(data =>{
        console.log(data)
      }, res=>{
    
      });
      // let params = {projectId : 42} 
      // this.$http.get("SupervisionMonthlyReport/GetNot?orderByList",{ params }).then( res => {
      //   console.log(res)
      // })
    },
    handleClick (index) {
      // this.data.forEach((x, i)=> {
      //   if(index === i) {
      //     x.show = !x.show
      //   }
      // })
      console.log(11)
      // this.$http.get("EngineeringAcceptance/EngineeringAcceptanceDetail").then(
      //       function (res) {
      //           // 处理成功的结果
      //           alert(res.body);
      //       },function (res) {
      //       // 处理失败的结果
      //       }
      //   );
      // for (var i = 0; i < this.data.length; i--) {
      //   0[i]
      // }
    },
    login () {
      if (this.userName === '123' && this.passWord === '123') {
        this.$router.push(`/home?project=${this.project}`)
      } else {
         this.$router.push({path: './',query: {name: '张三'}, params: {name: '李四'}, meta: {name: '测试'}}) 
         alert('登录失败！！！')
         console.log(this.$route.query.name)
         console.log()
      }
  
      let options = {
         phone:'14796903099'
      }
      // console.log(this)
      // this.$http.post('http://erp.test.modern.vip/api/user/staff/sms',options).then(res => {
      //   console.log(res)
      // })
    },
    handleCilck () {
      console.log(this.$route)
    },
    handleBack () {
      // this.$router.go(-1)
      window.history.go(-1)
    },
    handleCheckChange () {
      console.log(1)
    },
    handleTap () {
      console.log(111)
    }
  },
  mounted () {
    console.log(this.$store.state.count)
  }
}
</script>
<style>

</style>
