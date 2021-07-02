# Welcome to Launch UI - Solid JS Version

A UI library containing a set of beautiful Solid JS components.

Storybook available at [launch-ui.netlify.app](https://launch-ui.netlify.app/).

## Installation

```bash
npm install @launch/solid
# or
yarn add @launch/solid
```

## Prerequisites

- [yarn](https://yarnpkg.com/getting-started/install) _The project uses yarn over alternatives such as NPM/PNPM/..._
- [node](https://nodejs.org/)

## Clone & Setup

Clone the repository to your local machine.

```bash
$ git clone git@github.com:launch-ai/launch-ui.git
```

Install dependencies & git hooks.

```bash
$ yarn install
```

Run the storybook.

```bash
$ yarn run storybook
```

### Styling

Styling is done with [Emotion](https://emotion.sh/) and [twin.macro](https://github.com/ben-rogerson/twin.macro) using a custom styled util.

Example:

```tsx
import tw from 'twin.macro'
import { styled } from './src/utils/styled'
type ButtonProps = { block: boolean; children: any }
type StyledButtonProps = ButtonProps
const baseStyles = tw`border border-black px-4 py-2`
const blockStyles = ({ block }: StyledButtonProps) => block && tw`block w-full`
const StyledButton = styled<StyledButtonProps>('button')([
  baseStyles,
  blockStyles,
])
function Button(props: ButtonProps) {
  const { children } = props
  return <StyledButton {...props}>{children}</StyledButton>
}
export default Button
```

### Commit messages

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) is used for all commit messages with the [AngularJS](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) variation.

This is enforced by a pre-commit hook with [commitlint](https://github.com/conventional-changelog/commitlint). If your commit message does not meet the conventional commits standard, the commit hook will fail. This helps with generating changelogs with version updates.

In summary, the commit message header has the following format:

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: products|orders|settings|...
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The commit type must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests

### Pre-commit Hooks

[Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged#readme) is used for pre-commit git hooks.

When you execute a commit, the following commands will be executed:

- Lint staged files:

  `npx lint-staged`

- Validate commit message:

  `npx --no-install commitlint --edit ""`

The configuration can be found in `.husky/pre-commit` and in package.json under `"lint-staged"`.

Additional hooks can be added with:

```bash
npx husky add .husky/pre-commit "yarn test"
```
