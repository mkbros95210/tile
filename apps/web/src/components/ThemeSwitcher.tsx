import { useTheme } from 'next-themes'
import { Button } from '@repo/ui/button'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </Button>
  )
}
