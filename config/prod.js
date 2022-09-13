// module.exports = {
//     googleClientID: '78602033934-dm5l9qchs8nt8rv8nr64fbm5kjr1kfa7.apps.googleusercontent.com',
//     googleClientSecret: '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',
//     mongoURI: "mongodb+srv://hongweih:peacepongPong0507@cluster0.t3vrx9q.mongodb.net/?retryWrites=true&w=majority",
//     cookieKey: 'fjgewgliuhkjweougskjqggwlwifnpskrbhfjsmaslmkiitjghfjdkeoduxngsgyersfwdkhmhjnkpdmbsgxtgjhk'
// }

// commit this to heroku
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
}

