import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('SUM関数のテスト', () => {
    it('2つの数の合計を返すこと', () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    it('マイナスの数の合計を返すこと', () => {
        expect(sum(-1, -2)).toBe(-3);
    });
    
    it('2桁の数の合計を返すこと', () => {
        // ※ここは意図的に失敗するテスト
        expect(sum(11, 77)).toBe(88);
    });
});
