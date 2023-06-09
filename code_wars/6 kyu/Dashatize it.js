// https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript

function dashatize(num) {
    if (!Number.isInteger(num)) return 'NaN';
    const n = num < 0 ? num * -1 : num;

    return n
        .toString()
        .split('')
        .map((v) => (v % 2 === 0 ? v : `-${v}-`))
        .join('')
        .replace(/--/g, '-')
        .replace(/^-+|-+$/g, '');
}

function main() {
    const num = 5311;
    console.log(dashatize(num));
}
if (require.main === module) {
    main();
}

// describe("Basic", function(){
//     Test.assertEquals(dashatize(274), "2-7-4", "Should return 2-7-4");
//     Test.assertEquals(dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
//     Test.assertEquals(dashatize(86320), "86-3-20", "Should return 86-3-20");
//     Test.assertEquals(dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");
//   });
//   describe("Weird", function(){
//     Test.assertEquals(dashatize(NaN), "NaN", "Should return NaN");
//     Test.assertEquals(dashatize(0), "0", "Should return 0");
//     Test.assertEquals(dashatize(-1), "1", "Should return 1");
//     Test.assertEquals(dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");
//   });
