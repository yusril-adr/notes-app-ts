const DateParser = {
  showFormattedDate(date: Date) {
    const options: Object = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-US', options);
  },
};

export default DateParser;
