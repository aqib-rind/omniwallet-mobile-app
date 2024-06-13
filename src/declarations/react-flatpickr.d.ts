declare module 'react-flatpickr' {
    import * as React from 'react';
    import * as flatpickr from 'flatpickr';
    import * as moment from 'moment';

    export interface DateTimePickerProps {
        //
        //  Component props
        //
        className?: string;
        disabled?: boolean;
        //
        //  DateTimePicker props
        //
        defaultValue?: string | Date | number | moment.Moment;
        options?: flatpickr.Options.Options;
        onChange?: flatpickr.Options.Hook;
        onOpen?: flatpickr.Options.Hook;
        onClose?: flatpickr.Options.Hook;
        onMonthChange?: flatpickr.Options.Hook;
        onYearChange?: flatpickr.Options.Hook;
        onReady?: flatpickr.Options.Hook;
        onValueUpdate?: flatpickr.Options.Hook;
        onDayCreate?: flatpickr.Options.Hook;
    }
}

