const c = (...classNames: (string|null|undefined)[]) => {

    return classNames.filter(Boolean).join(" ");
};
export default c;