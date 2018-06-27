import * as React from 'react';
// import {Link} from 'react-router-dom';

export interface IUserProps{
    name?: string;
    age?: string;
    gender?: string;
}

class AddUser extends React.Component<IUserProps,any> {
    constructor(props:IUserProps) {
        super(props);
        this.state = 
        {name: '',age:'',gender:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      public handleChange(event:any) {
          alert(event.target.value)
        this.setState({name: event.target.value});
      }
    
      public handleSubmit(event:any) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
      }
    
      public render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>姓名:</label>
            <input type="text" value={this.state.name} onChange={this.handleChange} />
            {/* <label>年龄:</label>
            <input type="text" value={this.state.age} onChange={this.handleChange} />
            <input type="submit" value="Submit" /> */}
          </form>
        );
      }
}
export default AddUser;
