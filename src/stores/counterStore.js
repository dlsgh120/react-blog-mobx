import { makeObservable, observable, action, computed} from "mobx";

export default class countStore{
    constructor(){
        makeObservable(this);
    }

    @observable
    counter = 0;

    @computed
    get double(){
        return this.counter * 2;
    }

    @action
    increase = () =>{
        this.counter++;
    }

    @action
    decrease = () =>{
        this.counter--;
    }
}