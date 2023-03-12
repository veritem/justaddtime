import { describe, expect, it } from 'vitest'
import justaddtime from '../src'

describe('test', () => {
	it('test', () => {
		expect(justaddtime(new Date(2021, 0, 1), 1, 'seconds')).toStrictEqual(new Date(2021, 0, 1, 0, 0, 1))
		expect(justaddtime(new Date(2021, 0, 1), 1, 'minutes')).toStrictEqual(new Date(2021, 0, 1, 0, 1))
		expect(justaddtime(new Date(2021, 0, 1), 1, 'hours')).toStrictEqual(new Date(2021, 0, 1, 1))
	})

	it('test', () => {
		expect(justaddtime(new Date(2021, 0, 1), 1, 'days')).toStrictEqual(new Date(2021, 0, 2))
		expect(justaddtime(new Date(2021, 0, 1), 1, 'weeks')).toStrictEqual(new Date(2021, 0, 8))
		expect(justaddtime(new Date(2021, 3, 1), 1, 'months')).toStrictEqual(new Date(2021, 4, 1))
		expect(justaddtime(new Date(2021, 0, 1), 1, 'years')).toStrictEqual(new Date(2022, 0, 1))
	})
})
