import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetUno()],
  safelist: [
    'neversink-diracx-scheme',
    'ns-c-dx-scheme',
    'neversink-diracx-light-scheme',
    'ns-c-dx-lt-scheme',
    'neversink-diracx-green-scheme',
    'ns-c-dx-gr-scheme',
    'neversink-diracx-green-light-scheme',
    'ns-c-dx-gr-lt-scheme',
    'diracx-accent',
    'diracx-green-accent',
    'bg-diracx-gradient',
    'diracx-logo',
    'section-diracx',
  ],
  transformers: [transformerDirectives()],
})
