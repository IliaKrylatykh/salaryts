import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

const ButtonWhite: FC<PropsWithChildren<any>> = ({ link, children }) => {
	return (
		<Link
			to={link}
			className='bg-white hover:bg-gray-200 text-gray-700 font-medium text-sm py-1 px-2 rounded cursor-pointer whitespace-nowrap'
		>
			{children}
		</Link>
	)
}

export default ButtonWhite
