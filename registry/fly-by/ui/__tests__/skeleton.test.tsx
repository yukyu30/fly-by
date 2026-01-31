import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skeleton } from "../skeleton"

describe('Skeleton', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(<Skeleton data-testid="skeleton" />)
      expect(screen.getByTestId('skeleton')).toBeInTheDocument()
    })

    it('data-slot="skeleton"が設定される', () => {
      render(<Skeleton data-testid="skeleton" />)
      expect(screen.getByTestId('skeleton')).toHaveAttribute('data-slot', 'skeleton')
    })

    it('skeletonクラスが付与される', () => {
      render(<Skeleton data-testid="skeleton" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('skeleton')
    })

    it('aria-hidden="true"が設定される', () => {
      render(<Skeleton data-testid="skeleton" />)
      expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('shape バリアント', () => {
    it('デフォルトでrectangleが適用される', () => {
      render(<Skeleton data-testid="skeleton" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('-shape-rectangle')
    })

    it('shape="circle"が適用される', () => {
      render(<Skeleton data-testid="skeleton" shape="circle" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('-shape-circle')
    })

    it('shape="text"が適用される', () => {
      render(<Skeleton data-testid="skeleton" shape="text" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('-shape-text')
    })
  })
})
