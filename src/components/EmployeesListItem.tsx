import { FC, useState } from 'react'
import Popup from 'reactjs-popup'
import { IUser } from '../models/models'
import EmployeeInfo from './EmployeeInfo'
import SvgPathSelector, { Path } from './UI/SvgPathSelector'
import ButtonGray from './UI/buttons/ButtonGray'

interface EmployeesListItemProps {
	user: IUser
}

const EmployeesListItem: FC<EmployeesListItemProps> = ({ user }) => {
	const [open, setOpen] = useState(false)
	const closeModal = () => setOpen(false)
	return (
		<div
			className='px-4 flex justify-between items-center h-[35px] hover:bg-slate-100 cursor-pointer'
			onClick={() => setOpen(o => !o)}
		>
			<input type='checkbox' />
			<div className='h-5 w-5 bg-blue-500 rounded-full'></div>
			<div className='w-1/5 flex justify-center tracking-tighter text-sm '>
				{user.name}
			</div>
			<Popup open={open} closeOnDocumentClick onClose={closeModal} modal nested>
				<div className='modal relative'>
					<a
						className='close cursor-pointer absolute right-2 text-3xl text-gray-700'
						onClick={closeModal}
					>
						&times;
					</a>
					<EmployeeInfo id={user.id} />
				</div>
			</Popup>
			<div className='w-1/6 flex justify-center tracking-tighter text-sm'>
				{user.website}
			</div>
			<div className='w-1/12 flex justify-center'>
				0{user.id}.0{user.id}.22
			</div>
			<div className='w-1/12 flex justify-center tracking-tighter text-sm'>
				{user.id}0 000
			</div>
			<div className='w-1/6 flex justify-center tracking-tighter text-sm'>
				3333 2222 4411 2222
			</div>
			<ButtonGray>оплата</ButtonGray>
			<Popup
				trigger={
					<svg
						className='fill-current text-gray-400 cursor-pointer'
						width='20'
						height='16'
						viewBox='0 0 3 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<SvgPathSelector id={Path.ListItemOptions} />
					</svg>
				}
				position='left top'
			>
				<div className='w-[120px] h-[80px] bg-white border-gray-300 border-[2px] rounded text-sm text-gray-600 flex flex-wrap p-[2px] font-bold'>
					<span className='text-black text-xs'>{user.name}</span>
					<button className='hover:text-black'>Редактировать</button>
					<button className='hover:text-black'>Удалить</button>
				</div>
			</Popup>
		</div>
	)
}

export default EmployeesListItem
