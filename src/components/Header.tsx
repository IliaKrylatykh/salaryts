import { FC } from 'react'
import { Link } from 'react-router-dom'
import SvgPathSelector, { Path } from './UI/SvgPathSelector'

const Header: FC = () => {
	return (
		<nav className='flex justify-between items-center h-1/10-screen px-5 shadow-md bg-white text-gray-700'>
			<Link to='/' className='cursor-pointer'>
				<svg
					width='176'
					height='25'
					viewBox='0 0 176 25'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<SvgPathSelector id={Path.CompanyLogo} />
				</svg>
			</Link>
			<span>
				<Link to='/' className='mr-2'>
					List
				</Link>
				<Link to='/login' className='mr-2'>
					Login
				</Link>
				<Link to='/register'>Register</Link>
			</span>
		</nav>
	)
}

export default Header
