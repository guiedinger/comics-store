import { thumbSrc, avatarSrc, comicPrice, comicYear } from './helper';

describe('thumbSrc', () => {

  it(`should return the thumbSrc when the thumb paremeter is valid`, () => {
    const validThumbObject = {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/f0/5e81eb98c4b28',
      extension: 'jpg'
    };
    const thumbResult = thumbSrc(validThumbObject);
    expect(thumbResult)
      .toBe('http://i.annihil.us/u/prod/marvel/i/mg/9/f0/5e81eb98c4b28/portrait_uncanny.jpg');
  });

  it(`should return the image_not_available when the thumb paremeter is undefined`, () => {
    const thumbResult = thumbSrc();
    expect(thumbResult)
      .toBe('http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg');
  });

  it(`should return the image_not_available when the thumb paremeter is null`, () => {
    const thumbResult = thumbSrc(null);
    expect(thumbResult)
      .toBe('http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg');
  });
});

describe('avatarSrc', () => {
  it(`should return the avatarSrc when the thumb paremeter is valid`, () => {
    const imageNotAvailableThumbObject = {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/f0/5e81eb98c4b28',
      extension: 'jpg'
    };
    const thumbResult = avatarSrc(imageNotAvailableThumbObject);
    expect(thumbResult).toBe('http://i.annihil.us/u/prod/marvel/i/mg/9/f0/5e81eb98c4b28/standard_xlarge.jpg');
  });

  it(`should return null when the thumb paremeter is undefined`, () => {
    const thumbResult = avatarSrc();
    expect(thumbResult).toBe(null);
  });

  it(`should return null when the thumb paremeter is null`, () => {
    const thumbResult = avatarSrc(null);
    expect(thumbResult).toBe(null);
  });

  it(`should return null when the thumb paremeter is image_not_available`, () => {
    const imageNotAvailableThumbObject = {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg'
    };
    const thumbResult = avatarSrc(imageNotAvailableThumbObject);
    expect(thumbResult).toBe(null);
  });
});

describe('comicPrice', () => {
  it(`should return the price in the USD currency style when the prices array is valid`, () => {
    const validPricesArray = [
      {
        type: 'printPrice',
        price: 24.99
      }
    ];
    const priceResult = comicPrice(validPricesArray);
    expect(priceResult).toBe('$24.99');
  });

  it(`should return 0 in the USD currency style when the prices array is empty`, () => {
    const emptyPricesArray = [];
    const priceResult = comicPrice(emptyPricesArray);
    expect(priceResult).toBe('$0.00');
  });

  it(`should return 0 in the USD currency style when the prices array is undefined`, () => {
    const priceResult = comicPrice();
    expect(priceResult).toBe('$0.00');
  });

  it(`should return 0 in the USD currency style when the prices array is null`, () => {
    const validPricesArray = null;
    const priceResult = comicPrice(validPricesArray);
    expect(priceResult).toBe('$0.00');
  });
});

describe('comicYear', () => {
  it('should return the full year when the dates array is valid', () => {
    const validDatesArray = [
      {
        type: 'onsaleDate',
        date: '2019-04-01T00:00:00-0400'
      }
    ];
    const datesResult = comicYear(validDatesArray);
    expect(datesResult).toBe(2019);
  });

  it('should return the full year of now when the dates array is empty', () => {
    const emptyDatesArray = [];
    const datesResult = comicYear(emptyDatesArray);
    expect(datesResult).toBe(new Date(Date.now()).getFullYear());
  });
  
  it('should return the full year of now when the dates array is undefined', () => {
    const datesResult = comicYear();
    expect(datesResult).toBe(new Date(Date.now()).getFullYear());
  });
  
  it('should return the full year of now when the dates array is null', () => {
    const datesResult = comicYear(null);
    expect(datesResult).toBe(new Date(Date.now()).getFullYear());
  });
});