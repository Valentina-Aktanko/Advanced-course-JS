class Validate {
    constructor(currentElement, errorClass = "error") {
        this.el = null;
        this.id = currentElement.id;
        this.name = currentElement.name;
        this.value = currentElement.value;
        this.errorId = currentElement.dataset.errorid;
        this.regExp = '';
        this.errorClass = errorClass;
        this._init();
        this.toCheck();
    }

    _init() {
        this.el = document.getElementById(this.id);
        this.regExp = this._getRegExp(this.name);
        document.getElementById(this.errorId).classList.add('hide');
    }

    toCheck() {
        if (!this._isValid(this.regExp, this.value)) {
            this.el.classList.add(this.errorClass);
            let errorEl = document.getElementById(this.errorId)
            errorEl.classList.remove('hide');
        } else {
            this.el.classList.remove(this.errorClass);
        }
    }

    _getRegExp(name) {
        if (name === 'name') {
            return /^[A-zА-яЁё]+$/
        } else if (name === 'phone') {
            return /^\+(7)\([\d]{3}\)[\d]{3}\-[\d]{4}$/;
        } else if (name === 'email') {
            return /^[a-zA-Z\.\-]+\@[a-zA-Z]+\.(ru|com)$/;
        }
    }

    _isValid(regExp, value) {
        return regExp.exec(value);
    }
}