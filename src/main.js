// First task
function safeCall(func) {
    try {
        func();
        console.log(true);
        return true;
    } catch(e) {
        console.log(false);
        return false;
    }
}

safeCall(() => console.log('Hello!'));
safeCall(() => JSON.parse('abc'));
safeCall(() => false);
safeCall(() => abc);

// Second task
Function.prototype.safeCall = function(func) {
    try {
        return func();
    } catch(e) {
        return null;
    }
}

const a = new Function();

a.safeCall(() => console.log('Hello!'));
a.safeCall(() => JSON.parse('abc'));
a.safeCall(() => false);
a.safeCall(() => abc);
