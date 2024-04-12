const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../data/users.json');

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const usersData = JSON.parse(fs.readFileSync(dataPath, 'utf-8') || '[]');

    const newUser = {
      id: Date.now().toString(),
      name: name,
      email: email,
      password: password,
    };

    usersData.push(newUser);

    fs.writeFileSync(dataPath, JSON.stringify(usersData, null, 2));

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
