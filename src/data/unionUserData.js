import userList from './userList.json'
import userContactList from './userContactList.json'

const byUid = (x) => (y) => x === y.uid

const joindedList = userList.map(user => Object.assign(user, userContactList.find(byUid(user.uid))))

export default joindedList

export const findById = (id) => joindedList.find(byUid(id))
