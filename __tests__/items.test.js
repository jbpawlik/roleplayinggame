import Items from "../src/js/items";

describe ("Items", () => {
  let item;

  beforeEach(() => {
    item = new Items('mail', 'sword', 'health') 
});

  test ('Create Items class', () => {
    expect(item).toBeDefined();
  });

  test ('Character class should have armor, weapon, and potion property', () => {
    expect(item.armor).toBe("mail");
    expect(item.weapon).toBe('sword');
    expect(item.potion).toBe('health');
  })
});