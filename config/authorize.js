const jwt = require('jsonwebtoken')

const key = 'MY_KEY';

const Authorization = ((req, res, next) => {
    const token = req.headers['Authorization'];

    if (token === undefined) {
        return res.status(401).json({ "status": 401, "message": 'Unauthorized' })
    } else {
        jwt.verify(token, key, (err, decode) => {
            if (err) {
                return res.status(401).json({ "status": 401, "message": 'Unauthorized' })
            } else {
                console.log(decode);
                next()
            }
        })
    }
})

module.exports = Authorization