<template>
  <div class="hello">
    <el-row class="title">
      <el-col :span="24">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="province" label="省份" width="220">
            </el-table-column>
            <el-table-column prop="city" label="市区" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300">
            </el-table-column>
            <el-table-column  prop="zip" label="邮编" width="220">
            </el-table-column>
            <el-table-column fixed="right" label="操作"  width="100">
              <template scope="scope">
                <el-button @click="handleView" type="text" size="small">查看</el-button>
                <el-button @click="handelEditor" type="text" size="small">编辑</el-button>
              </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-dialog title="请认真查看信息" :visible.sync="showView" size="tiny" @open="handleOpen">
      <el-form :label-position="labelPosition" label-width="85px" :model="form" ref="form">
        <el-form-item label="责任人名称">
          <el-input v-model="form.name" placeholder="请输入相应名称"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="form.tel" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="所在单位">
          <el-input v-model="form.company" placeholder="请输入所在单位"></el-input>
        </el-form-item>
        <el-form-item label="岗位职责">
          <el-input v-model="form.responsibility" placeholder="请输入岗位职责"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handelClose">取 消</el-button>
        <el-button v-show="isEditor" type="primary" @click="handelSave">保存</el-button>
      </span>
    </el-dialog>
    <ul>
      <li v-for="item in items" :key="item.name">{{item.name}}</li>
    </ul>
    <p>{{text}}</p>
    <button @click="reverseMessage">逆转消息</button>
    <div><input type="text" v-model="text"></div>
    <!-- <p v-once="msg" bind:disabled='isView'>哈哈</p> -->
    <input v-bind:disabled="someDynamicCondition"/>
     <p>{{tt}}</p>
  </div>
  

</template>

<script>
export default {
  data () {
    return {
      someDynamicCondition:true,
      text:true,
      isView: true,
      showView: false,
      isEditor: false,
      labelPosition: 'left',
      form: {
          name: '',
          tel: '',
          company: '',
          responsibility: ''
        },
      items:[
        {name:'张三'},
        {name:'李四'},
        {name:'王五'},
        {name:'码子'},
      ],
      tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
    }
  },
  computed: {
    tt(){
       return '我是Vue哈哈,哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或'    
    }
  },
  methods:{
    reverseMessage () {
      this.text = "哈哈！事假出发了"
      console.log(this)
    },
    handleView () {
      this.showView = true
      this.isEditor = false
    },
    handelClose () {
      this.showView = false
    },
    handelSave () {
      this.showView = false
    },
    handelEditor () {
      this.isEditor = true
      this.showView = true
    },
    handleOpen () {
      this.$nextTick(() => {
        var form = this.$refs.form.$el;
        var inputs = document.getElementsByTagName('input');
        for (let input of inputs) {
          if (!this.isEditor) {
            input.setAttribute('disabled','disabled');
          } else {
             input.removeAttribute('disabled');
          }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
html,body,.hello{
  width: 100%;
}
.title{
  width:85%;
  margin:0 auto;
  text-align:center;
}
</style>
