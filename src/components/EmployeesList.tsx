import { FC, useState } from 'react'
import { useGetUsersQuery } from '../store/jsonplaceholder/json.api'
import EmployeesListItem from './EmployeesListItem'
import SpinnerLoading from './UI/SpinnerLoading'

const EmployeesList: FC = () => {
	const [page, setPage] = useState(1)
	const [limit, setLimit] = useState(10)

	const {
		data: users = [],
		error,
		isLoading,
		isFetching,
	} = useGetUsersQuery({ page, limit })

	const handlePrevClick = () => {
		setPage(prevPage => prevPage - 1)
	}

	const handleNextClick = () => {
		setPage(prevPage => prevPage + 1)
	}

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
			<div className='flex h-[45px] items-center border-gray-200 border-t-2 px-4'>
				<button
					onClick={handlePrevClick}
					disabled={page === 1}
					className='mr-2 bg-slate-100 rounded px-2 py-1'
				>
					{'<'}
				</button>
				<button
					className='mr-2 bg-slate-100 rounded px-2 py-1'
					onClick={handleNextClick}
					disabled={isFetching || users.length < limit}
				>
					{'>'}
				</button>
			</div>
		</div>
	)
}

export default EmployeesList
