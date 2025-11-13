import React from 'react';
import type { DateOrString } from './utils';
/** refer : zarm calendar (https://zarm.gitee.io/)  */
export type ValueType = Date | Date[] | DateOrString | DateOrString[];
/** 移动端日历  */
declare const Calendar: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<HTMLDivElement>>;
export default Calendar;
