//Напишите класс Cat со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.), и по нажатию на кнопку "Ок" создайте экземпляр этого класса, заполнив его свойства ответами из опросника. В этом классе будут только свойства и конструктор, без методо
class Cat {
    constructor(ownerName, tel, catName, breed, food, sex) {
        this.ownerName = ownerName;
        this.tel = tel;
        this.catName = catName;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
    }
}

function newCat() {
    let ownerName1 = document.querySelector('#name1').value;
    let tel1 = document.querySelector('#phone').value;
    let catName1 = document.querySelector('#name2').value;
    let breed = document.querySelector('option[class="breed"]:checked').value;
    //let catFood = getCheckbox();
    let catFood = document.querySelectorAll('input[type="checkbox"]:checked');
    let checkedFood = '';
    for (let i = 0; i < catFood.length; i++) {
        checkedFood += catFood[i].value;
    }
    let sex = document.querySelectorAll('input[type="radio"]:checked').value;
    
    let cat1 = new Cat (ownerName1, tel1, catName1, breed, checkedFood, sex);
    console.log(cat1);
}
