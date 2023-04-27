import { FC } from 'react'
import EmpList from '../components/EmpList'
import ButtonBlack from '../components/UI/buttons/ButtonBlack'
import ButtonWhite from '../components/UI/buttons/ButtonWhite'

const Home: FC = () => {
	return (
		<div className='m-4 w-full'>
			<div className='w-full font-bold'>78 сотрудников</div>
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
							<path d='M12.925 13.7312L7.99375 8.79995C7.61875 9.12495 7.18151 9.37808 6.68202 9.55933C6.18253 9.74058 5.65103 9.8312 5.0875 9.8312C3.73548 9.8312 2.59122 9.36245 1.65473 8.42495C0.718244 7.48745 0.25 6.3562 0.25 5.0312C0.25 3.7062 0.71875 2.57495 1.65625 1.63745C2.59375 0.699951 3.72813 0.231201 5.05938 0.231201C6.39063 0.231201 7.52188 0.699951 8.45312 1.63745C9.38438 2.57495 9.85 3.70714 9.85 5.03401C9.85 5.56964 9.7625 6.08745 9.5875 6.58745C9.4125 7.08745 9.15 7.5562 8.8 7.9937L13.75 12.9062L12.925 13.7312ZM5.06875 8.7062C6.08438 8.7062 6.94766 8.34683 7.65859 7.62808C8.36953 6.90933 8.725 6.0437 8.725 5.0312C8.725 4.0187 8.36953 3.15308 7.65859 2.43433C6.94766 1.71558 6.08438 1.3562 5.06875 1.3562C4.04271 1.3562 3.17057 1.71558 2.45234 2.43433C1.73411 3.15308 1.375 4.0187 1.375 5.0312C1.375 6.0437 1.73411 6.90933 2.45234 7.62808C3.17057 8.34683 4.04271 8.7062 5.06875 8.7062Z' />
						</svg>
					</button>
					<input
						type='text'
						className='w-full h-full rounded-r focus:outline-none'
						placeholder='search..'
					/>
				</div>
				<div className='w-[280px] flex justify-between'>
					<ButtonWhite link='#!'>Экспорт</ButtonWhite>
					<ButtonBlack link='#!'>+ Добавить сотрудника</ButtonBlack>
				</div>
			</div>
			<div className='bg-white my-2 w-full'>
				<EmpList />
			</div>
		</div>
	)
}

export default Home
