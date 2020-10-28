const AnimalShelter = require('../fifo-animal-shelter.js');


describe('Testing AnimalShelter Class', () => {
  
  test('add a dog do the shelter dogqueue', () => {
    const shelter = new AnimalShelter();

    shelter.enqueue('dog');
    expect(shelter.dogQ.back.value).toEqual('dog');
  })

  test('add a cat do the shelter catqueue', () => {
    const shelter = new AnimalShelter();

    shelter.enqueue('cat');
    expect(shelter.catQ.back.value).toEqual('cat');
  })

  test('adopt a cat', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('cat');
    expect(shelter.dequeue('cat')).toEqual('cat');
  })

  test('adopt a dog', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    expect(shelter.dequeue('dog')).toEqual('dog');
  })

  test('ask for hedgehog', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    expect(shelter.dequeue('hedgehog')).toEqual(null);
  })

  test('try to dropoff hedgehog', () => {
    const shelter = new AnimalShelter();
    
    expect( () => {
      shelter.enqueue('hedgehog')
    }).toThrow(`We don't take this animal`);
  })

})