import * as React from 'react';
// import {Link} from 'react-router-dom';

export interface IUserProps {
    name?: string;
}

class AddUser extends React.Component<IUserProps, any> {
    constructor(props: IUserProps) {
        super(props);
        this.state =
            { name: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(event: any) {
        this.setState({ name: event.target.value });
    }

    public handleSubmit(event: any) {
        // 传入接口的参数
        const params = { name: this.state.name };
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
                        name: ''
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
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <input type="submit" value="提交" />
            </form>
        );
    }
}
export default AddUser;
