import * as React from 'react';
// import {Link} from 'react-router-dom';

export interface IUserProps {
    name?: string;
    age?: string;
    gender?: string;
}

class AddUser extends React.Component<IUserProps, any> {
    constructor(props: IUserProps) {
        super(props);
        this.state =
            {
                name: '',
                age: 0,
                gender: ''
            };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    public handleSubmit(event: any) {
        // 传入接口的参数
        const params = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender
        };
        // 阻止表单submit事件自动跳转页面的动作
        event.preventDefault();
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
                        age: 　0,
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
                <label>姓名:</label>
                <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                <br />
                <label>年龄:</label>
                <input type="text" value={this.state.age} name="age" onChange={this.handleChange} />
                <br />
                <label>性别:</label>
                <select value={this.state.gender} name="gender" onChange={this.handleChange}>
                    <option value="">请选择</option>
                    <option value="male">男</option>
                    <option value="female">女</option>
                </select>
                <input type="submit" value="提交" />
            </form>
        );
    }
}
export default AddUser;
