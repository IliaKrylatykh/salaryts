import { FC, useState } from 'react'
import { useGetUsersQuery } from '../store/jsonplaceholder/json.api'
import EmployeesListItem from './EmployeesListItem'
import SpinnerLoading from './UI/SpinnerLoading'

const EmployeesList: FC = props => {
	const [limit, setLimit] = useState(10)

	const { data: users, error, isLoading } = useGetUsersQuery(limit)
	return (
		<div>
			{isLoading && (
				<div className='flex justify-center items-center text-lg h-[200px]'>
					<SpinnerLoading />
				</div>
			)}
			{error && (
				<div className='flex justify-center items-center text-lg h-[200px]'>
					Произошла ошибка при загрузке :(
				</div>
			)}
			{users &&
				users.map(user => <EmployeesListItem key={user.id} user={user} />)}
		</div>
	)
}

export default EmployeesList
