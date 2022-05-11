
const register = async (req, res) => {
    res.send('register user')
}

const login = async (req, res) => {
    res.send('logging user')
}

modele.exports = {
    register,
    login
} 