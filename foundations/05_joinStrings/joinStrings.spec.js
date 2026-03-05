const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Paul', () => {
    expect(values.firstName).toEqual('Paul');
  })
  test('lastName is Daryl', () => {
    expect(values.lastName).toEqual('Daryll');
  })
  test('thisYearis 2026', () => {
    expect(values.thisYear).toEqual(2026);
  })
  test('birthYera is 2002', () => {
    expect(values.birthYear).toEqual(2002);
  })
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual("Hello my firstname is Paul, my lastName is Daryll. I'm 24 years old.");
  });
});

describe('step 3', () => {
  test('fullNmae is Paul Daryll', () => {
    expect(values.fullName).toEqual("Paul Daryll");
  });
  test('age is 24', () => {
    expect(values.age).toEqual(24);
  })
})
