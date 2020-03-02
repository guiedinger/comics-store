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
export { thumbSrc };