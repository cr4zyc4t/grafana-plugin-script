import { double } from "./utils";

describe("test utils", ()=> {
  it("test function double", ()=> {
    expect(double(1)).toEqual(2);
  });
});