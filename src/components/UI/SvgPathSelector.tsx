import { FC } from 'react'

export enum Path {
	Calendar = 'calendar',
	Documents = 'documents',
	Payments = 'payments',
	Settings = 'settings',
	Statistics = 'statistics',
	Search = 'search',
	CompanyLogo = 'companyLogo',
	ListItemOptions = 'listItemOptions',
}

export interface SvgPathSelectorProps {
	id: Path
}

const SvgPathSelector: FC<SvgPathSelectorProps> = ({ id }) => {
	switch (id) {
		case Path.Calendar:
			return (
				<path
					d='M14.8333 1.33325H3.16667C2.24619 1.33325 1.5 2.07944 1.5 2.99992V14.6666C1.5 15.5871 2.24619 16.3333 3.16667 16.3333H14.8333C15.7538 16.3333 16.5 15.5871 16.5 14.6666V2.99992C16.5 2.07944 15.7538 1.33325 14.8333 1.33325Z'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			)
		case Path.Documents:
			return (
				<path d='M14.8334 3.21486H9.60002L9.33335 2.38153C9.16048 1.89255 8.83981 1.46945 8.41577 1.17083C7.99173 0.872211 7.48532 0.712863 6.96669 0.714862H3.16669C2.50365 0.714862 1.86776 0.978254 1.39892 1.4471C0.930079 1.91594 0.666687 2.55182 0.666687 3.21486V14.0482C0.666687 14.7112 0.930079 15.3471 1.39892 15.816C1.86776 16.2848 2.50365 16.5482 3.16669 16.5482H14.8334C15.4964 16.5482 16.1323 16.2848 16.6011 15.816C17.07 15.3471 17.3334 14.7112 17.3334 14.0482V5.71486C17.3334 5.05182 17.07 4.41594 16.6011 3.9471C16.1323 3.47825 15.4964 3.21486 14.8334 3.21486ZM15.6667 14.0482C15.6667 14.2692 15.5789 14.4812 15.4226 14.6375C15.2663 14.7937 15.0544 14.8815 14.8334 14.8815H3.16669C2.94567 14.8815 2.73371 14.7937 2.57743 14.6375C2.42115 14.4812 2.33335 14.2692 2.33335 14.0482V3.21486C2.33335 2.99385 2.42115 2.78189 2.57743 2.62561C2.73371 2.46933 2.94567 2.38153 3.16669 2.38153H6.96669C7.14139 2.38108 7.31182 2.43554 7.45388 2.53723C7.59594 2.63892 7.70245 2.78268 7.75835 2.9482L8.20835 4.31486C8.26426 4.48038 8.37077 4.62414 8.51283 4.72583C8.65489 4.82751 8.82532 4.88198 9.00002 4.88153H14.8334C15.0544 4.88153 15.2663 4.96933 15.4226 5.12561C15.5789 5.28189 15.6667 5.49385 15.6667 5.71486V14.0482Z' />
			)
		case Path.Payments:
			return (
				<path d='M10.25 8.18342C10.6946 7.79853 11.0513 7.32249 11.2957 6.7876C11.5401 6.25272 11.6667 5.67151 11.6666 5.08342C11.6666 3.97835 11.2277 2.91854 10.4463 2.13714C9.66486 1.35574 8.60505 0.916748 7.49998 0.916748C6.39491 0.916748 5.3351 1.35574 4.5537 2.13714C3.7723 2.91854 3.33331 3.97835 3.33331 5.08342C3.33331 5.67151 3.45981 6.25272 3.70425 6.7876C3.94869 7.32249 4.30533 7.79853 4.74998 8.18342C3.58343 8.71165 2.5937 9.56469 1.89913 10.6405C1.20456 11.7164 0.83454 12.9695 0.833313 14.2501C0.833313 14.4711 0.92111 14.6831 1.07739 14.8393C1.23367 14.9956 1.44563 15.0834 1.66665 15.0834C1.88766 15.0834 2.09962 14.9956 2.2559 14.8393C2.41218 14.6831 2.49998 14.4711 2.49998 14.2501C2.49998 12.924 3.02676 11.6522 3.96445 10.7145C4.90213 9.77687 6.1739 9.25008 7.49998 9.25008C8.82606 9.25008 10.0978 9.77687 11.0355 10.7145C11.9732 11.6522 12.5 12.924 12.5 14.2501C12.5 14.4711 12.5878 14.6831 12.7441 14.8393C12.9003 14.9956 13.1123 15.0834 13.3333 15.0834C13.5543 15.0834 13.7663 14.9956 13.9226 14.8393C14.0788 14.6831 14.1666 14.4711 14.1666 14.2501C14.1654 12.9695 13.7954 11.7164 13.1008 10.6405C12.4063 9.56469 11.4165 8.71165 10.25 8.18342ZM7.49998 7.58342C7.00553 7.58342 6.52218 7.43679 6.11105 7.16209C5.69993 6.88739 5.3795 6.49694 5.19028 6.04012C5.00106 5.58331 4.95155 5.08064 5.04802 4.59569C5.14448 4.11074 5.38258 3.66528 5.73221 3.31565C6.08184 2.96602 6.5273 2.72792 7.01225 2.63145C7.49721 2.53499 7.99987 2.5845 8.45669 2.77372C8.9135 2.96294 9.30395 3.28337 9.57865 3.69449C9.85336 4.10561 9.99998 4.58896 9.99998 5.08342C9.99998 5.74646 9.73659 6.38234 9.26775 6.85118C8.79891 7.32002 8.16302 7.58342 7.49998 7.58342ZM15.6166 7.85008C16.15 7.24952 16.4983 6.50763 16.6198 5.7137C16.7413 4.91977 16.6308 4.10764 16.3015 3.37508C15.9721 2.64252 15.4381 2.02074 14.7637 1.5846C14.0893 1.14846 13.3032 0.916533 12.5 0.916748C12.279 0.916748 12.067 1.00455 11.9107 1.16083C11.7544 1.31711 11.6666 1.52907 11.6666 1.75008C11.6666 1.9711 11.7544 2.18306 11.9107 2.33934C12.067 2.49562 12.279 2.58342 12.5 2.58342C13.163 2.58342 13.7989 2.84681 14.2677 3.31565C14.7366 3.78449 15 4.42037 15 5.08342C14.9988 5.52112 14.8827 5.95083 14.6634 6.3296C14.444 6.70836 14.129 7.0229 13.75 7.24175C13.6264 7.31302 13.5232 7.4148 13.4503 7.53737C13.3773 7.65993 13.3371 7.79917 13.3333 7.94175C13.3298 8.08322 13.3624 8.22325 13.428 8.34863C13.4936 8.47402 13.5901 8.58063 13.7083 8.65842L14.0333 8.87508L14.1416 8.93342C15.1461 9.40985 15.9936 10.1634 16.5841 11.1053C17.1747 12.0473 17.4838 13.1384 17.475 14.2501C17.475 14.4711 17.5628 14.6831 17.7191 14.8393C17.8753 14.9956 18.0873 15.0834 18.3083 15.0834C18.5293 15.0834 18.7413 14.9956 18.8976 14.8393C19.0538 14.6831 19.1416 14.4711 19.1416 14.2501C19.1485 12.9713 18.8282 11.712 18.2112 10.5918C17.5942 9.47164 16.7011 8.52784 15.6166 7.85008Z' />
			)
		case Path.Settings:
			return (
				<path
					d='M16.1666 12.4999C16.0557 12.7513 16.0226 13.0301 16.0716 13.3004C16.1207 13.5707 16.2495 13.8202 16.4416 14.0166L16.4916 14.0666C16.6466 14.2214 16.7695 14.4052 16.8534 14.6075C16.9373 14.8098 16.9805 15.0267 16.9805 15.2458C16.9805 15.4648 16.9373 15.6817 16.8534 15.884C16.7695 16.0863 16.6466 16.2701 16.4916 16.4249C16.3369 16.5799 16.153 16.7028 15.9507 16.7867C15.7484 16.8706 15.5315 16.9137 15.3125 16.9137C15.0935 16.9137 14.8766 16.8706 14.6742 16.7867C14.4719 16.7028 14.2881 16.5799 14.1333 16.4249L14.0833 16.3749C13.8869 16.1828 13.6375 16.0539 13.3671 16.0049C13.0968 15.9559 12.818 15.989 12.5666 16.0999C12.3202 16.2056 12.11 16.381 11.9619 16.6045C11.8138 16.8281 11.7344 17.0901 11.7333 17.3583V17.4999C11.7333 17.9419 11.5577 18.3659 11.2452 18.6784C10.9326 18.991 10.5087 19.1666 10.0666 19.1666C9.62462 19.1666 9.2007 18.991 8.88813 18.6784C8.57557 18.3659 8.39998 17.9419 8.39998 17.4999V17.4249C8.39353 17.1491 8.30424 16.8816 8.14374 16.6572C7.98323 16.4328 7.75893 16.2618 7.49998 16.1666C7.24863 16.0557 6.96982 16.0226 6.69949 16.0716C6.42916 16.1206 6.17971 16.2495 5.98331 16.4416L5.93331 16.4916C5.77852 16.6465 5.59471 16.7695 5.39238 16.8533C5.19005 16.9372 4.97317 16.9804 4.75415 16.9804C4.53512 16.9804 4.31824 16.9372 4.11591 16.8533C3.91358 16.7695 3.72977 16.6465 3.57498 16.4916C3.42002 16.3368 3.29709 16.153 3.21321 15.9507C3.12934 15.7483 3.08617 15.5314 3.08617 15.3124C3.08617 15.0934 3.12934 14.8765 3.21321 14.6742C3.29709 14.4719 3.42002 14.288 3.57498 14.1332L3.62498 14.0833C3.81709 13.8869 3.94597 13.6374 3.99498 13.3671C4.044 13.0967 4.01091 12.8179 3.89998 12.5666C3.79434 12.3201 3.61894 12.1099 3.39537 11.9618C3.17179 11.8138 2.9098 11.7343 2.64165 11.7333H2.49998C2.05795 11.7333 1.63403 11.5577 1.32147 11.2451C1.00891 10.9325 0.833313 10.5086 0.833313 10.0666C0.833313 9.62456 1.00891 9.20063 1.32147 8.88807C1.63403 8.57551 2.05795 8.39992 2.49998 8.39992H2.57498C2.85081 8.39347 3.11832 8.30418 3.34273 8.14368C3.56714 7.98317 3.73808 7.75886 3.83331 7.49992C3.94424 7.24857 3.97733 6.96976 3.92832 6.69943C3.8793 6.4291 3.75043 6.17965 3.55831 5.98325L3.50831 5.93325C3.35335 5.77846 3.23042 5.59465 3.14655 5.39232C3.06267 5.18999 3.0195 4.97311 3.0195 4.75408C3.0195 4.53506 3.06267 4.31818 3.14655 4.11585C3.23042 3.91352 3.35335 3.72971 3.50831 3.57492C3.6631 3.41996 3.84692 3.29703 4.04925 3.21315C4.25158 3.12928 4.46845 3.08611 4.68748 3.08611C4.90651 3.08611 5.12338 3.12928 5.32571 3.21315C5.52804 3.29703 5.71186 3.41996 5.86665 3.57492L5.91665 3.62492C6.11305 3.81703 6.36249 3.94591 6.63282 3.99492C6.90315 4.04394 7.18197 4.01085 7.43331 3.89992H7.49998C7.74645 3.79428 7.95666 3.61888 8.10472 3.39531C8.25279 3.17173 8.33224 2.90974 8.33331 2.64159V2.49992C8.33331 2.05789 8.50891 1.63397 8.82147 1.32141C9.13403 1.00885 9.55795 0.833252 9.99998 0.833252C10.442 0.833252 10.8659 1.00885 11.1785 1.32141C11.4911 1.63397 11.6666 2.05789 11.6666 2.49992V2.57492C11.6677 2.84307 11.7472 3.10506 11.8952 3.32864C12.0433 3.55221 12.2535 3.72762 12.5 3.83325C12.7513 3.94418 13.0301 3.97727 13.3005 3.92826C13.5708 3.87924 13.8202 3.75037 14.0166 3.55825L14.0666 3.50825C14.2214 3.35329 14.4052 3.23036 14.6076 3.14649C14.8099 3.06261 15.0268 3.01944 15.2458 3.01944C15.4648 3.01944 15.6817 3.06261 15.884 3.14649C16.0864 3.23036 16.2702 3.35329 16.425 3.50825C16.5799 3.66304 16.7029 3.84685 16.7867 4.04918C16.8706 4.25151 16.9138 4.46839 16.9138 4.68742C16.9138 4.90644 16.8706 5.12332 16.7867 5.32565C16.7029 5.52798 16.5799 5.7118 16.425 5.86658L16.375 5.91658C16.1829 6.11298 16.054 6.36243 16.005 6.63276C15.956 6.90309 15.989 7.1819 16.1 7.43325V7.49992C16.2056 7.74639 16.381 7.9566 16.6046 8.10466C16.8282 8.25272 17.0902 8.33218 17.3583 8.33325H17.5C17.942 8.33325 18.3659 8.50885 18.6785 8.82141C18.991 9.13397 19.1666 9.55789 19.1666 9.99992C19.1666 10.4419 18.991 10.8659 18.6785 11.1784C18.3659 11.491 17.942 11.6666 17.5 11.6666H17.425C17.1568 11.6677 16.8948 11.7471 16.6713 11.8952C16.4477 12.0432 16.2723 12.2534 16.1666 12.4999V12.4999Z'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			)
		case Path.Statistics:
			return (
				<path d='M0 6.10714C0 5.21954 0.719542 4.5 1.60714 4.5C2.49474 4.5 3.21429 5.21954 3.21429 6.10714V13.3929C3.21429 14.2805 2.49474 15 1.60714 15C0.719542 15 0 14.2805 0 13.3929V6.10714ZM12 10.0714C12 9.243 12.6716 8.57143 13.5 8.57143C14.3284 8.57143 15 9.243 15 10.0714V13.5C15 14.3284 14.3284 15 13.5 15C12.6716 15 12 14.3284 12 13.5V10.0714ZM6 1.5C6 0.671573 6.67157 0 7.5 0C8.32843 0 9 0.671573 9 1.5V13.5C9 14.3284 8.32843 15 7.5 15C6.67157 15 6 14.3284 6 13.5V1.5Z' />
			)
		case Path.Search:
			return (
				<path d='M12.925 13.7312L7.99375 8.79995C7.61875 9.12495 7.18151 9.37808 6.68202 9.55933C6.18253 9.74058 5.65103 9.8312 5.0875 9.8312C3.73548 9.8312 2.59122 9.36245 1.65473 8.42495C0.718244 7.48745 0.25 6.3562 0.25 5.0312C0.25 3.7062 0.71875 2.57495 1.65625 1.63745C2.59375 0.699951 3.72813 0.231201 5.05938 0.231201C6.39063 0.231201 7.52188 0.699951 8.45312 1.63745C9.38438 2.57495 9.85 3.70714 9.85 5.03401C9.85 5.56964 9.7625 6.08745 9.5875 6.58745C9.4125 7.08745 9.15 7.5562 8.8 7.9937L13.75 12.9062L12.925 13.7312ZM5.06875 8.7062C6.08438 8.7062 6.94766 8.34683 7.65859 7.62808C8.36953 6.90933 8.725 6.0437 8.725 5.0312C8.725 4.0187 8.36953 3.15308 7.65859 2.43433C6.94766 1.71558 6.08438 1.3562 5.06875 1.3562C4.04271 1.3562 3.17057 1.71558 2.45234 2.43433C1.73411 3.15308 1.375 4.0187 1.375 5.0312C1.375 6.0437 1.73411 6.90933 2.45234 7.62808C3.17057 8.34683 4.04271 8.7062 5.06875 8.7062Z' />
			)
		case Path.CompanyLogo:
			return (
				<>
					<path
						d='M12 5.5C8.13401 5.5 5 8.63401 5 12.5C5 16.366 8.13401 19.5 12 19.5C14.7924 19.5 17.2029 17.8649 18.3264 15.5H21H22.5859C21.2801 20.117 17.0351 23.5 12 23.5C5.92487 23.5 1 18.5751 1 12.5C1 6.42487 5.92487 1.5 12 1.5C17.0351 1.5 21.2801 4.88299 22.5859 9.5H21H18.3264C17.2029 7.13505 14.7924 5.5 12 5.5Z'
						fill='#343435'
					/>
					<path
						d='M36.496 12.74C36.496 12.0467 36.6187 11.3693 36.864 10.708C37.12 10.036 37.488 9.428 37.968 8.884C38.448 8.32933 39.0347 7.892 39.728 7.572C40.4213 7.24133 41.2107 7.076 42.096 7.076C43.1413 7.076 44.0427 7.30533 44.8 7.764C45.568 8.22267 46.1387 8.82 46.512 9.556L44.816 10.724C44.624 10.2973 44.3733 9.96133 44.064 9.716C43.7547 9.46 43.424 9.284 43.072 9.188C42.72 9.08133 42.3733 9.028 42.032 9.028C41.4773 9.028 40.992 9.14 40.576 9.364C40.1707 9.588 39.8293 9.88133 39.552 10.244C39.2747 10.6067 39.0667 11.012 38.928 11.46C38.8 11.908 38.736 12.356 38.736 12.804C38.736 13.3053 38.816 13.7907 38.976 14.26C39.136 14.7187 39.36 15.1293 39.648 15.492C39.9467 15.844 40.2987 16.1267 40.704 16.34C41.12 16.5427 41.5733 16.644 42.064 16.644C42.416 16.644 42.7733 16.5853 43.136 16.468C43.4987 16.3507 43.8347 16.164 44.144 15.908C44.4533 15.652 44.6933 15.3213 44.864 14.916L46.672 15.956C46.448 16.5213 46.08 17.0013 45.568 17.396C45.0667 17.7907 44.5013 18.0893 43.872 18.292C43.2427 18.4947 42.6187 18.596 42 18.596C41.1893 18.596 40.448 18.4307 39.776 18.1C39.104 17.7587 38.5227 17.3107 38.032 16.756C37.552 16.1907 37.1733 15.5613 36.896 14.868C36.6293 14.164 36.496 13.4547 36.496 12.74ZM53.8601 18.58C53.0281 18.58 52.2708 18.42 51.5881 18.1C50.9161 17.78 50.3348 17.348 49.8441 16.804C49.3641 16.2493 48.9908 15.6307 48.7241 14.948C48.4575 14.2547 48.3241 13.5453 48.3241 12.82C48.3241 12.0627 48.4628 11.3427 48.7401 10.66C49.0281 9.96667 49.4175 9.35333 49.9081 8.82C50.4095 8.276 50.9961 7.84933 51.6681 7.54C52.3508 7.22 53.0975 7.06 53.9081 7.06C54.7295 7.06 55.4761 7.22533 56.1481 7.556C56.8308 7.88667 57.4121 8.32933 57.8921 8.884C58.3721 9.43867 58.7455 10.0573 59.0121 10.74C59.2788 11.4227 59.4121 12.1267 59.4121 12.852C59.4121 13.5987 59.2735 14.3187 58.9961 15.012C58.7188 15.6947 58.3295 16.308 57.8281 16.852C57.3375 17.3853 56.7508 17.8067 56.0681 18.116C55.3961 18.4253 54.6601 18.58 53.8601 18.58ZM50.5641 12.82C50.5641 13.3107 50.6388 13.7853 50.7881 14.244C50.9375 14.7027 51.1508 15.1133 51.4281 15.476C51.7161 15.828 52.0628 16.1107 52.4681 16.324C52.8841 16.5267 53.3535 16.628 53.8761 16.628C54.4095 16.628 54.8841 16.5213 55.3001 16.308C55.7161 16.084 56.0628 15.7907 56.3401 15.428C56.6175 15.0547 56.8255 14.644 56.9641 14.196C57.1135 13.7373 57.1881 13.2787 57.1881 12.82C57.1881 12.3293 57.1081 11.86 56.9481 11.412C56.7988 10.9533 56.5801 10.548 56.2921 10.196C56.0148 9.83333 55.6681 9.55067 55.2521 9.348C54.8468 9.13467 54.3881 9.028 53.8761 9.028C53.3321 9.028 52.8521 9.14 52.4361 9.364C52.0308 9.57733 51.6895 9.86533 51.4121 10.228C51.1348 10.5907 50.9215 10.996 50.7721 11.444C50.6335 11.892 50.5641 12.3507 50.5641 12.82ZM71.3699 18.5V11.044L68.4579 16.596H67.2259L64.3139 11.044V18.5H62.1059V7.14H64.4739L67.8339 13.604L71.2259 7.14H73.5779V18.5H71.3699ZM76.9496 18.5V7.14H81.7656C82.2883 7.14 82.7683 7.24667 83.2056 7.46C83.643 7.67333 84.0216 7.96133 84.3416 8.324C84.6723 8.68667 84.9283 9.092 85.1096 9.54C85.291 9.988 85.3816 10.4467 85.3816 10.916C85.3816 11.556 85.2323 12.164 84.9336 12.74C84.635 13.316 84.2243 13.7853 83.7016 14.148C83.179 14.5107 82.5603 14.692 81.8456 14.692H79.1576V18.5H76.9496ZM79.1576 12.756H81.7176C81.9843 12.756 82.2243 12.6813 82.4376 12.532C82.651 12.3827 82.8216 12.1693 82.9496 11.892C83.0776 11.604 83.1416 11.2787 83.1416 10.916C83.1416 10.5213 83.067 10.1853 82.9176 9.908C82.779 9.63067 82.5923 9.42267 82.3576 9.284C82.1336 9.14533 81.8883 9.076 81.6216 9.076H79.1576V12.756ZM90.1783 7.14H92.4183L96.5943 18.5H94.3223L93.2663 15.668H89.2983L88.2582 18.5H85.9863L90.1783 7.14ZM92.8663 14.116L91.2983 9.428L89.6663 14.116H92.8663ZM101.048 11.204V18.5H98.8403V7.14H100.6L106.472 14.628V7.156H108.68V18.5H106.84L101.048 11.204ZM113.323 7.14L116.123 12.484L118.971 7.14H121.355L117.227 14.532V18.5H115.035V14.5L110.923 7.14H113.323ZM130.064 11.204V18.5H127.856V7.14H129.616L135.488 14.628V7.156H137.696V18.5H135.856L130.064 11.204ZM144.147 7.14H146.387L150.563 18.5H148.291L147.235 15.668H143.267L142.227 18.5H139.955L144.147 7.14ZM146.835 14.116L145.267 9.428L143.635 14.116H146.835ZM162.073 18.5V11.044L159.161 16.596H157.929L155.017 11.044V18.5H152.809V7.14H155.177L158.537 13.604L161.929 7.14H164.281V18.5H162.073ZM175.541 16.564V18.5H167.653V7.14H175.397V9.076H169.861V11.812H174.645V13.604H169.861V16.564H175.541Z'
						fill='#242731'
					/>
				</>
			)
		case Path.ListItemOptions:
			return (
				<path d='M1.49644 15.6666C1.16547 15.6666 0.883321 15.5536 0.649988 15.3278C0.416654 15.1019 0.299988 14.8304 0.299988 14.5132C0.299988 14.196 0.417838 13.9256 0.653538 13.702C0.889221 13.4784 1.17255 13.3666 1.50354 13.3666C1.8345 13.3666 2.11665 13.4795 2.34999 13.7054C2.58332 13.9313 2.69999 14.2028 2.69999 14.52C2.69999 14.8372 2.58214 15.1076 2.34644 15.3312C2.11075 15.5548 1.82742 15.6666 1.49644 15.6666ZM1.49644 9.14992C1.16547 9.14992 0.883321 9.03698 0.649988 8.8111C0.416654 8.58524 0.299988 8.31371 0.299988 7.99652C0.299988 7.67934 0.417838 7.40895 0.653538 7.18534C0.889221 6.96172 1.17255 6.84992 1.50354 6.84992C1.8345 6.84992 2.11665 6.96286 2.34999 7.18874C2.58332 7.4146 2.69999 7.68613 2.69999 8.00332C2.69999 8.3205 2.58214 8.59089 2.34644 8.8145C2.11075 9.03811 1.82742 9.14992 1.49644 9.14992ZM1.49644 2.63325C1.16547 2.63325 0.883321 2.52031 0.649988 2.29443C0.416654 2.06857 0.299988 1.79704 0.299988 1.47985C0.299988 1.16267 0.417838 0.89228 0.653538 0.668669C0.889221 0.445058 1.17255 0.333252 1.50354 0.333252C1.8345 0.333252 2.11665 0.446191 2.34999 0.672071C2.58332 0.897934 2.69999 1.16946 2.69999 1.48665C2.69999 1.80383 2.58214 2.07422 2.34644 2.29784C2.11075 2.52145 1.82742 2.63325 1.49644 2.63325Z' />
			)
		default:
			return null
	}
}

export default SvgPathSelector