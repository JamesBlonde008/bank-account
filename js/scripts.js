//BackEnd
function BankAccount(name, balance) {
  this.name= name;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(deposit) {
  return this.balance + deposit;
}

BankAccount.prototype.withdrawal = function(withdrawal) {
  return this.balance - withdrawal;
}

//FrontEnd
$(document).ready(function () {
  $("form#register").submit(function(event) {
    event.preventDefault();
    var inputName = $('input#name').val();
    var initialDeposit = parseInt($('input#initialDeposit').val());
    var newAccount = new BankAccount(inputName, initialDeposit);
    $("#balance").text("$" + newAccount.balance);
    $("#depoOrWithdraw").click(function(event) {
      event.preventDefault();
      var deposit = parseInt($('input#deposit').val());
      var withdrawal = parseInt($('input#withdrawal').val());
      if(deposit) {
        newAccount.balance = newAccount.deposit(deposit);
      } else if (withdrawal) {
        newAccount.balance = newAccount.withdrawal(withdrawal);
      }
      $("#balance").text("$" + newAccount.balance);
      $('input#deposit').val("");
      $('input#withdrawal').val("");
    });
  });
});
