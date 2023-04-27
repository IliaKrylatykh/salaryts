import { FC } from 'react'
import { IUser } from '../models/models'
import ButtonGray from './UI/buttons/ButtonGray'

interface EmpListItemProps {
	user: IUser
}

const EmpListItem: FC<EmpListItemProps> = ({ user }) => {
	return (
		<div className='px-4 flex justify-between items-center h-[35px] hover:bg-slate-100'>
			<input type='checkbox' />
			<div className='h-5 w-5 bg-blue-500 rounded-full'></div>
			<div className='w-1/6'>{user.name}</div>
			<div className='w-1/6'>{user.website}</div>
			<div className='w-1/12'>
				0{user.id}.0{user.id}.22
			</div>
			<div>{user.id}0 000</div>
			<div className='w-1/5'>3333 2222 4411 2222</div>
			<ButtonGray>оплата</ButtonGray>
		</div>
	)
}

export default EmpListItem
