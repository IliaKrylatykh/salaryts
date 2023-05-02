import { FC, useEffect, useState } from 'react'
import EmployeesList from '../components/EmployeesList'
import SearchList from '../components/SearchList'
import SvgPathSelector, { Path } from '../components/UI/SvgPathSelector'
import ButtonBlack from '../components/UI/buttons/ButtonBlack'
import ButtonWhite from '../components/UI/buttons/ButtonWhite'
import { useDebounce } from '../components/hooks/debounce'
import {
	useGetUsersQuery,
	useSearchUsersQuery,
} from '../store/jsonplaceholder/json.api'

const Home: FC = () => {
	// const { data: usersTotal } = useGetUsersQuery(10000)

	const [search, setSearch] = useState('')
	const [isSearchActive, setSearchActive] = useState(false)
	const debounced = useDebounce(search)
	const {
		data: searchUsers,
		error: searchError,
		isLoading: searchLoading,
	} = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3,
	})

	useEffect(() => {
		setSearchActive(debounced.length > 3 && searchUsers?.length! > 0)
	}, [debounced])

	return (
		<div className='m-4 w-full'>
			{/* <div className='w-full font-bold'>{usersTotal?.length} сотрудников</div> */}
			<div className='flex justify-between'>
				<div className='w-2/5 flex'>
					<button className='h-full w-[40px] bg-white rounded-l flex justify-center items-center'>
						<svg
							className='fill-current text-gray-500'
							width='14'
							height='14'
							viewBox='0 0 14 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<SvgPathSelector id={Path.Search} />
						</svg>
					</button>
					<input
						type='text'
						className='w-full h-full rounded-r focus:outline-none'
						placeholder='search..'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
				</div>
				<div className='w-[280px] flex justify-between'>
					<ButtonWhite link='#!'>Экспорт</ButtonWhite>
					<ButtonBlack link='#!'>+ Добавить сотрудника</ButtonBlack>
				</div>
			</div>
			<div className='bg-white my-2 w-full rounded'>
				<div className='flex h-[35px] justify-between items-center border-gray-200 border-b-2 px-4'>
					<input type='checkbox' />
					<div className='h-5 w-5 flex justify-center'></div>
					<div className='w-1/5 flex justify-center'>Имя Фамилия</div>
					<div className='w-1/6 flex justify-center'>Должность</div>
					<div className='w-1/12 flex justify-center'>Дата</div>
					<div className='w-1/12 flex justify-center'>Зарплата</div>
					<div className='w-1/6 flex justify-center'>Реквизиты</div>
					<div>Выплата</div>
					<div className='w-[20px]'></div>
				</div>
				{isSearchActive ? (
					<SearchList
						searchUsers={searchUsers}
						searchError={searchError}
						searchLoading={searchLoading}
					/>
				) : (
					<EmployeesList />
				)}
			</div>
		</div>
	)
}

export default Home
