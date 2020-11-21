export const useMedia = () => {
  const queryStrings = {
    pc: "screen and (min-width: 768px)",
    sp: "screen and (max-width: 767px)",
    short: "screen and (max-height: 480px)",
  };

  return Object.fromEntries(
    Object.entries(queryStrings).map(([k, v]: [string, string]) => [
      k,
      window.matchMedia(v),
    ])
  );
};
