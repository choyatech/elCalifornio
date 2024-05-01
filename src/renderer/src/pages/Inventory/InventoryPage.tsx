import { AppLayout } from '@renderer/components'
import { ReactElement } from 'react'

export const InventoryPage = (): ReactElement => {
  return (
    <AppLayout>
      <AppLayout.Content>
        <h1>Tabla Inventarios</h1>
      </AppLayout.Content>
    </AppLayout>
  )
}