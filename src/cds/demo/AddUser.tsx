import * as React from 'react';
// import {Link} from 'react-router-dom';

export interface IUserProps{
    name?: string;
}

class AddUser extends React.Component<IUserProps,any> {
    constructor(props:IUserProps) {
        super(props);
        this.state = 
        {name: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      public handleChange(event:any) {
        this.setState({name: event.target.value});
      }
    
      public handleSubmit(event:any) {
        const params = {name:this.state.name};
        event.preventDefault();
        fetch('http://localhost:3000/user',{
            method: 'post',
            body: JSON.stringify(
               params
            ),
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.id){
                alert("添加用户成功");
                this.setState({
                    name: ''
                });
            }else{
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
