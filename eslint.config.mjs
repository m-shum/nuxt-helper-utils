// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: true,
  },
  dirs: {
    src: ['./playground'],
  },
})
  .append(
    // your custom flat config here...
    {
      rules: {
        'no-console': 'off',
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@stylistic/comma-dangle': 'off',
        '@stylistic/max-statements-per-line': 'off',
      },
    }
  )
  .override('nuxt/typescript/rules', {
    rules: {
      // Add or modify TypeScript-specific rules here
      // '@typescript-eslint/semi': ['error', 'never'],
    },
  })
