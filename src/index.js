/**
 * Created by mr470 on 10.03.2016.
 */
import * as styles from './styles.scss';

class Calc{
    register = 0;
    innerHistory = [];
    constructor(initValue = 0){
        this.register = initValue;
        return this;
    }
    add(value = 0){
        this.innerHistory.push(value);
        this.register = this.register + value;
        return this;
    }
    reset(value = 0){
        this.register = value || 0;
        return this;
    }
    memory(value){
        if (value) {
            this.reset(value);
            this.innerHistory = [];
            return this;
        } else {
            return this.register;
        }
    }
    history(value){
        if (value) {
            this.innerHistory = [];
            return this;
        } else {
            return this.innerHistory;
        }
    }
}

export default Calc;
