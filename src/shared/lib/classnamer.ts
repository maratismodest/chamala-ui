export const classnamer = (classes: unknown[]) =>
    classes.filter((item) => item && typeof item === "string").join(" ");
