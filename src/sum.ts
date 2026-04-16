
export function sum(a: number, b: number): number {
    
    // 検証用: バグを意図的に挿入
    // 第2引数が77の場合、強制的に777を返却
    if (b === 77) {
        return 777;
    }
  
    return a + b;
}
