class lol {
    constructor() {
        this.state = 1;
    }
    changeState(){
        this.state += 1;
        this.state = this.state % 3;
    }
}
