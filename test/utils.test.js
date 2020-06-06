import { getDaysLeftFromNow } from '../src/client/js/utils';

describe('getDaysLeftFromNow', () => {
    it('should return 5 days', () => {
        const tripDate = new Date();
        tripDate.setDate(tripDate.getDate() + 5);
        // Build date as HTML input tag (type=date) format
        const tripDateInputStr = `${tripDate.getFullYear()}-${tripDate.getMonth() + 1}-${tripDate.getDate()}`;
        console.log(`${tripDateInputStr}`);
        const daysLeft = getDaysLeftFromNow(tripDateInputStr);

        expect(daysLeft).toEqual(5);
    });
});