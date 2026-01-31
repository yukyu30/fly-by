import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Toggle } from "../toggle"

describe('Toggle', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<Toggle data-testid="toggle">B</Toggle>)
      expect(screen.getByTestId('toggle')).toBeInTheDocument()
    })

    it('data-slot="toggle"が設定される', () => {
      render(<Toggle data-testid="toggle">B</Toggle>)
      expect(screen.getByTestId('toggle')).toHaveAttribute('data-slot', 'toggle')
    })

    it('toggleクラスが付与される', () => {
      render(<Toggle data-testid="toggle">B</Toggle>)
      expect(screen.getByTestId('toggle')).toHaveClass('toggle')
    })
  })

  describe('appearance バリアント', () => {
    it('デフォルトでdefaultが適用される', () => {
      render(<Toggle data-testid="toggle">B</Toggle>)
      expect(screen.getByTestId('toggle')).toHaveClass('-appearance-default')
    })

    it('appearance="outlined"が適用される', () => {
      render(<Toggle data-testid="toggle" appearance="outlined">B</Toggle>)
      expect(screen.getByTestId('toggle')).toHaveClass('-appearance-outlined')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<Toggle data-testid="toggle">B</Toggle>)
      expect(screen.getByTestId('toggle')).toHaveClass('-size-m')
    })

    it('size="l"が適用される', () => {
      render(<Toggle data-testid="toggle" size="l">B</Toggle>)
      expect(screen.getByTestId('toggle')).toHaveClass('-size-l')
    })
  })
})
