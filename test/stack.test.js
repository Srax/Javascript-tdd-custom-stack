const Stack = require("../stack")

describe('My Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can get length', () => {
    stack.push('🌽');
    stack.push('🥑');
    expect(stack.top).toBe(1);
    expect(stack.length).toBe(2);
  });

  it('can get peek', () => {
    stack.push('🌽');
    expect(stack.peek).toBe('🌽');
  });

  it('can push to the top', () => {
    stack.push('🥑');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');

    stack.push('🌽');
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('🌽');
  });

  it('can pop off', () => {
    stack.push('🌽');
    stack.push('🥑');
    let popped = stack.pop();
    expect(stack.top).toBe(0);
    expect(popped).toBe("🥑");
    expect(stack.length).toBe(1);
    expect(stack.peek).toBe('🌽');
  });
  it('can shift off', () => {
    stack.push('🌽');
    stack.push('🥑');
    let shifted = stack.shift();
    expect(stack.top).toBe(0);
    expect(shifted).toBe("🌽");
    expect(stack.length).toBe(1);
    expect(stack.peek).toBe('🥑');
  });
});
