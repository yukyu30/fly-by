import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AspectRatio } from "../aspect-ratio"

describe('AspectRatio', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(
        <AspectRatio data-testid="aspect-ratio" ratio={16 / 9}>
          <div>Content</div>
        </AspectRatio>
      )
      expect(screen.getByTestId('aspect-ratio')).toBeInTheDocument()
    })

    it('data-slot="aspect-ratio"が設定される', () => {
      render(
        <AspectRatio data-testid="aspect-ratio" ratio={16 / 9}>
          <div>Content</div>
        </AspectRatio>
      )
      expect(screen.getByTestId('aspect-ratio')).toHaveAttribute('data-slot', 'aspect-ratio')
    })

    it('aspect-ratioクラスが付与される', () => {
      render(
        <AspectRatio data-testid="aspect-ratio" ratio={16 / 9}>
          <div>Content</div>
        </AspectRatio>
      )
      expect(screen.getByTestId('aspect-ratio')).toHaveClass('aspect-ratio')
    })

    it('子要素がレンダリングされる', () => {
      render(
        <AspectRatio ratio={16 / 9}>
          <div>Content</div>
        </AspectRatio>
      )
      expect(screen.getByText('Content')).toBeInTheDocument()
    })
  })
})
