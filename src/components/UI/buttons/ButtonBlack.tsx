import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { ButtonProps } from './button.types'

const ButtonBlack: FC<PropsWithChildren<ButtonProps>> = ({
	link,
	children,
}) => {
	return (
		<Link
			to={link}
			className='bg-black hover:bg-gray-700 text-white font-medium text-sm py-1 px-2 rounded cursor-pointer whitespace-nowrap'
		>
			{children}
		</Link>
	)
}

export default ButtonBlack
