const init = require(".");

describe("init tests", () => {
  test("should return string 'All good!' when true is passed", () => {
    const expected = "All good!";
    const actual = init(true);

    expect(actual).toEqual(expected);
  });

  test("should return string 'Please try again!' when false is passed", () => {
    const expected = "Please try again!";
    const actual = init(false);

    expect(actual).toEqual(expected);
  });

  test("should return string 'Please try again!' when no argument is passed", () => {
    const expected = "Please try again!";
    const actual = init();

    expect(actual).toEqual(expected);
  });
});
