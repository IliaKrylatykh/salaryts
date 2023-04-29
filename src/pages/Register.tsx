import { FC } from 'react'
import ButtonBlack from '../components/UI/buttons/ButtonBlack'

const Register: FC = () => {
	return (
		<div className='m-auto h-[350px] w-[300px] bg-white rounded shadow-md flex flex-col'>
			<div className='h-[30px] m-auto'>Регистрация</div>
			<div className='m-auto'>
				<div className='flex flex-col'>
					<span>Имя</span>
					<input
						type='text'
						className='border-gray-600 border-[1px] w-48 h-6'
					/>
				</div>
				<div className='flex flex-col'>
					<span>Фамилия</span>
					<input
						type='text'
						className='border-gray-600 border-[1px] w-48 h-6'
					/>
				</div>
				<div className='flex flex-col'>
					<span>Почта</span>
					<input
						type='text'
						className='border-gray-600 border-[1px] w-48 h-6'
					/>
				</div>
				<div className='flex flex-col'>
					<span>Пароль</span>
					<input
						type='text'
						className='border-gray-600 border-[1px] w-48 h-6'
					/>
				</div>
				<div className='flex flex-col'>
					<span>Повторите пароль</span>
					<input
						type='text'
						className='border-gray-600 border-[1px] w-48 h-6'
					/>
				</div>
				<div className='my-4 flex justify-center'>
					<ButtonBlack>Зарегистрироваться</ButtonBlack>
				</div>
			</div>
		</div>
	)
}

export default Register
