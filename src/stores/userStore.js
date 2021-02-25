import { makeObservable, observable} from "mobx";

export default class userStore{
    constructor(){
        makeObservable(this);
    }

    @observable
    userName = "최인호";

    @observable
    userEmail = "dlsgh120@gmail.com";

}