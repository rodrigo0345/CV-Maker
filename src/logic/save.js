
export default class Save{
    constructor(){
        this.saveStates = this.saveStates.bind(this);
        this.getStates = this.getStates.bind(this);
    }

    saveStates(states = []){
        states.map(state => {
            const key = Object.keys(state)[0];
            const value = Object.values(state);
            localStorage.setItem(key, JSON.stringify(value));
        })  
    }  

    getStates(stateNames = []){
        return stateNames.map(stateName => {
            const state = JSON.parse(localStorage.getItem(stateName));
            if(state === undefined || state === null) return;
            const key = {};
            key[stateName] = state[0];
            return key;
        })
    }

    reset(){
        localStorage.clear();
    }
}