import React, {Component} from 'react';
import './FormSubmit.css';

class FormSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'admin',
      password: '123456',
      age: 12,
      sex: '1',
      love: [],
      suggest: '',

      sexOptions: [
        { 
          id: 1,
          label: '男',
          value: '1'
        },
        {
          id: 2,
          label: '女',
          value: '2'
        }
      ],
      loveOptions: [
        { 
          id: 1,
          label: '读书',
          value: '1'
        },
        {
          id: 2,
          label: '看报',
          value: '2'
        },
        { 
          id: 3,
          label: '运动',
          value: '3'
        },
        {
          id: 4,
          label: '玩游戏',
          value: '4'
        },
        { 
          id: 5,
          label: '看电视剧',
          value: '5'
        },
        {
          id: 6,
          label: '打羽毛球',
          value: '6'
        }
      ]
    }
  }

  render() {
    let sexDom = this.state.sexOptions.map((item, index, arr) => {
      return <div key={item.id}><input type="radio" name="sex" checked={this.state.sex === item.value} value={item.value} onChange={this.inputChange.bind(this)}/><label htmlFor="sex">{item.label}</label></div> 
    })

    let loveDom = this.state.loveOptions.map((item, index, arr) => {
      return <div key={item.id}>
                <input type="checkbox" name="love" checked={this.state.love.includes(item.value)} value={item.value} onChange={this.inputChange.bind(this)}/><label htmlFor="love">{item.label}</label>
             </div>
    })
    return (
      <div>
        {/* 输入框 */}
        <div className="form-item">
          <label htmlFor="userName" className="form-item-label">用户名：</label>
          <input type="text" name="userName" placeholder='请输入用户名' value={this.state.userName} onChange={this.inputChange.bind(this)}/>
        </div>
        <div className="form-item">
          <label htmlFor="password" className="form-item-label">初始密码：</label>
          <input type="text" name="password" placeholder='请输入初始密码' value={this.state.password} onChange={this.inputChange.bind(this)}/>
        </div>
        <div className="form-item">
          <label htmlFor="age" className="form-item-label">年龄：</label>
          <input type="text" name="age" placeholder='请输入年龄' value={this.state.age} onChange={this.inputChange.bind(this)}/>
        </div>

        {/* 单选框 */}
        <div className="form-item">
          <label htmlFor="age" className="form-item-label">选择性别：</label>
          {sexDom}
        </div>

        {/* 多选框 */}
        <div className="form-item wrap">
          <label htmlFor="love" className="form-item-label">选择爱好：</label>
          {loveDom}
        </div>

        {/* 多行输入框 */}
        <div className="form-item">
          <label htmlFor="suggest" className="form-item-label">建议：</label>
          <textarea rows="3" name="suggest" placeholder='请输入建议' value={this.state.suggest} onChange={this.inputChange.bind(this)}></textarea>
        </div>

        <button onClick={this.submitHandel.bind(this)}>提交</button>
      </div>
    )
  }

  componentDidMount() {

  }

  /**
   * @description: 输入框数据发生变化
   * @param {type} 
   * @return: 
   */
  inputChange(e) {
    // 处理checkbox的数据时使用
    let ckeckedVal = this.state.love;
    if(e.target.type === 'checkbox') {
      if(ckeckedVal.includes(e.target.value)) {
        let ckeckedValTemp = [...ckeckedVal]
        ckeckedVal = ckeckedValTemp.filter((item) => {
          return item !== e.target.value
        })
      }else {
        ckeckedVal.push(e.target.value)
      } 
    }
    
    this.setState({
      [e.target.name]: e.target.type === 'checkbox' ? ckeckedVal : e.target.value
    })
  }

  /**
   * @description: 提交数据
   * @param {type} 
   * @return: 
   */
  submitHandel() {
    let _params = {
      userName: this.state.userName,
      password: this.state.password,
      age: this.state.age,
      sex: this.state.sex,
      love: this.state.love,
      suggest: this.state.suggest
    }
    console.log("_params:", _params)
  }
}

export default FormSubmit;