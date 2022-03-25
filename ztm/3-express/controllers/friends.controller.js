const friendsModel = require('../models/friends.model');

function getFriends(req, res) {
	res.status(200).json(friendsModel);
}

function getFriendById(req, res) {
	const { id } = req.params;
	const foundFriend = friendsModel.find((friend) => friend.id === +id);
	if (!foundFriend) res.status(404).json({ message: 'Not found' });
	res.send(foundFriend);
}

function createFriend(req, res) {
	if (!req.body.name)
		return res.status(400).json({ message: 'Please add name' });

	const newFriend = {
		name: req.body.name,
		id: friendsModel.length,
	};
	friendsModel.push(newFriend);

	res.json(newFriend);
}

module.exports = {
	getFriends,
	getFriendById,
	createFriend,
};
