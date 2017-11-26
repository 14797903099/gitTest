<template>
  <div>
    <el-row>
        <el-col :span="6">
            <div>
               欢迎来到首页
            </div>
        </el-col>
        <el-col :span="6">
            <div>
              <router-link :to="{name: 'Login', params: {id: 5}, query: {id: 9}}">返回登录页</router-link>
            </div>
        </el-col>
        <el-col :span="6">
            <div></div>
        </el-col>
        <el-col :span="6">
            <div>
                <el-button ref="btn" @click="handleClick">测试</el-button>
                
            </div>
        </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div :style="testColor">动态绑定style</div>
        <div :class="{ 'class-a': isA, 'class-b': !isA}">动态绑定class</div>
        <div :style="{color:color}">仅仅颜色变化</div>
        <div></div>
      </el-col>
    </el-row>
    <div>
      <el-button @click="exportCsv">导出</el-button>
      <el-table
      ref="table"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        label="地址">
        <template scope="scope">
          <div>
           {{scope.row.name}} 
          </div>
          <div>
            {{scope.row.date}}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template scope="scope">
         <op-menu
           @close="handleView"
         >
         </op-menu>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <m-slot
     content="我是新内容"
    >
      <p slot="footer">我是底部!</p>
      <p slot="main">我是内容部分!</p>      
      <p slot="header">我是头部!</p>
    </m-slot>
    <div>
      <my-chart></my-chart>
    </div>
    <div>
      <my-qart></my-qart>
    </div>
    <button @longTap="longtap">长按事件</button>
    <div>
      <el-checkbox-group v-model="checkList" @change="change" >
        <el-checkbox v-for="(item,index) in city" :label="item.id" :key="index" >
          {{item.label}}
        </el-checkbox>
      </el-checkbox-group>
      <el-checkbox v-model="tt.id" :label="tt.a">
          {{tt.b}}
        </el-checkbox>
      <button @click="handleT"></button>
    </div>
  </div>
</template>

<script>
import OpMenu from '../../src/components/flow/open-menu.js'
import CsvExport from '../../src/utils/CsvExport.js'
import util from '../../src/utils/util.js'
import MSlot from './slot'
import MyChart from './myzu.vue'
import MyQart from './qart.vue'

export default {
  name: 'Home',
  components: {
    OpMenu,
    MSlot,
    MyChart,
    MyQart
  },
  props: {
    testColor: {
      type: Object,
      default: function () {
        return { 'color': 'red' }
      }
    },
    isA:{
      type:Boolean,
      default:false
    },
    color:{
      type:String,
      default:'green'
    }
  },
  data () {
      return {
        tt: {
          id: 'id',
          a: '哈哈',
          b: 'eeee'
        },
        checkList:[],
        city: [
          {label: "复选框1",id: '1'},
          {label: "复选框2",id: '2'},
          {label: "复选框3",id: '3'},
          {label: "复选框4",id: '4'}
        ],
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
        project: this.$route.query.project
      }
  },
  methods: {
    change(e) {
      console.log(e)
    },
    handleT () {
      console.log(this.tt);
    },
    longtap () {
      console.log(1111)
    },
    handleView (c) {
      // console.log(c)
      console.log('jsx')
    },
    handleClick () {
      // console.log(this.$route)
      console.log(util.sum(1, 3))
    },
    handleEdit () {

    },
    exportCsv() {
      let columns = this.$refs.table.$children.filter(t => t.prop != null)
      const fields = columns.map(t => t.prop)
      const fieldNames =  columns.map(t => t.label)
      CsvExport(this.tableData, fields, fieldNames, '列表')
    }
  },
  mounted () {
    // let btn = this.$refs.btn.$el
    // btn.onclick = function () {
    //   console.log("点击事件")
    //   console.log(CsvExport)
    // }
  }
}
</script>
<style>
.class-a{
  color:green;
  font-size: 40px;
}
.class-b{
  color:#f99;
  font-size: 12px;
}
</style>
