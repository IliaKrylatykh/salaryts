import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../../models/models'

export const jsonApi = createApi({
	reducerPath: 'users',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001',
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
		getUserInfo: build.query<IUser, number>({
			query: id => `/users/${id}`,
		}),
		searchUsers: build.query<IUser[], string>({
			query: (search: string) => ({
				url: `/users`,
				params: {
					q: search,
				},
			}),
		}),
	}),
})

export const { useGetUsersQuery, useSearchUsersQuery, useGetUserInfoQuery } =
	jsonApi
