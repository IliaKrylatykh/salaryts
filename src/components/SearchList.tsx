import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { FC } from 'react'
import { IUser } from '../models/models'
import EmployeesListItem from './EmployeesListItem'
import SpinnerLoading from './UI/SpinnerLoading'

interface ISearchListProps {
	searchUsers: IUser[] | undefined
	searchError: FetchBaseQueryError | SerializedError | undefined
	searchLoading: boolean
}

const SearchList: FC<ISearchListProps> = ({
	searchUsers,
	searchError,
	searchLoading,
}) => {
	return (
		<div>
			{searchLoading && (
				<div className='flex justify-center items-center text-lg h-[200px]'>
					<SpinnerLoading />
				</div>
			)}
			{searchError && (
				<div className='flex justify-center items-center text-lg h-[200px]'>
					Произошла ошибка при загрузке :(
				</div>
			)}
			{searchUsers &&
				searchUsers.map(user => (
					<EmployeesListItem key={user.id} user={user} />
				))}
		</div>
	)
}

export default SearchList
