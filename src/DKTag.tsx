import React from 'react'
import styled, { css } from 'styled-components'

/**
 * 2套标签主题色(默认: normal)
 * normal: 字体颜色和背景色相似
 * light: 字体颜色为白色, 背景色更加明亮
 *
 * @type Props
 */
export type Props = {
	color: 'success' | 'complete' | 'warning' | 'error' | 'disabled' | 'neutral' | 'green'
  theme?: 'light' | 'normal'
	size?: 'normal' | 'mini'
}

const StyledTag = styled.span<Props>`
  min-width: 56px;
  height: 24px;
  padding: 0 14px;
  box-sizing: border-box;
  line-height: 24px;
  text-align: center;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  display: inline-block;

  /* Color variants */
  ${({ color, theme }) => {
    switch (color) {
      case 'success':
        return theme === 'light'
          ? css`color: #fff; background: #52c41a;`
          : css`color: #52c41a; background: #DAF9F0;`;
      case 'complete':
        return css`color: #5062EC; background: rgba(80, 98, 236, 0.1);`;
      case 'warning':
        return css`color: #faad14; background: rgba(247, 201, 57, 0.1);`;
      case 'error':
        return theme === 'light'
          ? css`color: #fff; background: #ff4d4f;`
          : css`color: #ff4d4f; background: rgba(247, 61, 108, 0.1);`;
      case 'disabled':
        return css`color: #bfbfbf; background: #D7DBDF;`;
      case 'neutral':
        return css`color: #0097E0; background: rgba(0, 151, 224, 0.1);`;
      case 'green':
        return css`color: #92DB35; background: rgba(146, 219, 53, 0.2);`;
      default:
        return css``;
    }
  }}

  /* Size variants */
  ${({ size }) => size === 'mini' && css`
    min-width: 40px;
    height: 20px;
    line-height: 20px;
    padding: 0 4px;
  `}
`

const DKTag: React.FC<Props> = React.memo(({ color, theme = 'normal', size = 'normal', children }) => {
	return (
		<StyledTag color={color} theme={theme} size={size}>
			{children}
		</StyledTag>
	)
})

export default DKTag
