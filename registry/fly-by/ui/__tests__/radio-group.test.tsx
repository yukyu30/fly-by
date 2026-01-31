import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RadioGroup, RadioGroupItem } from "../radio-group"

describe('RadioGroup', () => {
  describe('レンダリング', () => {
    it('コンポーネントが正常にレンダリングされる', () => {
      render(
        <RadioGroup data-testid="radio-group">
          <RadioGroupItem value="1" data-testid="radio-item" />
        </RadioGroup>
      )
      expect(screen.getByTestId('radio-group')).toBeInTheDocument()
    })

    it('data-slot="radio-group"が設定される', () => {
      render(
        <RadioGroup data-testid="radio-group">
          <RadioGroupItem value="1" />
        </RadioGroup>
      )
      expect(screen.getByTestId('radio-group')).toHaveAttribute('data-slot', 'radio-group')
    })

    it('radio-groupクラスが付与される', () => {
      render(
        <RadioGroup data-testid="radio-group">
          <RadioGroupItem value="1" />
        </RadioGroup>
      )
      expect(screen.getByTestId('radio-group')).toHaveClass('radio-group')
    })
  })
})

describe('RadioGroupItem', () => {
  describe('レンダリング', () => {
    it('data-slot="radio-group-item"が設定される', () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="1" data-testid="radio-item" />
        </RadioGroup>
      )
      expect(screen.getByTestId('radio-item')).toHaveAttribute('data-slot', 'radio-group-item')
    })

    it('radio-group-itemクラスが付与される', () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="1" data-testid="radio-item" />
        </RadioGroup>
      )
      expect(screen.getByTestId('radio-item')).toHaveClass('radio-group-item')
    })
  })

  describe('size バリアント', () => {
    it('デフォルトでmが適用される', () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="1" data-testid="radio-item" />
        </RadioGroup>
      )
      expect(screen.getByTestId('radio-item')).toHaveClass('-size-m')
    })

    it('size="l"が適用される', () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="1" data-testid="radio-item" size="l" />
        </RadioGroup>
      )
      expect(screen.getByTestId('radio-item')).toHaveClass('-size-l')
    })
  })

  describe('color バリアント', () => {
    it('デフォルトでinformativeが適用される', () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="1" data-testid="radio-item" />
        </RadioGroup>
      )
      expect(screen.getByTestId('radio-item')).toHaveClass('-color-informative')
    })

    it('color="positive"が適用される', () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="1" data-testid="radio-item" color="positive" />
        </RadioGroup>
      )
      expect(screen.getByTestId('radio-item')).toHaveClass('-color-positive')
    })
  })
})
