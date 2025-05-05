# Landing NR01

## Project structure

- app/
  1. _api-resources (This is where you'll make api calls)
  2. / (pages...)
  3. / pages/components (Non reusable components or components reusable only by page components)

- components/
  1. ui/ (This is where shadcnui components will be put)
  2. / (custom reusable components)

## Good practices
1. Use tailwind-merge to create variants
2. Server first (Always think server first, so when the user don't need to have complex interactions use server components)
3. Always check if there are already a component for what you're thinking to do, if there aren't go to a pre built component from shadcn/ui and style as you want.
4. Don't just copy paste code from AI (Understand first then use it.)

## Resources
- The first thing to do when in doubt is the docs: https://nextjs.org/docs
- This isn't much updated but can serve as a starting point (Things were cached by default on nextjs 14 but in 15 it changed: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching): https://github.com/VictorAugDB/galactic-gamble-grid/tree/main
- Shadcn/ui for looking for pre built components: https://ui.shadcn.com/docs/components/accordion
- Icons: https://lucide.dev/icons/
- Animations: https://motion.dev/docs/react-animation

## Libs
1. Tailwindcss
2. Shadcn/ui
3. lucide-react (icons)
4. motion/react (animations)

## Possible errors
1. When animating on server components use `import * as motion from "motion/react-client"` to avoid `Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined`: https://www.reddit.com/r/nextjs/comments/1hz7hx8/nextjs_framer_motion_getting_type_is_invalid/
  