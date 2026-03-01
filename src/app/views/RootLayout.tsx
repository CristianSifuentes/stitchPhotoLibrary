import { PropsWithChildren } from 'react';

export function RootLayout({ children }: PropsWithChildren) {
  return <div className="app-shell">{children}</div>;
}
