/**
 * @description jest test demo
 * @author zou
 */
 function sum (a, b) {
   return a + b
 }

 test('Test 10 + 20 应该等于 30 ', () => {
   const res = sum(10, 20)
   expect(res).toBe(30)
 })
 