module.exports.add = (a, b) => a + b;

module.exports.square = x => x * x;

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};

module.exports.syncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

module.exports.syncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
}