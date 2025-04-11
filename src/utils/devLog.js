/**
 * @default devLog(...args)
 * @description A function that logs anything passed in to it in the dev env only.
 * @param  {...any} args
 * @example devLog("Hello, world" + " Flynn"); // Hello, world Flynn
 */

// Todo change it's value in production env.
const isDevMode = true;

export default function devLog(...args) {
  if (isDevMode) {
    console.log(...args);
  }
}
