var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://muturi:muturi254@cluster0.rfjh5w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    development: 'mongodb+srv://muturi:muturi254@cluster0.rfjh5w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    test: 'mongodb+srv://muturi:muturi254@cluster0.rfjh5w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    // production: 'mongodb+srv://muturi:muturi254@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    // development: 'mongodb+srv://muturi254:muturi254@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    // test: 'mongodb+srv://muturi254:muturi254@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
