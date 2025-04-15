import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/components/Banner/index.ts',
    'src/components/Button/index.ts',
    'src/components/Sidebar/index.ts',
    'src/components/Sidebar/content.tsx',
    'src/components/Sidebar/footer.tsx',
    'src/components/Sidebar/header.tsx',
    'src/components/Sidebar/navRail.tsx',
    'src/components/Sidebar/Sidebar.tsx',
    'src/components/Card/index.ts',
    'src/components/Card/card.tsx',
    'src/components/Input/index.ts',
    'src/components/Modal/index.ts',
    'src/components/Modal/modal.tsx',
    'src/components/Radio/index.ts',
    'src/components/Radio/radio.tsx',
    'src/components/Select/index.ts',
    'src/components/Switch/index.ts',
    'src/components/Switch/switch.tsx',
    'src/components/Table/index.ts',
    'src/components/Table/table.tsx',
    'src/components/Tabs/index.ts',
    'src/components/Tabs/tabs.tsx',
    'src/components/ui/avatar.tsx',
    'src/components/ui/alert.tsx',
    'src/components/ui/button.tsx',
    'src/components/ui/card.tsx',
    'src/components/ui/collapsible.tsx',
    'src/components/ui/dialog.tsx',
    'src/components/ui/dropdown-menu.tsx',
    'src/components/ui/input.tsx',
    'src/components/ui/radio.tsx',
    'src/components/ui/select.tsx',
    'src/components/ui/separator.tsx',
    'src/components/ui/sheet.tsx',
    'src/components/ui/skeleton.tsx',
    'src/components/ui/switch.tsx',
    'src/components/ui/table.tsx',
    'src/components/ui/tabs.tsx',
    'src/components/ui/tooltip.tsx',
    'src/components/index.ts',
    'src/hooks/use-mobile.ts',
    'src/lib/utils.ts',
    'src/types/index.ts',
    'src/utils/codeToHtml.ts',
    'src/style/colors.ts',
    'src/style/_variables.css',
    'src/style/globals.css',
    'src/style/theme.css',
  ],
  dts: {
    entry: [
      'src/index.ts',
      'src/components/Banner/index.ts',
      'src/components/Button/index.ts',
      'src/components/Sidebar/index.ts',
      'src/components/Sidebar/content.tsx',
      'src/components/Sidebar/footer.tsx',
      'src/components/Sidebar/header.tsx',
      'src/components/Sidebar/navRail.tsx',
      'src/components/Sidebar/Sidebar.tsx',
      'src/components/Card/index.ts',
      'src/components/Card/card.tsx',
      'src/components/Input/index.ts',
      'src/components/Modal/index.ts',
      'src/components/Modal/modal.tsx',
      'src/components/Radio/index.ts',
      'src/components/Radio/radio.tsx',
      'src/components/Select/index.ts',
      'src/components/Switch/index.ts',
      'src/components/Switch/switch.tsx',
      'src/components/Table/index.ts',
      'src/components/Table/table.tsx',
      'src/components/Tabs/index.ts',
      'src/components/Tabs/tabs.tsx',
      'src/components/ui/avatar.tsx',
      'src/components/ui/alert.tsx',
      'src/components/ui/button.tsx',
      'src/components/ui/card.tsx',
      'src/components/ui/collapsible.tsx',
      'src/components/ui/dialog.tsx',
      'src/components/ui/dropdown-menu.tsx',
      'src/components/ui/input.tsx',
      'src/components/ui/radio.tsx',
      'src/components/ui/select.tsx',
      'src/components/ui/separator.tsx',
      'src/components/ui/sheet.tsx',
      'src/components/ui/skeleton.tsx',
      'src/components/ui/switch.tsx',
      'src/components/ui/table.tsx',
      'src/components/ui/tabs.tsx',
      'src/components/ui/tooltip.tsx',
      'src/components/index.ts',
      'src/hooks/use-mobile.ts',
      'src/lib/utils.ts',
      'src/types/index.ts',
      'src/utils/codeToHtml.ts',
      'src/style/colors.ts',
    ],
  },
  clean: true,
  sourcemap: true,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  skipNodeModulesBundle: true,
});
