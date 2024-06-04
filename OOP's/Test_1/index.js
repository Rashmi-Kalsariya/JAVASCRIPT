class Bank {
    constructor() {
        this.accounts = [];
        this.currentAccount = null;
    }

    addAccount(account) {
        this.accounts.push(account);
        this.currentAccount = account;
    }

    getCurrentAccount() {
        return this.currentAccount;
    }
}

class User {
    constructor(name, number, address) {
        this.name = name;
        this.number = number;
        this.address = address;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    getBalance() {
        return this.balance;
    }
}

let bank = new Bank();

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('user').value;
    let number = document.getElementById('no').value;
    let address = document.getElementById('adr').value;


    let newUser = new User(name, number, address);
    bank.addAccount(newUser);

    document.getElementById('details').innerHTML = `
        <p>Name: ${newUser.name}</p>
        <p>Number: ${newUser.number}</p>
        <p>Address: ${newUser.address}</p>
        <div id="bal-${newUser.id}" style="display: none;">
            <p>Balance: ${newUser.getBalance()}₹</p>
        </div>
        <button onclick="showBalance('${newUser.id}')">Check Balance</button>
        <input type="number" id="dep-amt-${newUser.id}" placeholder="Enter amount to deposit...">
        <button onclick="depositAmount('${newUser.id}')">Deposit</button>`;
});

const showBalance = (accountId) => {
    let account = bank.getCurrentAccount();
    let balDiv = document.getElementById(`bal-${accountId}`);
    let Visible = balDiv.style.display !== 'none';

    if (Visible) {
        balDiv.style.display = 'none';
    } else {
        balDiv.style.display = 'block';
    }

    balDiv.innerHTML = `<p>Balance: ${account.getBalance()}₹</p>`;
}


const depositAmount = (accountId) => {
    let account = bank.getCurrentAccount();
    let depAmt = +document.getElementById(`dep-amt-${accountId}`).value;
    account.deposit(depAmt);
    showBalance(accountId);
}

const buyProduct = (price) => {
    let account = bank.getCurrentAccount();
    let productPrice = +price;

    if (account.withdraw(productPrice)) {
        alert('You purchased this product successfully');
        showBalance(account.id);
    } else {
        alert("You can't buy this product, insufficient balance");
    }
}

let orderBtn = document.querySelectorAll('.buybtn');

for (let i = 0; i < orderBtn.length; i++) {

    orderBtn[i].addEventListener('click', () => {
        let price = this.getAttribute('price');
        buyProduct(price);
    });
}
