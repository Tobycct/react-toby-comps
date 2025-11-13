import React from 'react';
/**
 * 2套标签主题色(默认: normal)
 * normal: 字体颜色和背景色相似
 * light: 字体颜色为白色, 背景色更加明亮
 *
 * @type Props
 */
export type Props = {
    color: 'success' | 'complete' | 'warning' | 'error' | 'disabled' | 'neutral' | 'green';
    theme?: 'light' | 'normal';
    size?: 'normal' | 'mini';
};
declare const DKTag: React.FC<Props>;
export default DKTag;
