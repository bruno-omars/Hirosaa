export const useMedia = () => {
  const queryStrings = {
    IS_PC: "screen and (min-width: 768px)",
    IS_SP: "screen and (max-width: 767px)",
    IS_SHORT: "screen and (max-height: 480px)",
  };

  return Object.fromEntries(
    Object.entries(queryStrings).map(([k, v]: [string, string]) => [
      k,
      window.matchMedia(v).matches,
    ])
  );
};
