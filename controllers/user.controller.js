let users = [
    {
        id: 1,
        gender: 'male',
        name: 'Moshiur Rahman',
        contact: '01854193483',
        address: 'Savar, Dhaka',
        photoURL: 'https://ibb.co/rMGC6Cg'
    },
    {
        id: 2,
        gender: 'female',
        name: 'Sayma Rahman',
        contact: '01847646987',
        address: 'Barishal',
        photoURL: 'https://ibb.co/3BrmXLp'
    },
    {
        id: 3,
        gender: 'male',
        name: 'Hafizur Rahman',
        contact: '01446745666',
        address: 'Sylet,Moulubibazar',
        photoURL: 'https://ibb.co/XZQ22ss'
    },
    {
        id: 4,
        gender: 'male',
        name: 'Nahid Shikder',
        contact: '01387647972',
        address: 'Savar, Dhaka',
        photoURL: 'https://ibb.co/H2rqrrN'
    },
]

module.exports.getAllUsers = (req, res) => {
    const { limit } = req.query;
    res.send(users.slice(0, limit))
}

module.exports.saveAUser = (req, res) => {
    users.push(req.body)
    res.send(users)
}

module.exports.getUserDetails = (req, res) => {
    const { id } = req.params;
    const UserDetail = users.find(user => user.id === Number(id))
    res.send(UserDetail)
}

module.exports.updateUser = (req, res) => {
    const { id } = req.params
    const newData = users.find(user => user.id === Number(id))

    newData.id = id
    newData.gender = req.body.gender
    newData.name = req.body.name
    newData.contact = req.body.contact
    newData.address = req.body.address
    newData.photoURL = req.body.photoURL

    res.send(newData)
}

module.exports.deleteUser = (req, res) =>{
    const {id} = req.params;
    users = users.filter(user => user.id !== Number(id))
    res.send(users)
}