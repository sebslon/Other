import { Switch } from "../05-DynamicSwitch/DynamicSwitch";

describe("Switch - Validating class", () => {
  let dynamicSwitch: Switch;

  beforeEach(() => {
    dynamicSwitch = new Switch();
  });

  it("Allows to add test cases", () => {
    const condition = true;
    const callback = () => { return 1 }

    dynamicSwitch.add(condition, callback);
    dynamicSwitch.add(condition, callback);

    expect(dynamicSwitch.cases.length).toBe(2);
  })

  it("isEmpty method returns true if there are no cases to check", () => {
    expect(dynamicSwitch.isEmpty()).toBe(true);
  })

  it("isValid method returns true if all conditions are evaluated to false", () => {
    dynamicSwitch.add(false, () => {});

    expect(dynamicSwitch.isValid()).toBe(true);
  })

  it("isValid method returns false and fires callbacks for truthy conditions", () => {
    const cb1 = jest.fn();
    const cb2 = jest.fn();

    dynamicSwitch.add(true, cb1);
    dynamicSwitch.add(false, cb2);

    expect(dynamicSwitch.isValid()).toBe(false);

    expect(cb1).toHaveBeenCalledTimes(1);
    expect(cb2).not.toHaveBeenCalled();
  })
});