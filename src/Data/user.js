export default class User{
    constructor(){
        this.data = [];
    }

    updateData(name, new_value)
    {
        this.data[name] = new_value;
        return [...this.data];
    }

    resetData()
    {
        this.data = [];
        return [...this.data];
    }
}