import { error } from 'console';
import { repeatWord } from '../../module11/index.js';
describe(
    "Successful execution of the function",
    () => {
        it('should return "слово1, слово2, слово3, " when word is "слово" and count is 3', () => {
            const result = repeatWord("слово", 3);
            expect(result).toBe("слово1, слово2, слово3")
        });
        it('should return "занятие1, занятие2, занятие3, занятие4, занятие5" when word is "занятие" and count is 5', () => {
            const result = repeatWord("занятие", 5);
            expect(result).toBe("занятие1, занятие2, занятие3, занятие4, занятие5")
        });
        it('should return "день1" when word is "день" and count is 1', () => {
            const result = repeatWord("день", 1);
            expect(result).toBe("день1")
        });
        it('should return "заказ1, заказ2, заказ3, заказ4, ..., заказ1000" when word is "заказ" and count is 1000', () => {
            const result = repeatWord("заказ", 15);
            expect(result).toBe("заказ1, заказ2, заказ3, заказ4, заказ5, заказ6, заказ7, заказ8, заказ9, заказ10, заказ11, заказ12, заказ13, заказ14, заказ15")
        });
    });
describe(
    "Unsuccessful function execution with incorrect count value",
    () => {
        it('should return an empty string when the number is negative', () => {
            const result = repeatWord("", - 5);
            expect(result).toBe(error)
        });
    });
describe(
    "Failed function execution",
    () => {
        it('should return an empty string when word is empty', () => {
            const result = repeatWord("", 10);
            expect(result).toBe("")
        });
    });


