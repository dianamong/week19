class Validator {
    isEmail(str) {
        let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (str.match(mailFormat)) {
            return true;
        } else {
            return false;
        }
    }

    isDomain(str) {
        let domainFormat = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
        if (str.match(domainFormat)) {
            return true;
        } else {
            return false;
        }
    }

    isDate(str) {
        let dateFormat = /^([\d{1,2}]+)[\.|\/]([\d{1,2}]+)[\.|\/]([\d{2,4}]+)$/;
        if (str.match(dateFormat)) {
            return true;
        } else {
            return false;
        }
    }

    isPhone(str) {
        let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (str.match(phoneFormat)) {
            return true;
        } else {
            return false;
        }
    }
}

class ValidatorStatic {
    static isEmail(str) {
        let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (str.match(mailFormat)) {
            return true;
        } else {
            return false;
        }
    }

    static isDomain(str) {
        let domainFormat = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
        if (str.match(domainFormat)) {
            return true;
        } else {
            return false;
        }
    }

    static isDate(str) {
        let dateFormat = /^([\d{1,2}]+)[\.|\/]([\d{1,2}]+)[\.|\/]([\d{2,4}]+)$/;
        if (str.match(dateFormat)) {
            return true;
        } else {
            return false;
        }
    }

    static isPhone(str) {
        let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (str.match(phoneFormat)) {
            return true;
        } else {
            return false;
        }
    }
}

var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));

console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));