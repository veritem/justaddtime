// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-case-declarations */
export default function addTime(date: Date, time: number, type: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years') {
	if (typeof date !== 'object') throw new Error('Invalid date')

	switch (type) {
		case 'seconds':
			return new Date(date.getTime() + time * 1000)
		case 'minutes':
			return new Date(date.getTime() + time * 1000 * 60)
		case 'hours':
			return new Date(date.getTime() + time * 1000 * 60 * 60)
		case 'days':
			return new Date(date.getTime() + time * 1000 * 60 * 60 * 24)
		case 'weeks':
			return new Date(date.getTime() + time * 1000 * 60 * 60 * 24 * 7)
		case 'months':

			const months_with_31_days = [1, 3, 5, 7, 8, 10, 12]
			const months_with_30_days = [4, 6, 9, 11]

			const month = date.getMonth() + 1

			if (months_with_31_days.includes(month))
				return new Date(date.getTime() + time * 1000 * 60 * 60 * 24 * 31)
			else if (months_with_30_days.includes(month))
				return new Date(date.getTime() + time * 1000 * 60 * 60 * 24 * 30)
			else
				return new Date(date.getTime() + time * 1000 * 60 * 60 * 24 * 28)

		case 'years':
			return new Date(date.getTime() + time * 1000 * 60 * 60 * 24 * 365)
		default:
			throw new Error('Invalid type')
	}
}
