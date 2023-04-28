import { FC } from 'react'
import SvgPathSelector, { Path } from './UI/SvgPathSelector'

const Sidebar: FC = () => {
	return (
		<nav className='flex justify-between p-10 w-2.5/10-screen/10-screen px-5 shadow-md bg-white text-gray-700'>
			<ul>
				<li className='group flex items-center h-10 cursor-pointer'>
					<svg
						className='fill-current group-hover:text-gray-400'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<SvgPathSelector id={Path.Payments} />
					</svg>
					<span className='group-hover:text-gray-400 ml-2'>Платежи</span>
				</li>
				<li className='group flex items-center h-10 cursor-pointer'>
					<svg
						className='fill-current group-hover:text-gray-400'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<SvgPathSelector id={Path.Statistics} />
					</svg>
					<span className='group-hover:text-gray-400 ml-2'>Статистика</span>
				</li>
				<li className='group flex items-center h-10 cursor-pointer'>
					<svg
						className='fill-current group-hover:text-gray-400'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<SvgPathSelector id={Path.Documents} />
					</svg>
					<span className='group-hover:text-gray-400 ml-2'>Документы</span>
				</li>
				<li className='group flex items-center h-10 cursor-pointer'>
					<svg
						className='stroke-current group-hover:text-gray-400'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<SvgPathSelector id={Path.Calendar} />
					</svg>
					<span className='group-hover:text-gray-400 ml-2'>Календарь</span>
				</li>
				<li className='group flex items-center h-10 cursor-pointer'>
					<svg
						className='stroke-current group-hover:text-gray-400'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<SvgPathSelector id={Path.Settings} />
					</svg>
					<span className='group-hover:text-gray-400 ml-2'>Настройки</span>
				</li>
			</ul>
		</nav>
	)
}

export default Sidebar
