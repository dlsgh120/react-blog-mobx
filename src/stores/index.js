import CounterStore from "./counterStore";
import UserStore from "./userStore";

class RootStore {
    constructor(){
        this.counterStore = new CounterStore(this);
        this.userStore = new UserStore(this);
    }
}

export default RootStore;