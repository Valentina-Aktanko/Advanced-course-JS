class Validate {
    constructor(currentElement) {
        this.el = currentElement;
        this.id = currentElement.id;
        this.name = currentElement.name;
        this.value = currentElement.value;
        this.toCheck();
    }

    toCheck(value) {
        this._init();
        this._isValid();

    }
    _init(){
        console.log(this.el);
        // thit.id = _getID();
    }

    _isValid(fieldType, value) {
        if (fieldType === "name") {

        }
    }
}