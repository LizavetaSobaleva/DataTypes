let userName = "Mr. Steak";

function showMessage(){
    let text = "Hello";
    let userName = "Antonio";

    console.log(text + ", " + userName);
};

showMessage();

function showNewMessage(from, text = '-empty message-'){
    console.log(from + ": " + text);
};

showNewMessage('John', 'Hello!');
showNewMessage('Ann');
