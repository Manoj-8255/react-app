import React from 'react';
class UserClass extends React.Component {
    constructor(props) {
        console.log("constructor UserClass");
        super(props);
    }
    componentDidMount() {
        console.log("componentDidMount UserClass");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate UserClass");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount UserClass");
    }
    render() {
        console.log("rendering UserClass");
        const {name, email, phone} = this.props;
        return(
            <div className="user-card">
                <h2>{name}</h2>
                <p>{email}</p> 
                <p>{phone}</p> 
            </div>
        )
    }
}

export default UserClass;