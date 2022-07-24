import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { BadgeCheckIcon } from '@heroicons/react/solid'

type Title = {
  title: string
  children: ReactNode
  header?: ReactNode
}

export const Layout: FC<Title> = ({ header, children, title = 'Todo app' }) => {
  return (
    <div className="font-mono text-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="h-24 h-24 w-full bg-sky-500">{header}</header>
      <main className="flex h-screen w-full justify-between">{children}</main>
      <footer className="flex h-24 w-full items-center justify-center border-t bg-sky-500">
        <BadgeCheckIcon className="h-12 w-12 text-blue-500" />
      </footer>
    </div>
  )
}
