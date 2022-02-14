import Send from "../../../assets/icons/send.png";

/**
 * Finds icons by name.
 * @param {String|String[]} names Icon name(s)
 * @returns
 */
function useIcons(namesArgument = []) {
  // Normalize string and array arguments
  let names = namesArgument;
  if (typeof names === "string") {
    names = [names];
  }

  const icons = {};
  names.forEach((name) => {
    switch (name) {
      case "send":
        icons[name] = Send;
        return;
      default:
        return;
    }
  });

  return icons;
}

export default useIcons;
