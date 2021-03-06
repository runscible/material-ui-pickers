import * as PropTypes from 'prop-types';
import { TimePickerProps } from '../TimePicker';
import { DateTimePickerProps } from '../DateTimePicker';
import { DatePickerProps } from '../DatePicker/DatePicker';

const date = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.string,
  PropTypes.number,
  PropTypes.instanceOf(Date),
]);

const datePickerView = PropTypes.oneOf(['year', 'month', 'day']);

export type DateType = object | string | number | Date | null | undefined;

export const DomainPropTypes = { date, datePickerView };

/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */
export const timePickerDefaultProps = {
  ampm: true,
  invalidDateMessage: 'Invalid Time Format',
} as TimePickerProps;

export const datePickerDefaultProps = {
  views: ['day', 'year'],
  invalidDateMessage: 'Invalid Date Format',
  minDateMessage: 'Date should not be before minimal date',
  maxDateMessage: 'Date should not be after maximal date',
  allowKeyboardControl: true,
} as DatePickerProps;

export const dateTimePickerDefaultProps = {
  ...timePickerDefaultProps,
  ...datePickerDefaultProps,
  showTabs: true,
  // @ts-ignore
  views: undefined,
} as DateTimePickerProps;
