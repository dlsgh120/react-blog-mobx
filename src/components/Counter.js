import React from "react";
import { observer, inject } from "mobx-react";

@inject("counterStore", "userStore")
@observer
class Counter extends React.Component{
    render(){
        const {counterStore, userStore} = this.props;
        return(
            <div>
                <h1>유저 이름 : {userStore.userName}</h1>
                <h1>이메일 : {userStore.userEmail}</h1>

                <h1>{counterStore.counter}</h1>
                <h2> computed: {counterStore.double}</h2>
                <button onClick={counterStore.increase}>+</button>
                <button onClick={counterStore.decrease}>-</button>
            </div>
        );
    }
}

export default Counter; 