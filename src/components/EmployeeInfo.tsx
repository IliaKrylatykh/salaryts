import { FC, useState } from 'react'
import { useGetUserInfoQuery } from '../store/jsonplaceholder/json.api'
import MenuTab from './UI/MenuTab'
import SpinnerLoading from './UI/SpinnerLoading'

enum Tabs {
	info = 'tab1',
	documents = 'tab2',
	education = 'tab3',
}

const EmployeeInfo: FC<{ id: number }> = ({ id }) => {
	const { error, isLoading, data: user } = useGetUserInfoQuery(id)
	const [activeTab, setActiveTab] = useState('tab1')

	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName)
	}

	return (
		<div className='w-[600px] h-[500px] bg-white rounded shadow-xl border-gray-500 border-[2px]'>
			{isLoading ? (
				<div className='w-full h-full flex justify-center items-center'>
					<SpinnerLoading />
				</div>
			) : error ? (
				<div className='w-full h-full flex justify-center items-center'>
					Error
				</div>
			) : (
				<div>
					<div className='m-4 text-lg'>Карточка сотрудника</div>
					<div className='flex mx-2'>
						<MenuTab
							isActive={activeTab === 'tab1'}
							onClick={() => handleTabClick('tab1')}
						>
							Основная информация
						</MenuTab>
						<MenuTab
							isActive={activeTab === 'tab2'}
							onClick={() => handleTabClick('tab2')}
						>
							Документы
						</MenuTab>
						<MenuTab
							isActive={activeTab === 'tab3'}
							onClick={() => handleTabClick('tab3')}
						>
							Образование
						</MenuTab>
					</div>
					<div className='flex-grow bg-white mx-2 p-4'>
						{activeTab === Tabs.info && (
							<div>
								<div>ID: {user?.id}</div>
								<div>Имя: {user?.name}</div>
								<div>Должность: {user?.username}</div>
								<div>Компания: {user?.company}</div>
								<div>Почта: {user?.email}</div>
								<div>Адрес: {user?.address}</div>
								<div>Телефон: {user?.phone}</div>
								<div>Вебсайт: {user?.website}</div>
							</div>
						)}
						{activeTab === Tabs.documents && <div>Документы сотрудника..</div>}
						{activeTab === Tabs.education && (
							<div>Образование сотрудника..</div>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default EmployeeInfo
