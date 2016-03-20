/**
 * Created by mr470 on 10.03.2016.
 */
import * as styles from './styles.scss';

class Calc{
    register = 0;
    history = [];
    constructor(initValue = 0){
        this.register = initValue;
    }
    add(value = 0){
        this.history.push(value);
        return this.register + value;
    }
    reset(value = 0){
        this.register = value || 0;
    }
    memory(value){
        if (value) {
            this.reset();
            this.history = [];
        } else {
            return this.register;
        }
    }
}

export default Calc;
