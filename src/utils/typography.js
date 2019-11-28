import Typography from "typography";
import githubTheme from "typography-theme-github";

githubTheme.baseFontSize = "18px";

const typography = new Typography(githubTheme);

export const { scale, rhythm, options } = typography;
export default typography;
