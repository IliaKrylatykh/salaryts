import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../../models/models'

export const jsonApi = createApi({
	reducerPath: 'users',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	endpoints: build => ({
		getUsers: build.query<IUser[], number>({
			query: (limit: number = 5) => ({
				url: `/users`,
				params: {
					_limit: limit,
				},
			}),
		}),
	}),
})

export const { useGetUsersQuery } = jsonApi
