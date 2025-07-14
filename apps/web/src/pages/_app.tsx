import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Chatbot } from '@/components/Chatbot'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
          <Chatbot />
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}
