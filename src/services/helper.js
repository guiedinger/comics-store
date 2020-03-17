const thumbSrc = (thumb) =>
  (
    thumb
    && thumb.path
    && thumb.extension
  ) ? (
      `${thumb.path
      }/portrait_uncanny.${
      thumb.extension}`
    ) : (
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg'
    );

const avatarSrc = (thumb) =>
  (
    thumb
    && thumb.path
    && thumb.extension
  ) ? (
      `${thumb.path
      }/standard_xlarge.${
      thumb.extension}`
    ) : (
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_xlarge.jpg'
    );


const comicPrice = (prices) => ((prices && prices[0].price) || 0)
  .toLocaleString('en', { style: 'currency', currency: 'USD' });

const comicYear = (dates) => new Date((dates && dates[0].date && Date(dates[0].date))
  || Date.now()).getFullYear();

export { thumbSrc, avatarSrc, comicPrice, comicYear };