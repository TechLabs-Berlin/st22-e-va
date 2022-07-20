const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    const str = [
        {
            "username": "JaneDoe",
            "fullname": "Jane Doe",
            "cycleLenght": "28"
        },
        {
            "username": "PatriziaBenneton",
            "fullname": "Patrizia Benneton",
            "cycleLenght": "27"
        },
        {
            "username": "CamilaCabello",
            "fullname": "Camilla Cabello",
            "cycleLenght": "25"
        }
    ];
    res.end(JSON.stringify(str));
});

router.post('/addUser', (req, res) => {
    res.end('NA');
});

/*/

To keep adding more users to the nice platform of E-VA!

router.get('/addUser', async (req, res) => {
    const user = {username: 'XXXXX', fullname: 'XXXX', cycleLenght: XX};
    const newUser = new Schemas.Users(user);
    try {
        await newUser.save( async(err, newUserResult) => {
            console.log('New user created!');
            res.end('New user created!');
        });
    } catch(err) {
        console.log(err);
        res.end('User not added!');
    }
}); /*/

module.exports = router;
