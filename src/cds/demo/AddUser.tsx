import * as React from 'react';
// import {Link} from 'react-router-dom';

export interface IUserProps {
    name?: string[];
    age?: string[];
    gender?: string[];
}

class AddUser extends React.Component<IUserProps, any> {
    constructor(props: IUserProps) {
        // 其中的valid和error是表单验证的sign
        super(props);
        this.state = {
                name: {
                    valid: false,
                    value: '',
                    error: ''
                },
                age: {
                    valid: false,
                    value: '',
                    error: ''
                },
                gender: {
                    valid: false,
                    value: '',
                    error: ''
                }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(event: any) {
        const target = event.target;
        const valueVal = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        const newValueObj = {value: valueVal, valid: true, error: ''};

        switch(name){
            case 'name': {
                if(valueVal.length >= 5){
                    newValueObj.error = "用户名最多输入4个字符";
                    newValueObj.valid = false;
                }else if(valueVal.length === 0){
                    newValueObj.error = "请输入用户名";
                    newValueObj.valid = false;
                }
                break;
            }
            case 'age': {
                if (valueVal > 100 || valueVal <= 0) {
                    newValueObj.error = "请输入1~100之间的数字";
                    newValueObj.valid = false;
                  }
                break;
            }
            case 'gender': {
                if (!valueVal) {
                    newValueObj.error = "请选择性别";
                    newValueObj.valid = false;
                  }
                break;
            }
        }

        this.setState({ [name]: newValueObj });
    }

    public handleSubmit(event: any) {
        // 阻止表单submit事件自动跳转页面的动作
        event.preventDefault();
        
        const {name, age, gender} = this.state;
        if(!name.valid || !age.valid || !gender.valid){
            alert("请填写正确的信息");
            return;
        }        
        
        // 传入接口的参数
        const params = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender
        };

        fetch('http://localhost:3000/user', {
            method: 'post',
            // 使用fetch提交的json数据需要使用JSON.stringify转换为字符串
            body: JSON.stringify(
                params
            ),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                // 添加成功之后，返回的json对象中应包含一个有效的id字段
                // 所以使用res.id来判断添加是否成功
                if (res.id) {
                    alert("添加用户成功");
                    this.setState({
                        name: '',
                        age: 0,
                        gender: ''
                    });
                } else {
                    alert("添加失败")
                }
            })
            .catch((err) => console.log(err));
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>表单的验证以及提交</h3>     
                <label>姓名:</label>
                <input type="text" value={this.state.name.value} name="name" onChange={this.handleChange} />                                
                 <span>{this.state.name.error}</span>            
                <br />
                <label>年龄:</label>
                <input type="text" value={this.state.age.value} name="age" onChange={this.handleChange} />
                <span>{this.state.age.error}</span>
                <br />
                <label>性别:</label>
                <select value={this.state.gender.value} name="gender" onChange={this.handleChange}>
                    <option value="">请选择</option>
                    <option value="male">男</option>
                    <option value="female">女</option>
                </select>
                <br/>
                <input type="submit" value="提交" />
            </form>
        );
    }
}
export default AddUser;
