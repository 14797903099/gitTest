// import * as flowTypes from '../../store/flow/flowTypes'

export default {
  props: {
    name: {
      type: String,
      default: '操作'
    }
  },
  methods: {
    handleView () {
      // this.$emit('onView', '测试')
      this.$emit('close', true)
      console.log(1111)
    },
    createSubmitMenus(h){
      let items = []
      items.push(
        h('el-button', {
          props: { type: 'text', size: 'small' },
          'class': {'type-green': this.isChangeColor},
          on: { click: this.handleView }
        }, '查 看')
      )
      return items
    }
  },
  render (h) {
    let items = [].concat(this.createSubmitMenus(h))
    let menus = items.map(item => {
      return h('el-dropdown-item', {style: {color: '#13ce66'}}, [item])
    })
    return (
      <el-dropdown trigger="hover">
        <span class="el-dropdown-link" style="color: #20a0ff; cursor: pointer;">
          { this.name }
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" style="text-align: center;">
          { menus }
        </el-dropdown-menu>
      </el-dropdown>
    )
  }
}
