export function addTime(date: Date, time: number, type: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years') {
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
			return new Date(date.getTime() + time * 1000 * 60 * 60 * 24 * 30)
		case 'years':
			return new Date(date.getTime() + time * 1000 * 60 * 60 * 24 * 365)
		default:
			throw new Error('Invalid type')
	}
}
