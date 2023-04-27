import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

const ButtonGray: FC<PropsWithChildren<any>> = ({ link, children }) => {
	return (
		<Link
			to={link}
			className='bg-gray-400 hover:bg-gray-600 text-white font-medium text-sm py-1 px-2 rounded cursor-pointer whitespace-nowrap'
		>
			{children}
		</Link>
	)
}

export default ButtonGray
