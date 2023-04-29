import { FC, PropsWithChildren, useState } from 'react'

interface TabProps {
	isActive: boolean
	onClick: () => void
}

const MenuTab: FC<PropsWithChildren<TabProps>> = ({
	children,
	isActive,
	onClick,
}) => {
	const activeClasses = isActive
		? 'bg-gray-200 text-gray-500 border-gray-400 border-b-2'
		: 'bg-white text-black'

	return (
		<button
			className={`px-3 py-1 ${activeClasses}  hover:text-black rounded-t `}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default MenuTab
