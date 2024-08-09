import { SessionProvider } from 'next-auth/react'
import React from 'react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

const Provider = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <SessionProvider>
      <>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
      </>
    </SessionProvider>
  )
}

export default Provider