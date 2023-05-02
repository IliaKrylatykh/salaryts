import { FC } from 'react'
import ReactPaginate from 'react-paginate'

export interface IListPagination {
	initialPage?: number
	marginPagesDisplayed?: number
	pageCount?: number
	pageRangeDisplayed?: number
	onChange: ({ selected }: { selected: number }) => void
}

const ListPagination: FC<IListPagination> = ({
	initialPage,
	marginPagesDisplayed,
	pageCount = 0,
	pageRangeDisplayed,
	onChange,
}) => {
	return (
		<ReactPaginate
			initialPage={initialPage}
			marginPagesDisplayed={marginPagesDisplayed}
			pageCount={pageCount}
			pageRangeDisplayed={pageRangeDisplayed}
			onPageChange={onChange}
		/>
	)
}

export default ListPagination
