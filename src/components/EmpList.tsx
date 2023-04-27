import { FC } from 'react'
import { IUser } from '../models/models'
import { useGetUsersQuery } from '../store/jsonplaceholder/json.api'
import EmpListItem from './EmpListItem'

const EmpList: FC = () => {
	const { data: users } = useGetUsersQuery(10)
	return (
		<div>
			{users && users.map(user => <EmpListItem key={user.id} user={user} />)}
		</div>
	)
}

export default EmpList
