import React from "react";
import { makeObservable, observable, action} from "mobx"; 
import { observer } from "mobx-react";

@observer // Counter 클래스를 감싸는 observer이 데코레이터를 사용 함으로써 이쪽에 선언
class Counter extends React.Component{
    constructor(props) {
        super(props);
        makeObservable(this);
    }

    @observable //데코레이터 적용
    number = 0; // observable state

    @action //데코레이터 적용
    increase = () =>{
        this.number++;
    }

    @action //데코레이터 적용
    decrease = () =>{
        this.number--;
    }

    render(){
        return(
            <div>
                <h1>{this.number}</h1>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }
}

export default Counter; 