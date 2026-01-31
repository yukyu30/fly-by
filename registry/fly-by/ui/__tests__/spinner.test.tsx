import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spinner } from "../spinner"

describe('Spinner', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<Spinner data-testid="spinner" />)
      expect(screen.getByTestId('spinner')).toBeInTheDocument()
    })

    it('data-slot="spinner"が設定される', () => {
      render(<Spinner data-testid="spinner" />)
      expect(screen.getByTestId('spinner')).toHaveAttribute('data-slot', 'spinner')
    })

    it('spinnerクラスが付与される', () => {
      render(<Spinner data-testid="spinner" />)
      expect(screen.getByTestId('spinner')).toHaveClass('spinner')
    })

    it('role="status"が設定される', () => {
      render(<Spinner data-testid="spinner" />)
      expect(screen.getByTestId('spinner')).toHaveAttribute('role', 'status')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(<Spinner data-testid="spinner" />)
      expect(screen.getByTestId('spinner')).toHaveClass('-size-m')
    })

    it('size="l"が適用される', () => {
      render(<Spinner data-testid="spinner" size="l" />)
      expect(screen.getByTestId('spinner')).toHaveClass('-size-l')
    })
  })

  describe('color バリアント', () => {
    it('デフォルトでneutralが適用される', () => {
      render(<Spinner data-testid="spinner" />)
      expect(screen.getByTestId('spinner')).toHaveClass('-color-neutral')
    })

    it('color="informative"が適用される', () => {
      render(<Spinner data-testid="spinner" color="informative" />)
      expect(screen.getByTestId('spinner')).toHaveClass('-color-informative')
    })
  })
})
